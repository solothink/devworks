"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Terminal } from 'lucide-react';

export function TerminalAnimation() {
  const [showIcon, setShowIcon] = useState(false);
  const [initialText, setInitialText] = useState('');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalText, setTerminalText] = useState('');

  const fullInitialText = "You've got a message from DevWorks. Click to open.";
  const fullTerminalText = "Stuck on a problem? Let's build the solution together.";

  useEffect(() => {
    const iconTimer = setTimeout(() => {
      setShowIcon(true);
    }, 500); // Wait half a second before icon appears

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
    if (isTerminalOpen && terminalText.length < fullTerminalText.length) {
      const timeout = setTimeout(() => {
        setTerminalText(fullTerminalText.slice(0, terminalText.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [isTerminalOpen, terminalText, fullTerminalText]);

  const handleOpenTerminal = () => {
    if (initialText.length === fullInitialText.length) {
      setIsTerminalOpen(true);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto font-code p-4 min-h-[120px]">
      {!isTerminalOpen ? (
        <button
          onClick={handleOpenTerminal}
          className="text-left text-lg md:text-xl text-foreground w-full cursor-pointer group flex items-center gap-4"
          disabled={initialText.length < fullInitialText.length}
        >
          {showIcon && (
              <Mail className="h-8 w-8 text-primary animate-slide-in" />
          )}
          {showIcon && (
            <span className="animate-fade-in">
              <span className="text-primary">&gt;</span> {initialText}
              {initialText.length === fullInitialText.length && (
                <span className="animate-ping">_</span>
              )}
            </span>
          )}
        </button>
      ) : (
        <div className="bg-black/80 rounded-lg border border-primary/50 shadow-lg animate-in fade-in-50 zoom-in-95">
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
          <div className="p-6 text-left">
            <p className="text-foreground text-lg md:text-xl">
              <span className="text-primary">&gt;</span> {terminalText}
              {terminalText.length === fullTerminalText.length && (
                 <span className="animate-ping ml-1">_</span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
