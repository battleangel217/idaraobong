'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start relative mb-8 md:mb-0">
            {/* Decorative background blur */}
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full scale-75"></div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-card border-2 border-accent/30 flex items-center justify-center overflow-hidden shadow-2xl shadow-accent/10">
              <span className="text-muted-foreground/50 text-sm">Profile Picture</span>
              <Image src="/WhatsApp Image 2026-02-13 at 5.34.56 PM.jpeg" alt="Profile" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
                IDARAOBONG JOSEPH
              </h1>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-lg md:text-xl font-bold text-muted-foreground pt-2">
                <span className="text-accent">#FULLSTACK</span>
                <span>#DEVELOPER</span>
                <span className="text-accent">#PYTHON</span>
                <span>#DJANGO/FASTAPI</span>
                <span className="text-accent">#NEXTJS</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Building scalable, functional web applications and mobile solutions with modern
              technologies. Passionate about clean architecture and developer experience.
            </p>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <h4 className="text-3xl font-bold text-foreground">3+</h4>
                <p className="text-sm text-muted-foreground">Years Coding</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-foreground">10+</h4>
                <p className="text-sm text-muted-foreground">Projects Built</p>
              </div>
            </div>

            <div className="pt-6">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground inline-flex items-center gap-2 rounded-full px-8 py-6 text-lg font-semibold"
              >
                Let's Talk
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
