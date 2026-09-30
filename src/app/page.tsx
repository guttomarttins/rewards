/**
 * Main Landing Page - Microsoft Rewards Brasil
 */

import {
  Header,
  Hero,
  Rewards,
  HowItWorks,
  Calculator,
  Testimonials,
  FAQ,
  FinalCTA,
  Footer,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <Rewards />
        <HowItWorks />
        <Calculator />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}