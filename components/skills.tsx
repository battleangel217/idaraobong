'use client';

import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { SkillCategory } from '@/components/skill-category';

const skillsData = [
  {
    category: 'Backend',
    skills: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'Node.js', 'NestJS'],
  },
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Firebase', 'SQL'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Cross-platform Development'],
  },
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C'],
  },
];

export default function Skills() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <SectionHeader
          title="Skills &amp; Expertise"
          subtitle="Organized by specialization across full-stack development"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup) => (
            <SkillCategory
              key={skillGroup.category}
              category={skillGroup.category}
              skills={skillGroup.skills}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
