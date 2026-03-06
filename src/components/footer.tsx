import Link from 'next/link';
import { Github, Linkedin, Twitter, Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg font-headline">DevWorks</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building Scalable Web, Mobile, and AI-Powered Solutions that drive real business growth.
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row gap-8 sm:gap-16 justify-between">
            <div>
              <h3 className="font-semibold mb-4">Navigate</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#about" className="text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link href="/#services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
                <li><Link href="/#portfolio" className="text-muted-foreground hover:text-foreground">Portfolio</Link></li>
                <li><Link href="/testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div className="max-w-[200px] overflow-hidden">
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="mailto:devworksabhi@gmail.com" 
                    className="text-muted-foreground hover:text-foreground break-all"
                  >
                    devworksabhi@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex items-center space-x-5">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DevWorks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
