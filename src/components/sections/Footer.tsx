import { content } from "@/app/content";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-cream-12 bg-ink py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        
        <div className="flex flex-col items-start gap-4">
          <span className="font-display font-extrabold text-3xl tracking-tight uppercase text-white">
            {content.identity.name}
          </span>
          <p className="font-sans text-sm text-cream-45 max-w-sm">
            {content.identity.quote}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href={content.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-cream-45 hover:text-white transition-colors text-sm font-semibold">Instagram</a>
            <a href={content.socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-cream-45 hover:text-white transition-colors text-sm font-semibold">TikTok</a>
            <a href={content.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-cream-45 hover:text-white transition-colors text-sm font-semibold">YouTube</a>
            <a href={content.socials.linktree} target="_blank" rel="noopener noreferrer" className="text-cream-45 hover:text-white transition-colors text-sm font-semibold">Linktree</a>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 text-xs text-cream-45">
          <span>&copy; {year} {content.identity.name}. Todos los derechos reservados.</span>
          <a href="https://potenciatunegocio.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Web por Potencia tu Negocio
          </a>
        </div>

      </div>
    </footer>
  );
}
