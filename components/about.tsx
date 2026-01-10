export function About() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white" id="about">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: 'url("/SA.jpg")',
                }}
                role="img"
                aria-label="Group of diverse travelers hiking up a lush green mountain overlooking a valley"
              ></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-forest-green font-bold text-sm tracking-wider uppercase">
              <span className="w-8 h-[2px] bg-forest-green"></span>
              About Us
            </div>
            <h2 className="text-primary text-4xl font-black leading-tight tracking-tight">
              {}
              Creating Shared Adventures in South Africa
            </h2>
            <p className="text-primary/70 text-lg leading-relaxed">
              Ndila Ya Vhupo Travels brings people together through authentic
              group journeys that celebrate the true essence of South Africa. We
              believe the best travel experiences are shared, where connections
              with the land, the people, and fellow adventurers last a lifetime.
            </p>
            <p className="text-primary/70 text-lg leading-relaxed">
              {}
              Founded on the principles of respect for nature, celebration of
              heritage, and the power of shared experiences, we invite you to
              walk the path of the ancestors with modern comfort, together with
              people who share your sense of adventure.
            </p>
            <div className="pt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
