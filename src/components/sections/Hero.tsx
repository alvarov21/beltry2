"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
      // Parallax on text with smooth damping to prevent scroll judder
      gsap.to(textRef.current, {
        y: "18vh",
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });
      
      // Entrance animation
      gsap.from(textRef.current?.children || [], {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.05
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full h-[100svh] min-h-[560px] flex items-center justify-center overflow-hidden">
      {/* 1. Fondo fotográfico optimizado para LCP */}
      <div className="absolute inset-0 z-0 bg-ink">
        <Image 
          src="/assets/hero-master.jpg"
          alt="Beltry con micrófono en cabina en directo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      </div>

      {/* 2. Oscurecimiento general para lectura del texto */}
      <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />

      {/* 3. Degradado hacia el color base en la parte inferior */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-ink pointer-events-none" />

      {/* 4. Viñeta suave en los bordes */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(10, 5, 6, 0.6) 100%)' }} />

      {/* 5. Ambient glow de alta fidelidad optimizado en GPU (sin filtros SVG pesados) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none mix-blend-screen opacity-30">
        <div className="absolute top-[20%] left-[20%] w-[32vw] h-[32vw] max-w-[320px] max-h-[320px] bg-accent/25 rounded-full blur-[80px] animate-float-a will-change-transform" />
        <div className="absolute top-[38%] right-[15%] w-[28vw] h-[28vw] max-w-[280px] max-h-[280px] bg-accent/20 rounded-full blur-[70px] animate-float-b will-change-transform" />
        <div className="absolute bottom-[12%] left-[38%] w-[24vw] h-[24vw] max-w-[240px] max-h-[240px] bg-accent/20 rounded-full blur-[60px] animate-float-c will-change-transform" />
      </div>

      {/* 6. Contenido */}
      <div ref={textRef} className="relative z-20 flex flex-col items-center text-center px-4 sm:px-5 w-full max-w-4xl mx-auto will-change-transform">
        <p className="font-display font-semibold text-[11px] sm:text-[13px] md:text-[16px] uppercase tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.45em] text-cream-45 mb-3 sm:mb-4">
          {content.identity.tagline}
        </p>
        <h1 className="font-display font-extrabold text-white uppercase tracking-tighter leading-none mb-4 sm:mb-6 select-none" style={{ fontSize: "clamp(2.5rem, 15vw, 640px)" }}>
          {content.identity.name}
        </h1>
        <p className="font-sans text-base sm:text-lg md:text-xl text-cream/80 max-w-md font-medium px-2 mb-6 sm:mb-8">
          {content.identity.heroSubtitle}
        </p>

        {/* Botones de acción */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link 
            href="#musica"
            className="bg-accent text-white text-[14px] font-semibold px-6 py-2.5 rounded-full hover:bg-accent/90 active:scale-[0.97] transition-all duration-200 ease-out shadow-[0_0_20px_-5px_rgba(255,36,82,0.4)] inline-flex items-center justify-center cursor-pointer"
          >
            Escuchar La Penúltima Vol.1
          </Link>
          <Link 
            href="#booking"
            className="border border-cream-12 hover:border-cream/40 bg-transparent text-white text-[14px] font-semibold px-6 py-2.5 rounded-full hover:bg-white/5 active:scale-[0.97] transition-all duration-200 ease-out inline-flex items-center justify-center cursor-pointer"
          >
            Contratar
          </Link>
        </div>
      </div>

      {/* 7. Indicador scroll */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center">
        <div className="w-[24px] h-[40px] rounded-full border border-cream/40 flex justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-cream animate-cue" />
        </div>
      </div>
    </section>
  );
}
