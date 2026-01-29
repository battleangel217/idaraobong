'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import ProjectCard from '@/components/project-card';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Restaurant Review Web Application',
    description: 'Full-featured platform for discovering and reviewing restaurants with real-time ratings and user-generated content.',
    techStack: ['Django', 'Django REST Framework', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Render'],
    github: 'https://github.com/Covenantmondei/Restaurant-App.git',
    liveDemo: 'https://restaurant-app-1-372a.onrender.com/',
    image: '/screenshot-2026-01-28_21.22.54.png',
  },
  {
    title: 'Multiplayer Mafia Voteout Game',
    description: 'Interactive multiplayer game evolved from terminal-based implementation to a modern web application with real-time gameplay and AI in in-game chatting and AI agent for the how to play.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'WebSockets', 'DJANGO', 'PostgreSQL', 'REDIS', 'Gemini-2.5-flash', 'Render'],
    github: 'https://github.com/battleangel217/MafiaVoteout.git',
    liveDemo: 'https://mafiavoteout.onrender.com',
    image: '/screenshot-2026-01-28_22.41.50.png',
  },
  {
    title: 'Upstart',
    description: 'Am E-commerce platform for vendors for buying and selling products online.',
    techStack: ['Django', 'Django REST Framework', 'NextJS', 'PostgreSQL', 'Render', 'websockets'],
    github: 'https://github.com/abasiofon-sendan/campus-marketplace.git',
    liveDemo: 'upstart-e9ry.onrender.com',
    image: '/screenshot-2026-01-29_16.08.29.png',
  },
  {
    title: 'Ride Hive',
    description: 'An E-Commerce web application for renting and reserving cars for use.',
    techStack: ['NextJS', 'TypeScript', 'Postgresql', 'Render', 'Vercel', 'Figma', 'Django', 'Django REST Framework'],
    github: 'https://github.com/the-shopify-team/team-shopify.git',
    liveDemo: 'https://team-shopify.vercel.app',
    image: '/screenshot-2026-01-29_16.18.29.png',
  },
  {
    title: 'AgroVest ',
    description: 'An E-Commerce web application for buying and selling agricultural products online.',
    techStack: ['NextJS', 'TypeScript', 'Postgresql', 'Render', 'Vercel', 'Django', 'Django REST Framework'],
    github: 'https://github.com/orgs/Agrovest-app/repositories',
    liveDemo: 'https://agro-vest.com',
    image: '/screenshot-2026-01-29_16.49.18.png',
  },
  {
    title: 'Manifesti (Backend) ',
    description: 'A mobile application for tracking user goal, digital manifesting, and goal achievement using AI and adding personnal journal entries.',
    techStack: ['TypeScript', 'Prisma', 'Github', 'NestJS'],
    github: 'https://github.com/emerjent/manifesti-be',
    liveDemo: '',
    image: '/screenshot-2026-01-29_17.40.04.png',
  },
  {
    title: 'Distribution Notification System ',
    description: 'A notification system that sends emails and push notifications using separate microservices. Each service communicates asynchronously through a message queue (RabbitMQ/Kafka).',
    techStack: ['Python', 'Django', 'PostgreSQL', 'Github', 'RabbitMQ/Kafka', 'Docker'],
    github: 'https://github.com/Group33-notificationsystem/group-33-distribution-notification-system.git',
    liveDemo: '',
    image: '/placeholder.jpg',
  },

];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 md:py-32 bg-card">
      <Container>
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of projects showcasing full-stack development capabilities"
        />

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
        >
          {projects.slice(0, showAll ? projects.length : 4).map((project, index) => (
            <motion.div 
              variants={item} 
              key={index}
              {...(index >= 4 ? { initial: 'hidden', whileInView: 'show', viewport: { once: true } } : {})}
            >
                <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 gap-2 group"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View All Projects'}
            <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
