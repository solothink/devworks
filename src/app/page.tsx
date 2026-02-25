import { About } from '@/components/about';
import { Hero } from '@/components/hero';
import { Portfolio } from '@/components/portfolio';
import { Services } from '@/components/services';
import { Process } from '@/components/process';
import { TestimonialsPreview } from '@/components/testimonials-preview';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <Services />
      <Portfolio />
      <TestimonialsPreview />
    </>
  );
}