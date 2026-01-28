'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  delayBetweenWords?: number;
}

export default function TypewriterText({
  words,
  className = '',
  typingSpeed = 100,
  delayBetweenWords = 300,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    const currentWord = words[currentWordIndex];

    if (currentCharIndex < currentWord.length) {
      // Still typing current word
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (currentWordIndex < words.length - 1) {
      // Move to next word after delay
      const timeout = setTimeout(() => {
        setCurrentWordIndex(currentWordIndex + 1);
        setCurrentCharIndex(0);
        setDisplayedText('');
      }, delayBetweenWords);
      return () => clearTimeout(timeout);
    } else {
      // All words typed
      setIsComplete(true);
    }
  }, [currentCharIndex, currentWordIndex, words, typingSpeed, delayBetweenWords, isComplete]);

  // Return the current word being displayed
  const currentWord = words[currentWordIndex];
  
  // For completed state, show the last word
  if (isComplete) {
    return <span className={className}>{words[words.length - 1]}</span>;
  }

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
