import Image from "next/image";
import { content } from "@/app/content";

export default function About() {
  return (
    <section id="sobre-mi" className="py-[144px] px-5 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[26px] overflow-hidden">
            <div className="absolute inset-0 bg-ink-2 animate-pulse -z-10" />
            {/* PENDIENTE: Cambiar a componente Image con foto real */}
            <img 
              src="/assets/about.jpg" 
              alt="Beltry"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <span className="font-display font-semibold text-xs tracking-widest uppercase text-cream-45 mb-4">
            Sobre Mí
          </span>
          <h2 className="font-display font-extrabold text-[48px] leading-[50.4px] tracking-[-1.2px] text-white mb-6">
            La energía de la calle directo al club.
          </h2>
          <p className="font-sans text-lg leading-relaxed text-cream/80 max-w-xl">
            {content.identity.bio}
          </p>

          <blockquote className="mt-10 relative max-w-xl">
            <span className="absolute -top-4 -left-6 text-6xl text-cream-12 font-display font-extrabold leading-none">
              &ldquo;
            </span>
            <p className="font-display font-semibold text-2xl text-white relative z-10">
              {content.identity.quote}
            </p>
          </blockquote>
        </div>

      </div>
    </section>
  );
}
