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
              Showcasing the Essence of South Africa
            </h2>
            <p className="text-primary/70 text-lg leading-relaxed">
              Ndila Ya Vhupo Travels is dedicated to showcasing the true essence
              of South Africa. Our mission is to provide authentic, sustainable,
              and unforgettable travel experiences that connect you with the
              land and its people.
            </p>
            <p className="text-primary/70 text-lg leading-relaxed">
              Founded on the principles of respect for nature and celebration of
              heritage, we invite you to walk the path of the ancestors with
              modern comfort. As locals born and raised in Limpopo, we don't
              just show you tourist attractions—we share our home, our stories,
              and our traditions.
            </p>
            <p className="text-primary/70 text-lg leading-relaxed">
              From the waterfalls of Venda to the warm hospitality of our
              communities, every experience is crafted to be meaningful,
              affordable, and authentic. We believe travel should transform you,
              connect you, and leave a positive impact on the places you visit.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-accent text-2xl">
                  verified
                </span>
                <div>
                  <h4 className="text-primary font-bold text-base mb-1">
                    Local Expertise
                  </h4>
                  <p className="text-primary/60 text-sm">
                    Born and raised in Limpopo
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-accent text-2xl">
                  eco
                </span>
                <div>
                  <h4 className="text-primary font-bold text-base mb-1">
                    Sustainable Travel
                  </h4>
                  <p className="text-primary/60 text-sm">
                    Respect for nature & culture
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-accent text-2xl">
                  savings
                </span>
                <div>
                  <h4 className="text-primary font-bold text-base mb-1">
                    Great Value
                  </h4>
                  <p className="text-primary/60 text-sm">
                    Quality experiences, fair prices
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-accent text-2xl">
                  favorite
                </span>
                <div>
                  <h4 className="text-primary font-bold text-base mb-1">
                    Authentic Connections
                  </h4>
                  <p className="text-primary/60 text-sm">
                    Real cultural exchanges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
