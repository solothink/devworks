'use client';

import { TerminalAnimation } from './terminal-animation';

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-primary-foreground overflow-hidden bg-background">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <TerminalAnimation />
      </div>
    </section>
  );
}
