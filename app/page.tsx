'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';

import About from '@/components/about';
import Contact from '@/components/contact';

import TechStack from '@/components/tech-stack';
import Experience from '@/components/experience';
import { MotionSection } from '@/components/motion-section';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <section id="hero">
          <MotionSection>
            <Hero scrollToSection={scrollToSection} />
          </MotionSection>
        </section>
        <section id="about">
          <MotionSection>
            <About />
          </MotionSection>
        </section>
        <section id="tech-stack">
          <MotionSection>
             <TechStack />
          </MotionSection>
        </section>
        <section id="experience">
           <Experience />
        </section>
        <section id="projects">
           <Projects />
        </section>
        <section id="contact">
          <MotionSection>
            <Contact />
          </MotionSection>
        </section>
      </main>
    </div>
  );
}
