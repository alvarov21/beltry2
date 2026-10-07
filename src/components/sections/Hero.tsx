"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-end overflow-hidden">
      {/* Background Image with Tonal Veil and Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/photos/retrato-estudio-oscuro.jpg"
          alt="Beltry en directo"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Tonal Veil for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/30 via-[#0B0F1A]/50 to-[#0B0F1A] mix-blend-multiply" />
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(11,15,26,0.9)] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-24 flex flex-col justify-end">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          
          {/* Wordmark Giant */}
          <div className="md:col-span-8 flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-4 ml-1">
              DJ Urbano de Barcelona
            </span>
            <h1 className="font-display text-[15vw] md:text-[180px] leading-[0.8] tracking-tighter text-[var(--color-foreground)]">
              BELTRY
            </h1>
          </div>

          {/* Copy and CTAs */}
          <div className="md:col-span-4 flex flex-col gap-6 md:pb-4">
            <p className="text-lg md:text-xl text-white/80 max-w-[20ch] leading-snug text-balance">
              Energía, cercanía y el mejor reggaeton para tu noche.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="#contratar"
                className="group flex items-center gap-2 bg-[var(--color-foreground)] text-[var(--color-base)] px-6 py-3 rounded-sm font-medium hover:scale-[0.98] transition-transform"
              >
                Contratar
                <ArrowRight weight="light" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#escuchar"
                className="group flex items-center gap-2 px-6 py-3 rounded-sm font-medium text-white border border-white/20 hover:bg-white/5 transition-colors"
              >
                <Play weight="light" className="w-4 h-4" />
                Escuchar último mix
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
