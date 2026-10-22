import Image from "next/image";
import { content } from "@/app/content";

export default function Highlights() {
  return (
    <section id="highlights" className="py-16 md:py-[128px] px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center md:items-start md:text-left mb-10 md:mb-12 px-2">
        <span className="font-display font-semibold text-xs tracking-widest uppercase text-cream-45 mb-3 sm:mb-4">
          Lo más destacado
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[60px] md:leading-[60px] tracking-tight text-white mb-3 sm:mb-4">
          Lo último de Beltry
        </h2>
        <p className="font-sans text-base sm:text-lg text-cream/80 max-w-2xl">
          Lanzamientos, directos y residencias en cabina.
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
              className={`block relative rounded-[28px] bg-ink-2 p-6 min-h-[250px] overflow-hidden group border border-cream-12 [@media(hover:hover)]:hover:border-accent/60 [@media(hover:hover)]:hover:shadow-[0_0_30px_-5px_rgba(255,36,82,0.25)] ${item.url ? 'cursor-pointer [@media(hover:hover)]:hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out will-change-transform' : ''}`}
            >
              {/* Imagen optimizada a sangre */}
              <Image 
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-30 [@media(hover:hover)]:group-hover:opacity-45 transition-opacity duration-500"
              />
              {/* Degradado oscuro para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent pointer-events-none" />

              {/* Sombreado de color sutil que solo se activa al pasar el ratón en escritorio */}
              <div 
                className="absolute inset-0 opacity-0 transition-opacity duration-500 [@media(hover:hover)]:group-hover:opacity-100 pointer-events-none" 
                style={{ background: 'radial-gradient(circle at 50% 100%, rgba(255,36,82,0.2), transparent 70%)' }} 
              />

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
