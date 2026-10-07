"use client";

export function DondeHaSonado() {
  const venues = [
    { name: "MILLENNIUM", location: "Girona" },
    { name: "JOWKE CLUB", location: "Alcorcón" },
    { name: "CRVSH", location: "Madrid" },
    { name: "[PENDIENTE]", location: "Ciudad" }
  ];

  return (
    <section id="noches" className="relative w-full bg-[#080B12] py-40 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-full max-w-4xl border-t border-white/10" />
        
        <div className="w-full max-w-4xl py-24 flex flex-col gap-8">
          {venues.map((venue, i) => (
            <div key={i} className="group flex flex-col md:flex-row items-baseline justify-between border-b border-white/5 pb-8 hover:border-white/20 transition-colors">
              <h3 className="font-display text-5xl md:text-7xl tracking-tight text-white/90 group-hover:text-white transition-colors">
                {venue.name}
              </h3>
              <span className="text-white/40 text-lg md:text-xl font-light mt-2 md:mt-0">
                {venue.location}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
