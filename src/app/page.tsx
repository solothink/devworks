import { About } from '@/components/about';
import { Hero } from '@/components/hero';
import { Portfolio } from '@/components/portfolio';
import { Services } from '@/components/services';
import { TestimonialsPreview } from '@/components/testimonials-preview';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TestimonialsPreview />
    </>
  );
}
