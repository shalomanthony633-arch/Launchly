import { Hero } from "@/components/marketing/hero";
import { TemplatesSection } from "@/components/marketing/templates-section";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { CtaSection } from "@/components/marketing/cta-section";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <TemplatesSection />
      <HowItWorks />
      <CtaSection />
    </>
  );
}
