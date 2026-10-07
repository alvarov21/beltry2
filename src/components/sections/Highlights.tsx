import Image from "next/image";
import { content } from "@/app/content";

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 md:py-[128px] px-5 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col mb-12">
        <span className="font-display font-semibold text-xs tracking-widest uppercase text-cream-45 mb-4">
          Lo más destacado
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-[60px] md:leading-[60px] tracking-[-1.5px] text-white mb-4">
          Highlights
        </h2>
        <p className="font-sans text-lg text-cream/80 max-w-2xl">
          Últimos lanzamientos, sesiones en directo y crecimiento orgánico.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.highlights.map((item, idx) => {
          const CardTag = item.url ? "a" : "div";
          const props = item.url ? { href: item.url, target: "_blank", rel: "noopener noreferrer" } : {};

          return (
            <CardTag 
              key={idx} 
              {...props}
              className={`liquid-border block relative rounded-[28px] bg-ink-2 p-6 min-h-[250px] overflow-hidden group ${item.url ? 'cursor-pointer hover:-translate-y-1 transition-transform duration-300' : ''}`}
            >
              {/* Imagen optimizada a sangre */}
              <Image 
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
              />
              {/* Degradado oscuro para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-ink/80 text-accent text-xs font-semibold uppercase tracking-widest rounded-full w-fit mb-3 border border-cream-12">
                  {item.type}
                </span>
                <h3 className="font-display font-bold text-[24px] leading-[30px] text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-cream/80 text-sm">
                  {item.subtitle}
                </p>
              </div>
            </CardTag>
          );
        })}
      </div>
    </section>
  );
}
