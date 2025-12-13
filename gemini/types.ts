export type Language = 'en' | 'he';

export interface NavItem {
  label: string;
  href: string;
}

export interface ContentSection {
  title: string;
  subtitle?: string;
  body: string | string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  iconName: string;
}

export interface JobOpening {
  title: string;
  location: string;
  type: string;
  description: string;
}

export interface SiteContent {
  nav: {
    home: string;
    about: string;
    team: string;
    expertise: string;
    career: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: ContentSection & {
    stats: { label: string; value: string }[];
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  expertise: {
    title: string;
    subtitle: string;
    items: ExpertiseItem[];
  };
  career: {
    title: string;
    subtitle: string;
    openings: JobOpening[];
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    rights: string;
  };
}