'use client';

import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Backend Developer Team Lead",
        company: "Agrovest",
        period: "2025 - Present",
        location: "Nigeria",
        description: "Leading a team of developer in building scalable REST APIs. Handled database design and implementation. Hosted the API on Render. Completed the MVP. Working with the frontend team to build the mobile app.",
        skills: ["Python", "Django", "PostgreSQL", "Render", "AWS", 'Git', 'Firebase', 'Paystack']
    },
    {
        role: "Backend Developer",
        company: "Manifesti",
        period: "2025 - 2026",
        location: "Remote",
        description: "Developed different REST APIs for the mobile app devs to use",
        skills: ["Nest.js", "TypeScript", "Prisma", "Git"]
    },
    {
        role: "Fullstack Developer and Backend Team Lead",
        company: "Q Circle Hackerton",
        period: "2025 - 2025",
        location: "Remote",
        description: "Collaborated with backend engineers to create APIs and with the frontend team to integrate REST APIs. Maintained the postgresql database and implemented new feature requests.",
        skills: ["Nest.js", "TypeScript", "Python", "Django", "PostgreSQL", "Render", "Git", "Vercel"]
    },
    {
        role: "Backend Developer",
        company: "Faculty of Computing, University of Uyo",
        period: "2023 - 2025",
        location: "Nigeria",
        description: "Collaborated with multiple backend engineers to create APIs for the Planora project.",
        skills: ["HTML", "TailwindCSS", "JavaScript" ,"Python", "Flask", "SQL", "Render", "Git"]
    }
];

export default function Experience() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } }
    };

    return (
        <section className="py-20 bg-card/50">
            <Container>
                <SectionHeader title="Work Experience" />
                <motion.div 
                    className="mt-16 relative space-y-12"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                    {experiences.map((exp, index) => (
                        <motion.div variants={item} key={index} className="relative pl-0 md:pl-24 group">
                            {/* Timeline Dot */}
                            <div className="hidden md:flex absolute left-[23px] top-1 w-4 h-4 rounded-full border-2 border-accent bg-background group-hover:bg-accent transition-colors z-10"></div>

                            <div className="bg-card border border-border p-6 rounded-xl hover:border-accent/50 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-primary font-medium mt-1">
                                            <Briefcase size={16} />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
