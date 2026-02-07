export type EmailFormPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  topic?: string;
  hp?: string;

  // Attribution (optional; used for lead source tracking)
  ft_utm_source?: string;
  ft_utm_medium?: string;
  ft_utm_campaign?: string;
  ft_utm_term?: string;
  ft_utm_content?: string;
  ft_referrer?: string;
  ft_landing?: string;
  ft_ts?: string;

  lt_utm_source?: string;
  lt_utm_medium?: string;
  lt_utm_campaign?: string;
  lt_utm_term?: string;
  lt_utm_content?: string;
  lt_referrer?: string;
  lt_landing?: string;
  lt_ts?: string;
};
