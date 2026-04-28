export type ThemeKey = "restaurant" | "salon" | "gym";

export type LandingTheme = {
  label: string;
  accent: string;
  accentSoft: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Testimonial = {
  name: string;
  business: string;
  quote: string;
  rating: number;
};

export type Feature = {
  title: string;
  description: string;
  icon: "globe" | "users" | "smartphone" | "zap" | "messageCircle" | "calendar";
};

export type BeforeAfterCard = {
  title: string;
  before: string;
  after: string;
};

export type PortfolioItem = {
  title: string;
  businessType: string;
  image: string;
  href: string;
  blurb: string;
};

export type LandingConfig = {
  agencyName: string;
  contactEmail: string;
  phone: string;
  whatsappNumber: string;
  navItems: NavItem[];
  hero: {
    badge: string;
    headline: string;
    highlightedWord: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    previewImage: string;
  };
  socialProof: {
    title: string;
    subtitle: string;
    testimonials: Testimonial[];
  };
  features: {
    title: string;
    subtitle: string;
    items: Feature[];
  };
  beforeAfter: {
    title: string;
    subtitle: string;
    cards: BeforeAfterCard[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    items: PortfolioItem[];
  };
  cta: {
    title: string;
    subtitle: string;
    buttonLabel: string;
  };
  footer: {
    tagline: string;
    socialLinks: { label: string; href: string }[];
  };
  themes: Record<ThemeKey, LandingTheme>;
};
