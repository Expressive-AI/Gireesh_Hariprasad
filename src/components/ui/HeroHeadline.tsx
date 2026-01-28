'use client';

import { useState, useEffect } from 'react';

export default function HeroHeadline() {
  const [thinkText, setThinkText] = useState('');
  const [sellText, setSellText] = useState('');
  const [phase, setPhase] = useState<'typing-think' | 'typing-sell' | 'complete'>('typing-think');
  
  const thinkWord = 'thinks';
  const sellWord = 'sells';
  const typingSpeed = 120;

  useEffect(() => {
    if (phase === 'typing-think') {
      if (thinkText.length < thinkWord.length) {
        const timeout = setTimeout(() => {
          setThinkText(thinkWord.slice(0, thinkText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing "thinks", pause then start "sells"
        const timeout = setTimeout(() => {
          setPhase('typing-sell');
        }, 400);
        return () => clearTimeout(timeout);
      }
    } else if (phase === 'typing-sell') {
      if (sellText.length < sellWord.length) {
        const timeout = setTimeout(() => {
          setSellText(sellWord.slice(0, sellText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setPhase('complete');
      }
    }
  }, [thinkText, sellText, phase]);

  const showThinkCursor = phase === 'typing-think' && thinkText.length < thinkWord.length;
  const showSellCursor = phase === 'typing-sell' && sellText.length < sellWord.length;

  return (
    <h1 className="mb-8 lg:mb-12">
      <span 
        className="block text-display leading-tight"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700 }}
      >
        Copy that{' '}
        <span className="relative inline-block min-w-[2ch]">
          {thinkText}
          {showThinkCursor && (
            <span className="animate-blink text-gold">|</span>
          )}
        </span>
        {thinkText.length === thinkWord.length && '.'}
      </span>
      <span 
        className="block text-display leading-tight"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700 }}
      >
        Then{' '}
        <span className="relative inline-block">
          <span className="relative">
            {sellText}
            {showSellCursor && (
              <span className="animate-blink text-gold">|</span>
            )}
          </span>
          {/* Antique gold underline accent - appears after typing */}
          {phase === 'complete' && (
            <span className="absolute -bottom-1 left-0 h-1 w-full bg-gold/60 animate-expand-width" />
          )}
        </span>
        {sellText.length === sellWord.length && <span className="text-gold">.</span>}
      </span>

      {/* CSS for cursor blink animation */}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
        @keyframes expand-width {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-expand-width {
          animation: expand-width 0.4s ease-out forwards;
        }
      `}</style>
    </h1>
  );
}
