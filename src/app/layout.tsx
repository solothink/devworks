import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const metadata: Metadata = {
  title: 'DevWorks Portfolio',
  description: 'Building Scalable Web, Mobile, and AI-Powered Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Source+Code+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
        {/* Suppress noisy extension errors during development */}
        <Script id="error-guard" strategy="beforeInteractive">
          {`
            window.addEventListener('error', (event) => {
              if (event.filename && event.filename.includes('chrome-extension')) {
                event.stopImmediatePropagation();
              }
            }, true);
            window.addEventListener('unhandledrejection', (event) => {
              if (event.reason && event.reason.stack && event.reason.stack.includes('chrome-extension')) {
                event.stopImmediatePropagation();
              }
            }, true);
          `}
        </Script>
      </head>
      <body className={cn('font-body antialiased')}>
        <FirebaseClientProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
