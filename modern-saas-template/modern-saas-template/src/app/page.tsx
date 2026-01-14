import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { SocialProof } from '@/components/landing/SocialProof';
import { Features } from '@/components/landing/Features';
import { Pricing } from '@/components/landing/Pricing';
import { Testimonials } from '@/components/landing/Testimonials';
import { FAQ } from '@/components/landing/FAQ';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';

// Client wrapper for motion components
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={className}>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      <AnimatedSection className="pt-20">
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <SocialProof />
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <Features />
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <Pricing />
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <FAQ />
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <CTA />
      </AnimatedSection>

      <Footer />
    </main>
  );
}