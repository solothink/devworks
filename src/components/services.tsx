import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/data";
import { Clock, Package } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            My Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Offering a comprehensive suite of development services to bring your ideas to life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end">
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                   <div className="flex items-center gap-2">
                     <Clock className="h-4 w-4" />
                     <span>Timeline: {service.timeline}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Package className="h-4 w-4" />
                     <span>Packages: {service.packages.join(', ')}</span>
                   </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
