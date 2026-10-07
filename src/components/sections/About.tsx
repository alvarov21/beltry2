import Image from "next/image";
import { content } from "@/app/content";

export default function About() {
  return (
    <section id="sobre-mi" className="py-[144px] px-5 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
          {/* Spotlight Glow de fondo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[100px] pointer-events-none -z-10" />
          
          <div className="relative w-full max-w-md aspect-square animate-morph overflow-hidden border border-cream-12">
            <div className="absolute inset-0 bg-ink-2 animate-pulse -z-10" />
            <img 
              src="/assets/about.jpg" 
              alt="Beltry"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start mt-10 lg:mt-0">
          <span className="font-display font-semibold text-xs tracking-widest uppercase text-accent mb-4">
            Sobre Mí
          </span>
          <h2 className="font-display font-extrabold text-[48px] leading-[50.4px] tracking-[-1.2px] text-white mb-6">
            La energía de la calle directo al <span className="text-accent">club</span>.
          </h2>
          <p className="font-sans text-lg leading-relaxed text-cream/80 max-w-xl">
            {content.identity.bio}
          </p>

          <blockquote className="mt-10 relative max-w-xl">
            <span className="absolute -top-6 -left-8 text-[80px] text-accent font-display font-black leading-none opacity-80">
              &ldquo;
            </span>
            <p className="font-display font-semibold text-2xl text-white relative z-10">
              {content.identity.quote}
            </p>
            <span className="absolute -bottom-10 right-0 text-[80px] text-accent font-display font-black leading-none opacity-80">
              &rdquo;
            </span>
          </blockquote>
        </div>

      </div>
    </section>
  );
}
