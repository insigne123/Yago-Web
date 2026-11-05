/** Perfiles reales autorizados. La especialidad describe el trabajo; jobTitle requiere un cargo confirmado. */
export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  profileUrl?: string;
  jobTitle?: string;
  specialties?: string[];
};

export const EDITORIAL_AUTHOR: TeamMember = {
  slug: "nicolas-yarur",
  name: "Nicolas Yarur",
  role: "Fundador de YAGO. Desarrollo de soluciones, automatización e integración de IA",
  bio: "Nicolas Yarur es fundador de YAGO. Cuenta con experiencia en el desarrollo de soluciones y automatizaciones empresariales con inteligencia artificial, y en la integración de IA en ambientes empresariales.",
  profileUrl: "https://www.linkedin.com/in/nicolas-yarur/",
  jobTitle: "Fundador",
  specialties: [
    "Desarrollo de soluciones empresariales con inteligencia artificial",
    "Automatización de procesos empresariales con IA",
    "Integración de IA en ambientes empresariales",
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [EDITORIAL_AUTHOR];

export function getPersonJsonLd(member: TeamMember, base: string) {
  const profileUrl = new URL(`/nosotros#${member.slug}`, base).toString();
  return {
    "@type": "Person",
    "@id": profileUrl,
    name: member.name,
    description: member.bio,
    url: profileUrl,
    worksFor: { "@id": new URL("/#organization", base).toString() },
    ...(member.jobTitle ? { jobTitle: member.jobTitle } : {}),
    ...(member.specialties?.length ? { knowsAbout: member.specialties } : {}),
    ...(member.profileUrl ? { sameAs: [member.profileUrl] } : {}),
  };
}
