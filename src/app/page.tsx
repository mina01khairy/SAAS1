import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { CTASection } from "@/components/landing/CTASection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <PublicNavbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Pricing />
        <CTASection />
      </main>
      <PublicFooter />
    </div>
  );
}
