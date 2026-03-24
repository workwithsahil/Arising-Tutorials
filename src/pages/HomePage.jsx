import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import SocialProof from "../components/SocialProof";
import Features from "../components/Features";
import ResultsPreview from "../components/ResultsPreview";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <SocialProof />
      <Features limit={4} />
      <ResultsPreview />
      <Testimonials limit={3} />
      <CTABanner />
    </>
  );
}
