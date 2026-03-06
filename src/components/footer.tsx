import Link from 'next/link';
import { Github, Linkedin, Twitter, Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg font-headline">DevWorks</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Building Scalable Web, Mobile, and AI-Powered Solutions.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Navigate</h3>
              <ul className="space-y-2">
                <li><Link href="/#about" className="text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link href="/#services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
                <li><Link href="/#portfolio" className="text-muted-foreground hover:text-foreground">Portfolio</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:devworksabhi@gmail.com" className="text-muted-foreground hover:text-foreground">devworksabhi@gmail.com</a></li>
                <li><a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground">+1 (234) 567-890</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex items-center space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Github /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Linkedin /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Twitter /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DevWorks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
