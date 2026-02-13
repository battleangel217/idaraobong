'use client';

import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Icon components
const Icons = {
    HTML: () => <div className="w-full h-full relative"><Image src="/icons/html.svg" alt="HTML" fill className="object-contain" /></div>,
    CSS: () => <div className="w-full h-full relative"><Image src="/icons/css.svg" alt="CSS" fill className="object-contain" /></div>,
    JavaScript: () => <div className="w-full h-full relative"><Image src="/icons/javascript.svg" alt="JavaScript" fill className="object-contain" /></div>,
    TypeScript: () => <div className="w-full h-full relative"><Image src="/icons/typescript.svg" alt="TypeScript" fill className="object-contain" /></div>,
    Tailwind: () => <div className="w-full h-full relative"><Image src="/icons/tailwind.svg" alt="Tailwind" fill className="object-contain" /></div>,
    NestJS: () => <div className="w-full h-full relative"><Image src="/icons/nestjs.svg" alt="NestJS" fill className="object-contain" /></div>,
    NextJS: () => <div className="w-full h-full relative"><Image src="/icons/nextjs.svg" alt="Next.js" fill className="object-contain dark:invert" /></div>,
    React: () => <div className="w-full h-full relative"><Image src="/icons/react.svg" alt="React" fill className="object-contain" /></div>,
    Python: () => <div className="w-full h-full relative"><Image src="/icons/python.svg" alt="Python" fill className="object-contain" /></div>,
    Django: () => <div className="w-full h-full relative"><Image src="/icons/django.svg" alt="Django" fill className="object-contain" /></div>,
    FastAPI: () => <div className="w-full h-full relative"><Image src="/icons/fastapi.svg" alt="FastAPI" fill className="object-contain" /></div>,
    Postgres: () => <div className="w-full h-full relative"><Image src="/icons/postgresql.svg" alt="PostgreSQL" fill className="object-contain" /></div>,
    SQL: () => <div className="w-full h-full relative"><Image src="/icons/sql.svg" alt="SQL" fill className="object-contain" /></div>,
    Redis: () => <div className="w-full h-full relative"><Image src="/icons/redis.svg" alt="Redis" fill className="object-contain" /></div>,
    Render: () => <div className="w-full h-full relative"><Image src="/icons/render.svg" alt="Render" fill className="object-contain dark:invert" /></div>,
    Vercel: () => <div className="w-full h-full relative"><Image src="/icons/vercel.svg" alt="Vercel" fill className="object-contain dark:invert" /></div>,
};

export default function TechStack() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // const innerRadius = isMobile ? 80 : 140;
    // const outerRadius = isMobile ? 140 : 240;

    const techs = [
        { icon: Icons.HTML, name: 'HTML5' },
        { icon: Icons.CSS, name: 'CSS3' },
        { icon: Icons.JavaScript, name: 'JavaScript' },
        { icon: Icons.TypeScript, name: 'TypeScript' },
        { icon: Icons.Tailwind, name: 'Tailwind CSS' },
        { icon: Icons.NestJS, name: 'NestJS' },
        { icon: Icons.NextJS, name: 'Next.js' },
        { icon: Icons.React, name: 'React' },
        { icon: Icons.Python, name: 'Python' },
        { icon: Icons.Django, name: 'Django' },
        { icon: Icons.FastAPI, name: 'FastAPI' },
        { icon: Icons.Postgres, name: 'PostgreSQL' },
        { icon: Icons.SQL, name: 'SQL' },
        { icon: Icons.Redis, name: 'Redis' },
        { icon: Icons.Render, name: 'Render' },
        { icon: Icons.Vercel, name: 'Vercel' },
        { icon: Icons.React, name: 'React Native' },
    ];

    return (
        <section className="py-24 overflow-hidden relative" id="tech-stack">
            <Container>
                <SectionHeader
                    title="Tech Stack"
                />

                <div className="mt-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {techs.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div key={index} className="flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                                    <div className="w-12 h-12 mb-4 text-foreground transition-transform duration-300 group-hover:scale-110">
                                        <Icon />
                                    </div>
                                    <span className="font-medium text-foreground">{tech.name}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Orbit rings */}
                    {/* <div className="absolute border border-border/40 rounded-full" style={{ width: innerRadius * 2, height: innerRadius * 2 }} />
                    <div className="absolute border border-border/40 rounded-full" style={{ width: outerRadius * 2, height: outerRadius * 2 }} />
                    <div className="absolute border border-border/40 rounded-full" style={{ width: (outerRadius + 80) * 2, height: (outerRadius + 80) * 2 }} /> */}


                    {/* Central logo */}
                    {/* <div className="absolute z-10 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
                        <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            ID
                        </div>
                    </div> */}

                    {/* Orbiting technologies */}
                    {/* {techs.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={index}
                                className="absolute left-1/2 top-1/2 w-0 h-0"
                                style={{
                                    animation: `orbit 20s linear infinite`,
                                    animationDelay: `-${tech.delay}s`,
                                } as React.CSSProperties}
                            >
                                <div
                                    className="absolute -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        transform: `translate(-50%, -50%) translateY(-${tech.radius}px)`,
                                    }}
                                >
                                    <div
                                        className="w-10 h-10 md:w-12 md:h-12 bg-card rounded-full shadow-lg border border-border flex items-center justify-center group relative"
                                        style={{
                                            animation: `counter-orbit 20s linear infinite`,
                                            animationDelay: `-${tech.delay}s`,
                                        } as React.CSSProperties}
                                    >
                                        <div className="w-6 h-6 md:w-8 md:h-8 text-foreground">
                                            <Icon />
                                        </div>
                                        <span className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] text-muted-foreground font-medium whitespace-nowrap z-20">
                                            {tech.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })} */}
                </div>
            </Container>
        </section>
    );
}
