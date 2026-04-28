import { LandingConfig } from "@/types/landing";

export const landingConfig: LandingConfig = {
  agencyName: "PixelCraft Studio",
  contactEmail: "hello@pixelcraftstudio.com",
  phone: "+91 90000 00000",
  whatsappNumber: "919324115782",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "Reviews", href: "#reviews" },
    { label: "Features", href: "#features" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    badge: "Trusted by local businesses",
    headline: "Turn More Visitors Into",
    highlightedWord: "Paying Customers",
    subheading:
      "Get a premium website that builds trust, drives calls, and helps your business stand out in your city.",
    ctaPrimary: "Get Your Website",
    ctaSecondary: "See Examples",
    previewImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
  },
  socialProof: {
    title: "Real impact for local brands",
    subtitle: "What business owners say after launching their new website",
    testimonials: [
      {
        name: "Riya Sharma",
        business: "Urban Brew Cafe",
        quote:
          "Our weekend bookings jumped within two weeks. Customers now find us and trust us instantly.",
        rating: 5,
      },
      {
        name: "Ajay Patel",
        business: "FitZone Gym",
        quote:
          "The site made us look premium. We now get better quality leads from Instagram and Google.",
        rating: 5,
      },
      {
        name: "Neha Verma",
        business: "Glow & Grace Salon",
        quote:
          "Clients book faster because everything is clear on mobile. It feels like a big-brand experience.",
        rating: 4,
      },
    ],
  },
  features: {
    title: "Everything your business needs online",
    subtitle: "Built to convert visitors into calls, chats, and bookings",
    items: [
      {
        title: "Premium online presence",
        description: "A polished design that instantly builds trust.",
        icon: "globe",
      },
      {
        title: "More local customers",
        description: "Clear messaging and CTAs that increase inquiries.",
        icon: "users",
      },
      {
        title: "Mobile-first experience",
        description: "Fast, responsive layout for every screen size.",
        icon: "smartphone",
      },
      {
        title: "Lightning-fast performance",
        description: "Optimized pages that feel smooth and modern.",
        icon: "zap",
      },
      {
        title: "Easy contact options",
        description: "WhatsApp, call, and form flow for quick action.",
        icon: "messageCircle",
      },
      {
        title: "Simple lead capture",
        description: "Collect qualified leads without complexity.",
        icon: "calendar",
      },
    ],
  },
  beforeAfter: {
    title: "Before vs After transformation",
    subtitle: "Show prospects exactly what changes with a modern website",
    cards: [
      {
        title: "Brand impression",
        before: "Outdated social media profile only",
        after: "Professional website that looks premium and trustworthy",
      },
      {
        title: "Customer inquiries",
        before: "Random DMs with low intent",
        after: "Consistent leads through clear CTAs and forms",
      },
      {
        title: "Business growth",
        before: "Limited local visibility",
        after: "Stronger local presence and easier customer discovery",
      },
    ],
  },
  portfolio: {
    title: "Template demos you can customize fast",
    subtitle: "Use these as starting points for any local business niche",
    items: [
      {
        title: "Bistro Luxe",
        businessType: "Restaurant",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        href: "#",
        blurb: "Elegant menu highlights, reservations, and location-first layout.",
      },
      {
        title: "Aura Beauty",
        businessType: "Salon",
        image:
          "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
        href: "#",
        blurb: "Clean service cards, social proof, and booking-focused sections.",
      },
      {
        title: "Local Mart Pro",
        businessType: "Retail Shop",
        image:
          "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
        href: "#",
        blurb: "Product highlights, trust badges, and easy contact funnels.",
      },
    ],
  },
  cta: {
    title: "Let's build your next high-converting website",
    subtitle: "Tell us about your business and we will craft a custom layout.",
    buttonLabel: "Request My Website",
  },
  footer: {
    tagline: "Built for local businesses that want premium growth.",
    socialLinks: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
  themes: {
    restaurant: {
      label: "Restaurant",
      accent: "bg-amber-500",
      accentSoft: "text-amber-600",
      gradientFrom: "from-amber-50",
      gradientVia: "via-white",
      gradientTo: "to-orange-50",
    },
    salon: {
      label: "Salon",
      accent: "bg-rose-500",
      accentSoft: "text-rose-600",
      gradientFrom: "from-rose-50",
      gradientVia: "via-white",
      gradientTo: "to-pink-50",
    },
    gym: {
      label: "Gym",
      accent: "bg-indigo-500",
      accentSoft: "text-indigo-600",
      gradientFrom: "from-indigo-50",
      gradientVia: "via-white",
      gradientTo: "to-blue-50",
    },
  },
};
