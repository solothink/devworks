'use client';

import dynamic from 'next/dynamic';
import { TerminalAnimation } from './terminal-animation';

const SplineAnimation = dynamic(
  () => import('./spline-animation').then((mod) => mod.SplineAnimation),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-primary-foreground overflow-hidden">
      <SplineAnimation />
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <TerminalAnimation />
      </div>
    </section>
  );
}
