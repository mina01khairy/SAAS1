const brands = [
  "CloudScale",
  "Lumina Tech",
  "Equinox Systems",
  "Aether Labs",
  "Nova Retail",
  "Vertex Health",
];

export function SocialProof() {
  return (
    <section className="py-12 border-y border-outline-variant/20 bg-surface-container-low/40">
      <div className="max-w-[1440px] mx-auto px-4 md:px-gutter">
        <p className="text-center font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-8">
          Powering support teams at fast-growing companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-geist text-xl font-bold text-on-surface-variant/40 hover:text-on-surface-variant transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
