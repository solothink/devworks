'use client';

import Link from 'next/link';
import { Menu, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import * as React from 'react';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

const NavLink = ({
  href,
  label,
  isMobile = false,
  onClose,
}: {
  href: string;
  label: string;
  isMobile?: boolean;
  onClose?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const linkClass = cn(
    'text-foreground/80 hover:text-foreground transition-colors',
    isActive && 'text-primary font-medium',
    isMobile
      ? 'block w-full text-left p-4 text-lg'
      : 'p-2'
  );

  const Wrapper = isMobile ? SheetClose : React.Fragment;
  const wrapperProps = isMobile ? { asChild: true } : {};

  return (
    <Wrapper {...wrapperProps}>
      <Link href={href} className={linkClass} onClick={onClose}>
        {label}
      </Link>
    </Wrapper>
  );
};

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-headline">DevWorks</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/upload">Get a Quote</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="border-b p-4">
                  <Link href="/" className="flex items-center gap-2">
                    <Code2 className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg font-headline">DevWorks</span>
                  </Link>
                </div>
                <nav className="flex-1 flex flex-col pt-4">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      {...link}
                      isMobile
                      onClose={() => setIsSheetOpen(false)}
                    />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
