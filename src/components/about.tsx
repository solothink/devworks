import { Badge } from "@/components/ui/badge";

const skills = [
  "React / Next.js",
  "Node.js / Express",
  "React Native",
  "Python / Django",
  "AI / ML",
  "Solidity / Web3",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a passionate full-stack developer with a knack for creating innovative and efficient digital solutions. With over five years in the industry, I've had the privilege of working on a diverse range of projects, from sleek marketing websites to complex enterprise-level applications.
              </p>
              <p>
                My expertise lies in translating business requirements into high-quality code and user-centric products. I thrive on challenges and am constantly exploring new technologies to stay at the forefront of development. Whether it's building a mobile app, architecting a scalable backend, or integrating AI, I am committed to delivering excellence.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight font-headline mb-6">
              My Toolbox
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
