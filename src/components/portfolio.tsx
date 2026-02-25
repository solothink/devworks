import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { portfolioProjects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Solutions & Business Impact
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            I don't just build apps; I engineer solutions that drive measurable growth and efficiency.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.image);
            return (
              <Card key={project.id} className="overflow-hidden flex flex-col border-primary/20 hover:border-primary/50 transition-colors">
                {projectImage && (
                  <div className="relative w-full h-56">
                    <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      data-ai-hint={projectImage.imageHint}
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute bottom-4 left-6">
                        <Badge variant="default" className="bg-primary/90 text-primary-foreground">
                            {project.impact}
                        </Badge>
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl flex justify-between items-center">
                    {project.title}
                    {project.caseStudy && <FileText className="h-5 w-5 text-muted-foreground" />}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">The Problem</h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">The Solution</h4>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto border-t pt-6 bg-muted/30">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex gap-2">
                        <Button variant="ghost" size="sm" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                    {project.caseStudy && (
                        <Button variant="link" size="sm" asChild className="p-0">
                            <Link href={`/portfolio/${project.id}`}>
                                Full Case Study <ExternalLink className="ml-2 h-3 w-3" />
                            </Link>
                        </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}