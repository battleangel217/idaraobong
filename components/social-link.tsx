import { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

export function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-accent transition-colors"
      aria-label={label}
    >
      {children}
    </a>
  );
}
