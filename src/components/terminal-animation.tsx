"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Mail, Terminal, Briefcase } from 'lucide-react';

type AnimationStep = 'initial' | 'terminal' | 'hiring' | 'redirecting';

export function TerminalAnimation() {
  const router = useRouter();
  const [step, setStep] = useState<AnimationStep>('initial');
  const [text, setText] = useState('');
  const [commandText, setCommandText] = useState('');
  const [showIcon, setShowIcon] = useState(false);
  
  const fullInitialText = "You've got a message from DevWorks. Click to open.";
  const fullTerminalText = "Stuck on a problem? Let's build the solution together.";
  const fullCommandText = 'cd /contact';

  // Step 1: Initial delay for icon
  useEffect(() => {
    const timer = setTimeout(() => setShowIcon(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Step 2: Typing logic based on state
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showIcon && step === 'initial' && text.length < fullInitialText.length) {
      timer = setTimeout(() => {
        setText(fullInitialText.slice(0, text.length + 1));
      }, 40);
    } else if (step === 'terminal' && text.length < fullTerminalText.length) {
      timer = setTimeout(() => {
        setText(fullTerminalText.slice(0, text.length + 1));
      }, 30);
    } else if (step === 'hiring') {
      if (commandText.length < fullCommandText.length) {
        timer = setTimeout(() => {
          setCommandText(fullCommandText.slice(0, commandText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setStep('redirecting');
        }, 400);
      }
    } else if (step === 'redirecting') {
      timer = setTimeout(() => {
        router.push('/contact');
      }, 800);
    }

    return () => clearTimeout(timer);
  }, [showIcon, step, text, commandText, router]);

  const handleOpenTerminal = () => {
    if (text.length === fullInitialText.length) {
      setStep('terminal');
      setText(''); // Reset text for the next typing sequence
    }
  };

  const handleHireMe = () => {
    setStep('hiring');
  };

  const isInitialComplete = step === 'initial' && text.length === fullInitialText.length;
  const isTerminalComplete = step === 'terminal' && text.length === fullTerminalText.length;

  return (
    <div className="w-full max-w-4xl mx-auto font-code p-4 min-h-[220px]">
      {step === 'initial' ? (
        <button
          onClick={handleOpenTerminal}
          className="text-left text-lg md:text-xl text-foreground w-full cursor-pointer group flex items-center gap-4 outline-none"
          disabled={!isInitialComplete}
        >
          {showIcon && <Mail className="h-8 w-8 text-primary transition-all duration-500 animate-in fade-in slide-in-from-left-4" />}
          {showIcon && (
            <span className="animate-in fade-in duration-700">
              <span className="text-primary">></span> {text}
              {isInitialComplete && <span className="animate-pulse">_</span>}
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
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
          </div>
          <div className="p-6 text-left space-y-4">
            <p className="text-foreground text-lg md:text-xl">
              <span className="text-primary">></span> {step === 'terminal' ? text : fullTerminalText}
              {step === 'terminal' && text.length < fullTerminalText.length && <span className="animate-pulse ml-1">_</span>}
            </p>
            
            {isTerminalComplete && step === 'terminal' && (
              <div className="pt-2 animate-in fade-in duration-500">
                <Button onClick={handleHireMe} variant="outline" className="text-primary-foreground border-primary hover:bg-primary/90">
                  <Briefcase className="mr-2 h-4 w-4" /> Hire Me
                </Button>
              </div>
            )}

            {(step === 'hiring' || step === 'redirecting') && (
              <div className="space-y-2">
                <p className="text-foreground text-lg md:text-xl">
                  <span className="text-primary">></span> {commandText}
                  {step === 'hiring' && commandText.length < fullCommandText.length && <span className="animate-pulse ml-1">_</span>}
                </p>
                {step === 'redirecting' && (
                  <p className="text-accent text-lg md:text-xl animate-in fade-in duration-300">
                    Redirecting to contact page...
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}