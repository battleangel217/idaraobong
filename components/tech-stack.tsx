'use client';

import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { useState, useEffect } from 'react';

// Icon components
const Icons = {
    React: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#222" fillOpacity="0" />
            <path d="M12 21.06C17.0033 21.06 21.06 17.0033 21.06 12C21.06 6.99675 17.0033 2.94 12 2.94C6.99675 2.94 2.94 6.99675 2.94 12C2.94 17.0033 6.99675 21.06 12 21.06Z" stroke="#61DAFB" strokeWidth="1.5" strokeMiterlimit="10" />
            <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
    ),
    NextJS: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.1" />
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14.9999 15.5L9.65485 8.65759C9.44473 8.38871 8.99991 8.53857 8.99991 8.8797V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.9999 8.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    TypeScript: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#3178C6" />
            <path d="M15.5 14.8C15.5 14.8 15 14.2 13.8 14.2C12.5 14.2 12.3 15 12.3 15.6C12.3 16.4 13.1 16.6 13.7 17C14.7 17.4 15.1 18.2 15.1 19.1C15.1 20.7 13.7 21.2 12.3 21.2C10.9 21.2 10 20.6 10 20.6L10.4 19.1C10.4 19.1 11.2 19.8 12.4 19.8C13.5 19.8 13.6 19.3 13.6 18.9C13.6 17.8 12.1 17.7 11.6 17.3C10.2 16.5 10.8 15.2 10.8 15.2C10.8 15.2 11.2 12.9 14.1 12.9C15.2 12.9 16.3 13.4 16.3 13.4L15.5 14.8Z" fill="white" />
            <path d="M18.8 13.1V14.4H17.2V19.4C17.2 19.9 17.3 20.1 17.5 20.1C17.7 20.1 17.9 20 17.9 20L18.4 21.1C18.4 21.1 17.8 21.3 17 21.3C15.9 21.3 15.6 20.6 15.6 19.6V14.4H14.7V13.1H15.6V11.5L17.2 11V13.1H18.8Z" fill="white" />
        </svg>
    ),
    Tailwind: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M12.0003 13.125C12.0003 13.125 10.1253 14.2501 8.62531 14.2501C5.62531 14.2501 5.25031 12.0001 3.37531 12.0001C1.87531 12.0001 0.750305 13.1251 0.750305 13.125C0.750305 13.125 2.62531 12.0001 4.12531 12.0001C7.12531 12.0001 7.50031 14.2501 9.37531 14.2501C10.8753 14.2501 12.0003 13.125 12.0003 13.125ZM10.5003 8.62506C10.5003 8.62506 12.3753 9.75006 13.8753 9.75006C16.8753 9.75006 17.2503 7.50006 19.1253 7.50006C20.6253 7.50006 21.7503 8.62506 21.7503 8.62506C21.7503 8.62506 19.8753 7.50006 18.3753 7.50006C15.3753 7.50006 15.0003 9.75006 13.1253 9.75006C11.6253 9.75006 10.5003 8.62506 10.5003 8.62506ZM19.5003 13.125C19.5003 13.125 17.6253 14.2501 16.1253 14.2501C13.1253 14.2501 12.7503 12.0001 10.8753 12.0001C9.37531 12.0001 8.25031 13.1251 8.25031 13.125C8.25031 13.125 10.1253 12.0001 11.6253 12.0001C14.6253 12.0001 15.0003 14.2501 16.8753 14.2501C18.3753 14.2501 19.5003 13.125 19.5003 13.125Z" fill="#38BDF8" fillOpacity="0.8" />
        </svg>
    ),
    Node: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#339933" />
            <path d="M12 22V12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 12L20.5 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 12L3.5 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    Python: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <linearGradient id="paint0_linear_python" x1="4.5" y1="5" x2="16.5" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3776AB" />
                    <stop offset="1" stopColor="#FFD43B" />
                </linearGradient>
            </defs>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="url(#paint0_linear_python)" fillOpacity="0.1" />
            <path d="M10 5.5H14C16.8 5.5 17.5 7 17.5 9V11H13.5V11.5H17.5V13C17.5 14.5 16 15 14.5 15H13.5V12.5C13.5 11.1193 12.3807 10 11 10H8V11.5H10C10.5523 11.5 11 11.9477 11 12.5V15H7C5 15 4.5 13 4.5 11V9H8.5V8.5H4.5V7C4.5 5.5 6 5.5 7 5.5H10Z" fill="#3776AB" />
            <path d="M14 18.5H10C7.2 18.5 6.5 17 6.5 15V13H10.5V12.5H6.5V11C6.5 9.5 8 9 9.5 9H10.5V11.5C10.5 12.8807 11.6193 14 13 14H16V12.5H14C13.4477 12.5 13 12.0523 13 11.5V9H17C19 9 19.5 11 19.5 13V15H15.5V15.5H19.5V17C19.5 18.5 18 18.5 17 18.5H14Z" fill="#FFD43B" />
        </svg>
    ),
    Docker: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M22.68 10.66H19.38V7.93H22.68V10.66ZM22.68 14.07H19.38V11.34H22.68V14.07ZM18.73 10.66H15.43V7.93H18.73V10.66ZM18.73 14.07H15.43V11.34H18.73V14.07ZM18.73 17.48H15.43V14.75H18.73V17.48ZM14.78 10.66H11.48V7.93H14.78V10.66ZM14.78 14.07H11.48V11.34H14.78V14.07ZM14.78 17.48H11.48V14.75H14.78V17.48ZM10.83 14.07H7.53V11.34H10.83V14.07ZM10.83 17.48H7.53V14.75H10.83V17.48ZM6.88 17.48H3.59001V14.75H6.88V17.48Z" fill="#2496ED" />
            <path d="M1.32 16.5C1.19 16.5 1.07 16.51 0.940002 16.53C0.370002 16.63 0 17.15 0 17.73C0 19.04 1.01 20.31 2.39 20.89C3.12 21.19 3.91 21.36 4.72 21.39C5.35 21.41 6.55 21.5 6.55 21.5C6.55 21.5 24 20.73 24 16.5C24 16.5 23.36 12.38 10.98 12.38C10.74 12.38 10.5 12.38 10.26 12.39V15.71H8.09001C5.64001 15.71 3.25 15.96 1.32 16.5Z" fill="#2496ED" />
        </svg>
    ),
    Postgres: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#336791" />
            <path d="M12.5 16.5C12.5 16.5 10 16 9.5 14C9.5 14 10.5 14.5 11 13.5C11.5 12.5 11 11.5 11 11.5C11 11.5 11.5 11.5 12 12C12.5 12.5 13 12.5 13 12.5L14 11.5C14 11.5 13 11 13 9.5C13 8 15 7 15 7C15 7 13.5 6.5 12 7C10.5 7.5 9 10 9 10C9 10 7.5 10 7.5 11.5C7.5 13 8 15 9.5 16C11 17 13 17.5 13 17.5C13 17.5 13.5 18 13.5 19L14.5 18C14.5 18 13.5 17.5 12.5 16.5Z" fill="white" />
        </svg>
    )
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

    const innerRadius = isMobile ? 80 : 140;
    const outerRadius = isMobile ? 140 : 240;

    const techs = [
        // Inner ring
        { icon: Icons.React, name: 'React', delay: 0, radius: innerRadius },
        { icon: Icons.NextJS, name: 'Next.js', delay: 5, radius: innerRadius },
        { icon: Icons.TypeScript, name: 'TypeScript', delay: 10, radius: innerRadius },
        { icon: Icons.Tailwind, name: 'Tailwind CSS', delay: 15, radius: innerRadius },
        // Outer ring
        { icon: Icons.Node, name: 'Node.js', delay: 2.5, radius: outerRadius },
        { icon: Icons.Python, name: 'Python', delay: 7.5, radius: outerRadius },
        { icon: Icons.Docker, name: 'Docker', delay: 12.5, radius: outerRadius },
        { icon: Icons.Postgres, name: 'PostgreSQL', delay: 17.5, radius: outerRadius },
    ];

    return (
        <section className="py-24 overflow-hidden relative" id="tech-stack">
            <Container>
                <SectionHeader
                    title="Tech Stack"
                />

                <div className="relative mt-16 min-h-[400px] md:min-h-[500px] flex items-center justify-center scale-90 md:scale-100">
                    {/* Orbit rings */}
                    <div className="absolute border border-border/40 rounded-full" style={{ width: innerRadius * 2, height: innerRadius * 2 }} />
                    <div className="absolute border border-border/40 rounded-full" style={{ width: outerRadius * 2, height: outerRadius * 2 }} />
                    <div className="absolute border border-border/40 rounded-full" style={{ width: (outerRadius + 80) * 2, height: (outerRadius + 80) * 2 }} />

                    {/* Central logo */}
                    <div className="absolute z-10 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
                        <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            ID
                        </div>
                    </div>

                    {/* Orbiting technologies */}
                    {techs.map((tech, index) => {
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
                    })}
                </div>
            </Container>
        </section>
    );
}
