import { Github, ExternalLink, ArrowRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TechBadge } from '@/components/tech-badge';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  liveDemo: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  github,
  liveDemo,
  image,
}: ProjectCardProps) {
  return (
    <div className="group relative border border-border rounded-xl p-6 hover:border-accent/40 bg-card hover:bg-accent/[0.02] transition-all duration-300">
      <div className="space-y-4">
        {/* Main Image View with Dialog Trigger */}
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative w-full aspect-[3/2] bg-muted rounded-xl mb-4 overflow-hidden border border-border/50 group-hover:border-accent/40 shadow-sm transition-all duration-500 cursor-zoom-in">
              <Image
                src={image || '/placeholder.jpg'}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 scale-50 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="text-white w-8 h-8" />
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent
            className="max-w-none sm:max-w-none w-screen h-screen p-0 border-none bg-black/90 shadow-none flex items-center justify-center outline-none translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2"
            showCloseButton={true}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <Image
                src={image || '/placeholder.jpg'}
                alt={`${title} Full View`}
                width={1920}
                height={1080}
                className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
                unoptimized
              />
            </div>
          </DialogContent>
        </Dialog>

        <div>
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
            {title}
            <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.filter(t => t).map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-transparent rounded-full border-border/50 hover:border-accent/50 group/btn"
            asChild
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
              GitHub
            </a>
          </Button>
          {liveDemo && (
            <Button
              variant="default"
              size="sm"
              className="flex items-center gap-2 rounded-full px-4 bg-accent/90 hover:bg-accent text-accent-foreground group/btn"
              asChild
            >
              <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
