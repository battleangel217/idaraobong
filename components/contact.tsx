'use client';

import { Mail, Github, Twitter, Phone, MessageCircle, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { SocialLink } from '@/components/social-link';

// Custom WhatsApp Icon since it's not in lucide-react standard export for some versions or prefers specific style
const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v1a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v1a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v1a.5.5 0 0 0-1 0v1z" />
    <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" stroke="none" fill="none" /> {/* Placeholder for complex path if needed, but using simple circle/path for now or just Lucide Phone for similarity? Actually Lucide has MessageCircle for Messenger. Let's use simple paths or check if I can import it. Lucide DOES have a phone icon. For WhatsApp specifically, people usually use a brand icon. I'll rely on text or a generic message icon if brand not available, but 'Phone' is requested separately.  Wait, I can just use a standard SVG for WhatsApp if Lucide doesn't have it, or 'Phone' for phone. */}
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

// Actually, let's stick to valid Lucide icons where possible or simple SVGs.
// WhatsApp is often represented by `Phone` or `MessageCircle` in generic sets if specific brand icons aren't loaded. 
// However, the user asked for explicit links.
// I will use:
// Github -> Github
// Gmail -> Mail
// WhatsApp -> MessageCircle (closest generic) or custom SVG if I want to be precise. 
// X -> Twitter (X icon often replaced Twitter)
// Phone -> Phone
// Messenger -> MessageSquare (or Facebook icon if available, but Messenger is specific)

export default function Contact() {
  const email = 'idaraobong05@gmail.com';
  const phoneNumber = '+2349014073100';

  return (
    <section className="py-20 md:py-32">
      <Container maxWidth="md" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Let's Work Together</h2>
        <p className="text-lg text-muted-foreground mb-10">
          Interested in collaborating or have a project in mind? I'd love to hear from you. Reach out
          through email or connect on social media.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* Email / Gmail */}
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground inline-flex items-center gap-2"
            size="lg"
          >
            <a href={`mailto:${email}`}>
              <Mail size={20} />
              Gmail
            </a>
          </Button>

          {/* Phone */}
          <Button
            variant="outline"
            asChild
            size="lg"
            className="inline-flex items-center gap-2 bg-transparent"
          >
            <a href={`tel:${phoneNumber}`}>
              <Phone size={20} />
              Phone
            </a>
          </Button>

          {/* WhatsApp */}
          <Button
            variant="outline"
            asChild
            size="lg"
            className="inline-flex items-center gap-2 bg-transparent"
          >
            <a href="https://wa.me/2349014073100" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {/* GitHub */}
          <SocialLink href="https://github.com/battleangel217" label="GitHub">
            <Github size={32} />
          </SocialLink>

          {/* X (Twitter) */}
          <SocialLink href="https://x.com" label="X (Twitter)">
            <Twitter size={32} />
          </SocialLink>

          {/* LinkedIn */}
          <SocialLink href="https://www.linkedin.com/in/idaraobong-etim-998328295/" label="LinkedIn">
            <Linkedin size={32} />
          </SocialLink>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm">
            Built with Next.js, React, and Tailwind CSS. Open for freelance opportunities and
            exciting projects.
          </p>
        </div>
      </Container>
    </section>
  );
}
