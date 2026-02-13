'use client';

import { useState, useEffect } from 'react';
import { Code } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/components/container';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const NAV_ITEMS = ['Projects', 'Skills', 'About', 'Contact'];

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [showProfilePic, setShowProfilePic] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowProfilePic(true);
      } else {
        setShowProfilePic(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 font-semibold text-lg hover:text-accent transition-colors"
        >
          {showProfilePic ? (
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent/50">
              <Image
                src="/WhatsApp Image 2026-02-13 at 5.34.56 PM.jpeg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <Code size={24} />
          )}
          <span>Dev Portfolio</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.toLowerCase()
                  ? 'text-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item}
            </button>
          ))}
          <a
            href="/myresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </a>
        </nav>

        <div className="md:hidden flex gap-2">
          {NAV_ITEMS.slice(0, 2).map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
          <a
            href="/myresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </a>
        </div>
      </Container>
    </header>
  );
}
