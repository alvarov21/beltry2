import { content } from "@/app/content";

export default function Music() {
  return (
    <section id="musica" className="bg-ink-2 border-y border-cream-12 py-24 md:py-[128px]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        
        <div className="flex flex-col mb-12 items-center text-center relative">
          <span className="font-display font-semibold text-xs tracking-widest uppercase text-accent mb-4">
            Música & Sets
          </span>
          <h2 className="font-display font-extrabold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] leading-[1.1] tracking-tight text-white md:whitespace-nowrap">
            Escucha el <span className="text-accent">sonido</span> que funciona
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto flex flex-col gap-12 mb-16">
          {/* Spotlight Glow de fondo */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/15 rounded-full blur-[120px] pointer-events-none -z-10" />
          
          {/* YouTube 1 */}
          <div className="relative rounded-[28px] border border-accent/40 bg-ink/70 p-2 backdrop-blur shadow-[0_0_40px_-10px_rgba(255,36,82,0.15)] aspect-video">
            <div className="absolute inset-0 flex items-center justify-center text-cream-45 text-sm -z-10">Cargando video...</div>
            <iframe 
              className="w-full h-full rounded-[20px]"
              src={`https://www.youtube-nocookie.com/embed/${content.music.youtube1}?rel=0&color=white`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
          </div>

          {/* YouTube 2 */}
          <div className="relative rounded-[28px] border border-accent/40 bg-ink/70 p-2 backdrop-blur shadow-[0_0_40px_-10px_rgba(255,36,82,0.15)] aspect-video">
            <div className="absolute inset-0 flex items-center justify-center text-cream-45 text-sm -z-10">Cargando video...</div>
            <iframe 
              className="w-full h-full rounded-[20px]"
              src={`https://www.youtube-nocookie.com/embed/${content.music.youtube2}?rel=0&color=white`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 items-center">
          <a 
            href={content.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white font-sans text-[16px] font-semibold px-7 py-3.5 rounded-full hover:bg-accent/90 transition-colors shadow-[0_0_20px_-5px_rgba(255,36,82,0.4)]"
          >
            Ver en YouTube
          </a>
          <a 
            href={content.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-cream-12 text-white font-sans text-[16px] font-semibold px-7 py-3.5 rounded-full hover:bg-white/5 transition-colors"
          >
            Ver en TikTok
          </a>
        </div>
        
      </div>
    </section>
  );
}
