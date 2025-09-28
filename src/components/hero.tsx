import { TerminalAnimation } from './terminal-animation';

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <TerminalAnimation />
      </div>
    </section>
  );
}
