"use client";

import { useState } from "react";
import { content } from "@/app/content";

function YouTubeFacade({ id, title }: { id: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe 
        className="w-full h-full border-0"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&color=white`}
        title={title} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      />
    );
  }

  return (
    <div 
      onClick={() => setIsPlaying(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsPlaying(true);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Reproducir ${title}`}
      className="group relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-95"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-black/30 group-hover:opacity-70 transition-opacity duration-300" />
      
      {/* Botón de reproducción estilo Beltry */}
      <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/90 group-hover:bg-accent text-white flex items-center justify-center shadow-[0_0_35px_rgba(255,36,82,0.6)] group-hover:scale-110 active:scale-95 transition-all duration-300 ease-out border border-white/20">
        <svg className="w-7 h-7 sm:w-8 sm:h-8 translate-x-0.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <span className="sr-only">Reproducir {title}</span>
    </div>
  );
}

export default function Music() {
  return (
    <section id="musica" className="bg-ink-2 border-y border-cream-12 py-16 md:py-[128px] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Cabecera centrada */}
        <div className="flex flex-col mb-10 md:mb-14 items-center text-center relative px-2 w-full max-w-2xl mx-auto">
          <span className="font-display font-semibold text-xs tracking-widest uppercase text-accent mb-3 sm:mb-4">
            Música & Sets
          </span>
          <h2 className="font-display font-extrabold text-[28px] sm:text-[40px] md:text-[54px] lg:text-[64px] leading-[1.15] md:leading-[1.1] tracking-tight text-white md:whitespace-nowrap">
            Dale al play y <span className="text-accent">siente</span> la pista
          </h2>
        </div>

        {/* Contenedor de vídeos centrado */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Spotlight Glow perfectamente centrado */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[800px] h-[320px] sm:h-[600px] md:h-[800px] bg-accent/15 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />
          
          {/* YouTube 1 */}
          <div className="w-full rounded-2xl sm:rounded-[28px] border border-accent/40 bg-ink/70 p-1.5 sm:p-2 backdrop-blur shadow-[0_0_40px_-10px_rgba(255,36,82,0.15)] overflow-hidden">
            <div className="relative w-full aspect-video rounded-xl sm:rounded-[20px] overflow-hidden bg-black">
              <YouTubeFacade 
                id={content.music.youtube1} 
                title="Beltry — Live Set Millennium" 
              />
            </div>
          </div>

          {/* YouTube 2 */}
          <div className="w-full rounded-2xl sm:rounded-[28px] border border-accent/40 bg-ink/70 p-1.5 sm:p-2 backdrop-blur shadow-[0_0_40px_-10px_rgba(255,36,82,0.15)] overflow-hidden">
            <div className="relative w-full aspect-video rounded-xl sm:rounded-[20px] overflow-hidden bg-black">
              <YouTubeFacade 
                id={content.music.youtube2} 
                title="Beltry — Sesión DJ Urbano" 
              />
            </div>
          </div>
        </div>

        {/* Botones de acción centrados */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 items-center w-full max-w-xs sm:max-w-none mx-auto">
          <a 
            href={content.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-accent text-white font-sans text-[15px] sm:text-[16px] font-semibold px-7 py-3.5 rounded-full hover:bg-accent/90 active:scale-[0.97] transition-all duration-200 ease-out shadow-[0_0_20px_-5px_rgba(255,36,82,0.4)] cursor-pointer"
          >
            Ver en YouTube
          </a>
          <a 
            href={content.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-transparent border border-cream-12 text-white font-sans text-[15px] sm:text-[16px] font-semibold px-7 py-3.5 rounded-full hover:bg-white/5 active:scale-[0.97] transition-all duration-200 ease-out cursor-pointer"
          >
            Ver en TikTok
          </a>
        </div>
        
      </div>
    </section>
  );
}
