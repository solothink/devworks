import { processSteps } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            My Development Method
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A battle-tested workflow designed to move from idea to deployment with precision and speed.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div key={step.step} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative h-full bg-card border-none">
                <CardContent className="pt-10">
                  <span className="absolute top-4 right-4 text-4xl font-bold opacity-10 font-headline">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold mb-3 font-headline text-primary">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}