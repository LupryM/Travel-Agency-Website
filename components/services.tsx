export function Services() {
  return (
    <section className="bg-earthy-beige pb-20 px-4 md:px-10" id="services">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
          <h2 className="text-primary text-[32px] md:text-4xl font-bold leading-tight tracking-tight">
            Our Services
          </h2>
          <p className="text-primary/80 text-lg font-normal leading-normal max-w-[720px]">
            More 'Wow', Less 'Meh'. From Venda's waterfalls to Durban's waves,
            we curate the adventures you're jealous of on Instagram
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group flex flex-col gap-4 rounded-xl border border-primary/10 bg-white/60 p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="size-12 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green group-hover:bg-forest-green group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">pets</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-primary text-xl font-bold">
                Wildlife Safaris
              </h3>
              <p className="text-primary/70 text-base">
                Encounter the Big Five in their natural habitat with our expert
                guides and exclusive access to reserves.
              </p>
            </div>
          </div>

          <div className="group flex flex-col gap-4 rounded-xl border border-primary/10 bg-white/60 p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="size-12 rounded-full bg-teal-accent/10 flex items-center justify-center text-teal-accent group-hover:bg-teal-accent group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">diversity_3</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-primary text-xl font-bold">
                Cultural Immersion
              </h3>
              <p className="text-primary/70 text-base">
                Connect with local traditions, taste authentic cuisine, and meet
                the vibrant communities of the region.
              </p>
            </div>
          </div>

          <div className="group flex flex-col gap-4 rounded-xl border border-primary/10 bg-white/60 p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="size-12 rounded-full bg-sky-blue/20 flex items-center justify-center text-[#4a8bad] group-hover:bg-sky-blue group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">waves</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-primary text-xl font-bold">
                Coastal Escapes
              </h3>
              <p className="text-primary/70 text-base">
                Relax on pristine beaches, explore marine life, and enjoy the
                refreshing breeze of the coast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
