"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/app/content";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // Parallax on text
      gsap.to(textRef.current, {
        y: "20vh",
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
      
      // Entrance animation
      gsap.from(textRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* 1. Fondo parallax */}
      <div className="absolute inset-0 z-0 bg-ink">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-30 md:hidden"
        >
          {/* PENDIENTE: Añadir src de video real */}
        </video>
        <div 
          className="hidden md:block w-full h-full bg-cover bg-center bg-no-repeat opacity-80 mix-blend-luminosity"
          style={{ backgroundImage: 'url("/assets/hero-bg.jpg")', backgroundPosition: 'center 20%' }}
        />
      </div>

      {/* 2. Degradado vertical suave */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/20 via-transparent to-ink pointer-events-none" />

      {/* 3. Viñeta suave */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(10, 5, 6, 0.7) 100%)' }} />

      {/* 4. Capa de tinte (Color principal) */}
      <div className="absolute inset-0 z-10 bg-accent/10 mix-blend-color pointer-events-none" />

      {/* 5. Goo reducido para no emborronar la foto */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none mix-blend-screen opacity-60">
        <svg width="0" height="0" className="absolute">
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="b"/>
            <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10"/>
          </filter>
        </svg>
        <div className="absolute inset-0" style={{ filter: "url(#goo)" }}>
          <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-accent/20 rounded-full blur-[60px] animate-float-a" />
          <div className="absolute top-[40%] right-[15%] w-[25vw] h-[25vw] max-w-[250px] max-h-[250px] bg-accent/15 rounded-full blur-[50px] animate-float-b" />
          <div className="absolute bottom-[10%] left-[40%] w-[20vw] h-[20vw] max-w-[200px] max-h-[200px] bg-accent/15 rounded-full blur-[40px] animate-float-c" />
        </div>
      </div>

      {/* 6. Contenido */}
      <div ref={textRef} className="relative z-20 flex flex-col items-center text-center px-5">
        <p className="font-display font-semibold text-[12px] md:text-[16px] uppercase tracking-[0.3em] md:tracking-[0.45em] text-cream-45 mb-4">
          {content.identity.tagline}
        </p>
        <h1 className="sr-only">{content.identity.name} - {content.identity.tagline}</h1>
        <div className="font-display font-extrabold text-white uppercase tracking-tighter leading-none mb-6" style={{ fontSize: "clamp(3rem, 18vw, 640px)" }}>
          {content.identity.name}
        </div>
        <p className="font-sans text-lg md:text-xl text-cream/80 max-w-md font-medium">
          {content.identity.heroSubtitle}
        </p>
      </div>

      {/* 7. Indicador scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center">
        <div className="w-[24px] h-[40px] rounded-full border border-cream/40 flex justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-cream animate-cue" />
        </div>
      </div>
    </section>
  );
}
