import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { ServicesPreview } from "@/components/sections/services-preview";
import { AboutPreview } from "@/components/sections/about-preview";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <ServicesPreview />
      <AboutPreview />
      <CTA />
    </>
  );
}
