type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, RateLimitEntry>();
const MAX_BUCKETS = 10_000;
let checksSinceCleanup = 0;

function getClientIp(request: Request) {
  const forwarded = request.headers
    .get("x-forwarded-for")
    ?.split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  // Google frontends append the client and load-balancer addresses. Reading
  // from the trusted end avoids client-supplied prefixes when they are present.
  if (forwarded?.length && forwarded.length >= 2) return forwarded[forwarded.length - 2];
  return request.headers.get("x-real-ip")?.trim() || forwarded?.[0] || "unknown";
}

function cleanupBuckets(now: number) {
  checksSinceCleanup += 1;
  if (checksSinceCleanup < 100 && buckets.size < MAX_BUCKETS) return;

  checksSinceCleanup = 0;
  for (const [key, entry] of buckets) {
    if (entry.resetAt <= now) buckets.delete(key);
  }

  while (buckets.size >= MAX_BUCKETS) {
    const oldestKey = buckets.keys().next().value;
    if (!oldestKey) break;
    buckets.delete(oldestKey);
  }
}

export function checkRateLimit(
  request: Request,
  { namespace, limit, windowMs }: { namespace: string; limit: number; windowMs: number }
) {
  const now = Date.now();
  cleanupBuckets(now);
  const key = `${namespace}:${getClientIp(request)}`;
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}
