"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Mail, Terminal, Briefcase } from 'lucide-react';

export function TerminalAnimation() {
  const router = useRouter();
  const [showIcon, setShowIcon] = useState(false);
  const [initialText, setInitialText] = useState('');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [isHiring, setIsHiring] = useState(false);
  const [commandText, setCommandText] = useState('');
  const [showRedirect, setShowRedirect] = useState(false);

  const fullInitialText = "You've got a message from DevWorks. Click to open.";
  const fullTerminalText = "Stuck on a problem? Let's build the solution together.";
  const fullCommandText = 'cd /contact';

  useEffect(() => {
    const iconTimer = setTimeout(() => setShowIcon(true), 500);
    return () => clearTimeout(iconTimer);
  }, []);

  useEffect(() => {
    if (showIcon && initialText.length < fullInitialText.length) {
      const timeout = setTimeout(() => {
        setInitialText(fullInitialText.slice(0, initialText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [showIcon, initialText, fullInitialText]);

  useEffect(() => {
    if (isTerminalOpen && !isHiring && terminalText.length < fullTerminalText.length) {
      const timeout = setTimeout(() => {
        setTerminalText(fullTerminalText.slice(0, terminalText.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [isTerminalOpen, isHiring, terminalText, fullTerminalText]);

  useEffect(() => {
    if (isHiring && commandText.length < fullCommandText.length) {
      const timeout = setTimeout(() => {
        setCommandText(fullCommandText.slice(0, commandText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
    if (isHiring && commandText.length === fullCommandText.length && !showRedirect) {
        const redirectTimer = setTimeout(() => {
            setShowRedirect(true);
        }, 300);
        const navigationTimer = setTimeout(() => {
            router.push('/contact');
        }, 1300);
        return () => {
            clearTimeout(redirectTimer);
            clearTimeout(navigationTimer);
        }
    }
  }, [isHiring, commandText, fullCommandText, showRedirect, router]);

  const handleOpenTerminal = () => {
    if (initialText.length === fullInitialText.length) {
      setIsTerminalOpen(true);
    }
  };

  const handleHireMe = () => {
    setIsHiring(true);
  };

  const isInitialTypingComplete = initialText.length === fullInitialText.length;
  const isTerminalTypingComplete = terminalText.length === fullTerminalText.length;

  return (
    <div className="w-full max-w-4xl mx-auto font-code p-4 min-h-[220px]">
      {!isTerminalOpen ? (
        <button
          onClick={handleOpenTerminal}
          className="text-left text-lg md:text-xl text-foreground w-full cursor-pointer group flex items-center gap-4"
          disabled={!isInitialTypingComplete}
        >
          {showIcon && <Mail className="h-8 w-8 text-primary animate-slide-in" />}
          {showIcon && (
            <span className="animate-fade-in">
              <span className="text-primary">></span> {initialText}
              {isInitialTypingComplete && <span className="animate-ping">_</span>}
            </span>
          )}
        </button>
      ) : (
        <div className="bg-black/80 rounded-lg border border-primary/50 shadow-lg animate-in fade-in-50 zoom-in-95 w-full">
          <div className="flex items-center justify-between px-4 py-2 border-b border-primary/30">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">/dev/message</span>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="p-6 text-left space-y-4">
            <p className="text-foreground text-lg md:text-xl">
              <span className="text-primary">></span> {terminalText}
              {!isHiring && isTerminalTypingComplete && <span className="animate-ping ml-1">_</span>}
            </p>
            {isTerminalTypingComplete && !isHiring && (
              <div className="pt-2 animate-fade-in">
                <Button onClick={handleHireMe} variant="outline" className="text-primary-foreground border-primary hover:bg-primary/90">
                  <Briefcase className="mr-2 h-4 w-4" /> Hire Me
                </Button>
              </div>
            )}
             {isHiring && (
              <div className="animate-fade-in">
                <p className="text-foreground text-lg md:text-xl">
                  <span className="text-primary">></span> {commandText}
                  {commandText.length === fullCommandText.length ? '' : <span className="animate-ping ml-1">_</span>}
                </p>
                {showRedirect && (
                     <p className="text-accent text-lg md:text-xl animate-fade-in pt-2">Redirecting to contact page...</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
