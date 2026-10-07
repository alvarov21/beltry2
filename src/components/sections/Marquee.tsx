"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { content } from "@/app/content";

export default function Marquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    if (scrollerRef.current) {
      const container = scrollerRef.current;
      const content = container.firstElementChild as HTMLElement;
      if (content) {
        // Clone for infinite scroll
        container.appendChild(content.cloneNode(true));
        container.appendChild(content.cloneNode(true));

        gsap.to(container, {
          x: "-33.333%",
          ease: "none",
          duration: 20,
          repeat: -1
        });
      }
    }
  }, []);

  return (
    <section className="bg-ink-2 border-y border-cream-12 py-16 sm:py-20 relative overflow-hidden flex flex-col items-center">
      <div className="text-center mb-8">
        <span className="font-display font-semibold text-xs tracking-widest uppercase text-cream-45">
          Cabinas & Escenarios
        </span>
      </div>
      
      <div className="relative w-full max-w-full overflow-hidden flex">
        {/* Fundidos laterales */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-ink-2 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-ink-2 to-transparent z-10" />

        <div ref={scrollerRef} className="flex whitespace-nowrap will-change-transform">
          <div className="flex items-center gap-8 px-4">
            {content.venues.map((venue, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="font-display font-bold text-2xl md:text-4xl text-white tracking-tight uppercase">
                  {venue}
                </span>
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
