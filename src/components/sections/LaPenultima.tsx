"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { siteConfig } from "@/config/site";

export function LaPenultima() {
  return (
    <section id="escuchar" className="relative min-h-[100dvh] w-full bg-[var(--color-day)] flex items-center justify-center py-24 overflow-hidden">
      {/* Texture noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('/noise.png')" }} />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 items-center">
        
        {/* Cover Image desfasada */}
        <div className="md:col-span-7 md:col-start-1 relative aspect-[4/5] md:aspect-square w-full max-w-xl shadow-2xl">
          <Image
            src="/assets/photos/retrato-estudio-sillon.jpg"
            alt="La Penúltima Vol.1"
            fill
            className="object-cover grayscale-[0.2] contrast-125"
          />
        </div>

        {/* Texto y CTA */}
        <div className="md:col-span-4 md:col-start-9 flex flex-col gap-6">
          <h2 className="font-display text-6xl md:text-8xl tracking-tight leading-[0.85] text-[#0B0F1A]">
            LA<br/>PENÚLTIMA<br/>VOL. 1
          </h2>
          <p className="text-[#0B0F1A]/80 text-lg max-w-[25ch] leading-relaxed">
            El momento justo antes de que acabe la noche, cuando todos piden una más.
          </p>
          <div className="pt-4">
            <Link
              href={`https://youtube.com/watch?v=${siteConfig.releases.latestMix.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#0B0F1A] font-medium text-lg border-b border-[#0B0F1A]/30 pb-1 hover:border-[#0B0F1A] transition-colors"
            >
              Escuchar en YouTube
              <ArrowRight weight="light" className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
