"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Comunidad() {
  return (
    <section className="relative w-full bg-[var(--color-base)] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Tira Editorial de Métricas */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-t border-white/10 pt-8">
          <div>
            <span className="text-sm uppercase tracking-widest text-white/50 block mb-2">Comunidad</span>
            <h2 className="text-4xl md:text-5xl font-light text-balance max-w-[20ch]">
              La energía no se inventa, <br/>
              <span className="font-display uppercase text-[var(--color-accent)] tracking-tight">se contagia.</span>
            </h2>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col">
              <span className="font-display text-6xl md:text-8xl tracking-tighter leading-none">{siteConfig.metrics.tiktokFollowers}</span>
              <span className="text-white/50 text-sm mt-2">Seguidores en TikTok</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-6xl md:text-8xl tracking-tighter leading-none">{siteConfig.metrics.tiktokLikes}</span>
              <span className="text-white/50 text-sm mt-2">Me gusta</span>
            </div>
          </div>
        </div>

        {/* Rejilla asimétrica de clips/fotos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center">
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden mt-12">
            <Image src="/assets/photos/directo-crvsh-publico.jpg" alt="Público en directo" fill className="object-cover grayscale-[0.5]" />
          </div>
          <div className="relative aspect-[9/16] rounded-sm overflow-hidden -mt-12 md:-mt-24">
            <div className="absolute inset-0 bg-[#151A28] flex items-center justify-center border border-white/5">
               <span className="text-white/20 text-xs uppercase">Clip TikTok</span>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden mt-8 md:mt-16">
            <Image src="/assets/photos/directo-jowke-luz-calida.jpg" alt="Beltry en Jowke" fill className="object-cover" />
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden -mt-8">
             <div className="absolute inset-0 bg-[#151A28] flex items-center justify-center border border-white/5">
               <span className="text-white/20 text-xs uppercase">Instagram</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
