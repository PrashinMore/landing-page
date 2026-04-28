"use client";

import { useMemo, useState } from "react";
import { landingConfig } from "@/data/landing-config";
import { ThemeKey } from "@/types/landing";
import { BeforeAfterSection } from "./before-after";
import { CtaFormSection } from "./cta-form";
import { FeaturesSection } from "./features";
import { Footer } from "./footer";
import { HeroSection } from "./hero";
import { Navbar } from "./navbar";
import { PortfolioSection } from "./portfolio";
import { SocialProofSection } from "./social-proof";
import { WhatsappFloat } from "./whatsapp-float";

export function LandingPage() {
  const [theme, setTheme] = useState<ThemeKey>("restaurant");
  const selectedTheme = useMemo(() => landingConfig.themes[theme], [theme]);

  return (
    <div className="bg-white text-slate-800">
      <Navbar
        items={landingConfig.navItems}
        selectedTheme={theme}
        onThemeChange={setTheme}
        themes={Object.entries(landingConfig.themes).map(([key, value]) => ({
          key: key as ThemeKey,
          label: value.label,
        }))}
      />
      <HeroSection
        badge={landingConfig.hero.badge}
        headline={landingConfig.hero.headline}
        highlightedWord={landingConfig.hero.highlightedWord}
        subheading={landingConfig.hero.subheading}
        ctaPrimary={landingConfig.hero.ctaPrimary}
        ctaSecondary={landingConfig.hero.ctaSecondary}
        previewImage={landingConfig.hero.previewImage}
        accentClass={selectedTheme.accentSoft}
        gradientClass={`${selectedTheme.gradientFrom} ${selectedTheme.gradientVia} ${selectedTheme.gradientTo}`}
      />
      <SocialProofSection
        title={landingConfig.socialProof.title}
        subtitle={landingConfig.socialProof.subtitle}
        testimonials={landingConfig.socialProof.testimonials}
      />
      <FeaturesSection
        title={landingConfig.features.title}
        subtitle={landingConfig.features.subtitle}
        items={landingConfig.features.items}
      />
      <BeforeAfterSection
        title={landingConfig.beforeAfter.title}
        subtitle={landingConfig.beforeAfter.subtitle}
        cards={landingConfig.beforeAfter.cards}
      />
      <PortfolioSection
        title={landingConfig.portfolio.title}
        subtitle={landingConfig.portfolio.subtitle}
        items={landingConfig.portfolio.items}
      />
      <CtaFormSection
        title={landingConfig.cta.title}
        subtitle={landingConfig.cta.subtitle}
        buttonLabel={landingConfig.cta.buttonLabel}
        accentClass={selectedTheme.accent}
      />
      <Footer
        agencyName={landingConfig.agencyName}
        contactEmail={landingConfig.contactEmail}
        phone={landingConfig.phone}
        tagline={landingConfig.footer.tagline}
        socialLinks={landingConfig.footer.socialLinks}
      />
      <WhatsappFloat whatsappNumber={landingConfig.whatsappNumber} />
    </div>
  );
}
