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
            I'm a Full Stack Developer and backend team lead based in Nigeria, 
            currently studying Computer Science at the University of Uyo.
          </p>

          <p className="text-muted-foreground">
            I've led backend teams, shipped production APIs, 
            and built things that range from a real-time multiplayer game with an 
            in-game AI agent to a scan-to-pay campus transport system. My stack centers 
            on Django, NestJS, PostgreSQL, and Redis — but I'm comfortable across the 
            full stack when the project needs it.
          </p>

          <p className="text-muted-foreground">
            I care about systems that are fast, secure, and maintainable. Not just getting it to work — getting it to stay working.
            Currently open to backend, fullstack, and API roles.
          </p>

          {/* <div className="pt-4 border-t border-border">
            <p className="text-foreground font-medium mb-3">Currently exploring:</p>
            <ul className="space-y-2 text-muted-foreground text-base">
              <li>• Advanced backend architecture patterns</li>
              <li>• Hardware and IoT <span className='text-accent'>(Raspberry Pi, ESP32, Arduino, etc)</span></li>
              <li>• Full-stack TypeScript development</li>
              <li>• Developer tools and productivity improvements</li>
            </ul>
          </div> */}
        </div>
      </Container>
    </section>
  );
}
