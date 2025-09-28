import { TestimonialSelector } from "@/components/testimonial-selector";
import { HeartHandshake } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HeartHandshake className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Client Success Stories
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              I partner with clients to build solutions that drive results. Use the selector below to find a success story from a specific industry.
            </p>
          </div>
          <TestimonialSelector />
        </div>
      </div>
    </div>
  );
}
