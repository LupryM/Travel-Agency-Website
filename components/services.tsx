export function Services() {
  return (
    <section className="bg-earthy-beige pb-20 px-4 md:px-10" id="services">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
          <h2 className="text-primary text-[32px] md:text-4xl font-bold leading-tight tracking-tight">
            Our Services
          </h2>
          <p className="text-primary/80 text-lg font-normal leading-normal max-w-[720px]">
            Discover Limpopo with Ndila Ya Vhupo Travel Agency! We bring you
            unforgettable experiences through authentic local tours, cultural
            immersion, and adventures that connect you with the soul of South
            Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Local Tours */}
          <div className="group flex flex-col gap-4 rounded-xl border border-primary/10 bg-white/60 p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="size-12 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green group-hover:bg-forest-green group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">explore</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-primary text-xl font-bold">Local Tours</h3>
              <p className="text-primary/70 text-base">
                Explore the hidden gems of Limpopo with our expertly curated
                tours. From Mapate Eco-Tourism Resort to sacred Venda sites,
                discover authentic beauty beyond the tourist trail.
              </p>
            </div>
          </div>

          {/* Affordable Accommodation */}
          <div className="group flex flex-col gap-4 rounded-xl border border-primary/10 bg-white/60 p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="size-12 rounded-full bg-teal-accent/10 flex items-center justify-center text-teal-accent group-hover:bg-teal-accent group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">hotel</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-primary text-xl font-bold">
                Affordable Accommodation
              </h3>
              <p className="text-primary/70 text-base">
                Comfortable stays that won't break the bank. We partner with
                carefully selected lodges and guesthouses offering authentic
                Limpopo hospitality at prices for every traveler.
              </p>
            </div>
          </div>

          {/* Local Food Tours */}
          <div className="group flex flex-col gap-4 rounded-xl border border-primary/10 bg-white/60 p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="size-12 rounded-full bg-sky-blue/20 flex items-center justify-center text-[#4a8bad] group-hover:bg-sky-blue group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">restaurant</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-primary text-xl font-bold">
                Local Food Tours
              </h3>
              <p className="text-primary/70 text-base">
                Taste the authentic flavors of Limpopo. Experience our rich
                culinary heritage through local markets, traditional
                restaurants, and home-cooked meals that tell the story of our
                land.
              </p>
            </div>
          </div>

          {/* Group Tours */}
          <div className="group flex flex-col gap-4 rounded-xl border border-primary/10 bg-white/60 p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="size-12 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green group-hover:bg-forest-green group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-primary text-xl font-bold">Group Tours</h3>
              <p className="text-primary/70 text-base">
                Adventure is better together! Whether it's a corporate retreat,
                family reunion, or friends' getaway, we design group experiences
                that showcase the best of Limpopo.
              </p>
            </div>
          </div>

          {/* Cultural Experiences */}
          <div className="group flex flex-col gap-4 rounded-xl border border-primary/10 bg-white/60 p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="size-12 rounded-full bg-teal-accent/10 flex items-center justify-center text-teal-accent group-hover:bg-teal-accent group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">diversity_3</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-primary text-xl font-bold">
                Cultural Experiences
              </h3>
              <p className="text-primary/70 text-base">
                Connect with the soul of Limpopo. Immerse yourself in living
                Venda, Tsonga, and Pedi culture through authentic encounters
                with traditions passed down through generations.
              </p>
            </div>
          </div>

          {/* Adventure Activities */}
          <div className="group flex flex-col gap-4 rounded-xl border border-primary/10 bg-white/60 p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="size-12 rounded-full bg-sky-blue/20 flex items-center justify-center text-[#4a8bad] group-hover:bg-sky-blue group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">hiking</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-primary text-xl font-bold">
                ...and so much more!
              </h3>
              <p className="text-primary/70 text-base">
                From hiking and water sports to photography safaris and wildlife
                spotting, we offer adventures that showcase Limpopo's dramatic
                landscapes and diverse ecosystems.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/27638060158"
            className="inline-flex items-center gap-2 bg-forest-green text-white px-8 py-3 rounded-lg font-bold hover:bg-primary transition-colors shadow-md"
          >
            <span className="material-symbols-outlined">chat</span>
            Get in Touch for Custom Packages
          </a>
        </div>
      </div>
    </section>
  );
}
