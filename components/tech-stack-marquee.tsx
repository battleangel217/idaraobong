'use client';

import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { TechBadge } from '@/components/tech-badge';

const technologies = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'NestJS',
    'Next.js', 'React', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'SQL',
    'Redis', 'Render', 'Vercel', 'React Native'
];

export default function TechStackMarquee() {
    return (
        <section className="py-20 bg-background overflow-hidden">
            <Container>
                <SectionHeader
                    title="Tech Stack"
                />

                <div className="relative mt-12">
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                        {technologies.map((tech) => (
                            <div key={`t1-${tech}`} className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-card/50 hover:border-accent hover:bg-accent/5 transition-colors shrink-0 snap-center">
                                <span className="text-lg font-medium text-foreground">{tech}</span>
                            </div>
                        ))}
                    </div>

                    {/* Fade edges for scroll indication */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent"></div>
                </div>
            </Container>
        </section>
    );
}
