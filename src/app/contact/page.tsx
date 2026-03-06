import { ContactForm } from '@/components/contact-form';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form or use the contact details below.
            </p>
            <div className="space-y-4">
              <a 
                href="mailto:devworksabhi@gmail.com" 
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
                title="Send an Email"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span className="break-all group-hover:underline">devworksabhi@gmail.com</span>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
              <div className="flex items-center space-x-6">
                <a 
                  href="https://github.com/solothink" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title="GitHub Profile"
                >
                  <Github size={28} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/abhilash-n-28116b211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href="mailto:devworksabhi@gmail.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title="Send an Email"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
