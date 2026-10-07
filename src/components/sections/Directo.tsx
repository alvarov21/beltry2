"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Directo() {
  return (
    <section id="directo" className="relative min-h-[100dvh] w-full bg-[var(--color-base)] flex items-center justify-center py-24 overflow-hidden">
      
      {/* Background Image / Live Stage */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/photos/directo-jowke-violeta.jpg"
          alt="Directo en Millennium"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-base)]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)] via-transparent to-[var(--color-base)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-6 mt-32">
        <h2 className="font-display text-[12vw] md:text-[140px] leading-[0.8] tracking-tighter text-[var(--color-accent)] mix-blend-screen opacity-90 drop-shadow-[0_0_30px_rgba(124,93,161,0.5)]">
          MILLENNIUM
        </h2>
        <p className="text-white/80 text-xl md:text-2xl font-light">
          Live Set · Reggaeton & Urban Mix 2026
        </p>
        
        {/* Fake Video Player Placeholder / Facade */}
        <a 
          href={`https://youtube.com/watch?v=${siteConfig.releases.liveSet.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 relative w-full max-w-4xl aspect-video bg-black/50 border border-white/10 rounded-sm overflow-hidden group hover:scale-[0.99] transition-transform cursor-pointer"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
             <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
               <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
             </div>
          </div>
        </a>
      </div>

    </section>
  );
}
