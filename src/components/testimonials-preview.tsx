import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { clientStories } from '@/lib/data';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function TestimonialsPreview() {
  const previewStory = clientStories[0];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Client Success
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            See how I've helped businesses like yours achieve their goals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
            <Card>
                <CardContent className="p-8">
                    <MessageSquare className="w-8 h-8 text-accent mb-4"/>
                    <blockquote className="text-lg italic text-muted-foreground">
                        "{previewStory.story}"
                    </blockquote>
                    <p className="mt-6 font-semibold text-right">- {previewStory.title}</p>
                </CardContent>
            </Card>
        </div>

        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="/testimonials">
                    View More Success Stories <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
