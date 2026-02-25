import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket, Heart, ArrowRight, MessageSquareCode } from 'lucide-react';

export default function ProjectTeaserPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background p-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="relative inline-block">
          <Rocket className="h-20 w-20 text-primary mx-auto mb-4 animate-bounce" />
          <Heart className="h-8 w-8 text-accent absolute -top-2 -right-2 animate-pulse" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-foreground">
          Yah got u!
        </h1>
        
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body">
            U feel kind a exited for my project, i like it!
          </p>
          <div className="h-px w-24 bg-primary/30 mx-auto my-6" />
          <p className="text-lg md:text-xl text-foreground font-medium italic">
            "Please contact me to get the real world solution for your thoughtful thinking."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button asChild size="lg" className="group">
            <Link href="/contact">
              <MessageSquareCode className="mr-2 h-5 w-5" />
              Let's Build It Together
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/#portfolio">
              Back to Solutions
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
