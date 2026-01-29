'use client';

import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <Container>
        <SectionHeader title="About Me" />

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-muted-foreground">
            I am a Full Stack Developer with a passion for building scalable web applications
            and mobile solutions. With a strong foundation in backend development, I enjoy crafting
            robust APIs and architecting systems that power modern applications.
          </p>

          <p className="text-muted-foreground">
            My journey in software development started with a fascination for problem-solving. Over
            time, I've developed expertise across the full stack, working with Django, React, Next.js,
            and various databases. I believe in writing clean, maintainable code and understanding the
            fundamentals that make systems work.
          </p>

          <p className="text-muted-foreground">
            When I'm not coding, I'm exploring new technologies, contributing to open-source
            projects, or discussing best practices with fellow developers. I'm particularly interested
            in system design, API architecture, and creating developer-friendly tools that make
            engineering more productive.
          </p>

          <div className="pt-4 border-t border-border">
            <p className="text-foreground font-medium mb-3">Currently exploring:</p>
            <ul className="space-y-2 text-muted-foreground text-base">
              <li>• Advanced backend architecture patterns</li>
              <li>• Hardware and IoT <span className='text-accent'>(Raspberry Pi, ESP32, Arduino, etc)</span></li>
              <li>• Full-stack TypeScript development</li>
              <li>• Developer tools and productivity improvements</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
