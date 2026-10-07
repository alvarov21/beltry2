"use client";
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Instagram, Youtube, Disc3, Link as LinkIcon } from 'lucide-react';
import { content } from "@/app/content";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

export function Footer() {
  const footerLinks: FooterSection[] = [
    {
      label: 'Booking',
      links: [
        { title: 'Contratación', href: '#booking' },
        { title: 'Email', href: `mailto:${content.contact.email}` },
        { title: 'WhatsApp', href: content.contact.whatsapp },
        { title: 'Presskit', href: content.contact.presskitUrl },
      ],
    },
    {
      label: 'Navegación',
      links: [
        { title: 'Sobre mí', href: '#about' },
        { title: 'Highlights', href: '#highlights' },
        { title: 'Música', href: '#music' },
        { title: 'Galería', href: '#galeria' },
      ],
    },
    {
      label: 'Redes Sociales',
      links: [
        { title: 'Instagram', href: content.socials.instagram, icon: Instagram },
        { title: 'TikTok', href: content.socials.tiktok, icon: Disc3 },
        { title: 'YouTube', href: content.socials.youtube, icon: Youtube },
        { title: 'Linktree', href: content.socials.linktree, icon: LinkIcon },
      ],
    },
  ];

  return (
    <footer className="md:rounded-t-[3rem] relative w-full flex flex-col items-center justify-center rounded-t-4xl border-t border-cream-12 bg-ink-2 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,36,82,0.1),transparent)] px-6 py-12 lg:py-16 overflow-hidden">
      <div className="bg-accent/40 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8 max-w-6xl mx-auto z-10 relative">
        <AnimatedContainer className="flex flex-col items-start gap-4">
          <span className="font-display font-extrabold text-4xl tracking-tight uppercase text-white">
            {content.identity.name}
          </span>
          <p className="text-cream-45 mt-4 text-sm max-w-xs font-sans">
            {content.identity.quote}
          </p>
          <div className="mt-8 flex flex-col text-xs text-cream/30 gap-1">
            <p>© {new Date().getFullYear()} {content.identity.name}. Todos los derechos reservados.</p>
            <a href="https://potenciatunegocio.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Web por Potencia tu Negocio
            </a>
          </div>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0 lg:pl-16">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider">{section.label}</h3>
                <ul className="text-cream-45 mt-4 space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('#') ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="hover:text-accent inline-flex items-center transition-all duration-300 font-sans"
                      >
                        {link.icon && <link.icon className="me-2 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: 8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
