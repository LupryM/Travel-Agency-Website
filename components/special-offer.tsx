import Link from "next/link";

export function SpecialOffer() {
  return (
    <section
      className="bg-earthy-beige pt-10 pb-20 px-4 md:px-10"
      id="special-offer"
    >
      <div className="max-w-[1100px] mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative min-h-[400px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("/herotest.jpg")',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              <span className="bg-teal-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block shadow-lg">
                Featured Trip
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-2 text-shadow-sm">
                Explore Mapate Eco-Tourism Resort with us!
              </h3>
              <p className="text-white/90 font-medium text-lg">
                Authentic Limpopo Journeys
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#fff8f2]">
            <div className="self-start relative mb-8 w-full md:w-auto">
              <div className="bg-forest-green text-white rounded-xl p-6 shadow-xl transform -rotate-1 border-4 border-[#e3d5ca] relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-teal-accent rounded-full opacity-20 blur-xl"></div>
                <p className="text-center text-sm font-bold uppercase tracking-widest mb-2 opacity-90 border-b border-white/20 pb-2">
                  Special Offer
                </p>
                <div className="text-center">
                  <span className="text-4xl md:text-5xl font-black tracking-tight">
                    R 300
                    <span className="text-2xl align-top text-white/80">
                      .00
                    </span>
                  </span>
                  <span className="block text-sm font-medium opacity-90 mt-1">
                    Per Person
                  </span>
                </div>
                <div className="mt-3 pt-2 border-t border-white/20 text-center">
                  <span className="text-xs font-bold bg-white text-forest-green px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                    50% Deposit Required
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-primary/10 pb-8">
              <div>
                <h4 className="text-primary font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-accent text-2xl">
                    verified
                  </span>
                  Price Includes
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-primary font-semibold text-base">
                    <span className="material-symbols-outlined text-forest-green text-[20px]">
                      directions_bus
                    </span>
                    Transport
                  </li>
                  <li className="flex items-center gap-3 text-primary font-semibold text-base">
                    <span className="material-symbols-outlined text-forest-green text-[20px]">
                      restaurant
                    </span>
                    Food
                  </li>
                  <li className="flex items-center gap-3 text-primary font-semibold text-base">
                    <span className="material-symbols-outlined text-forest-green text-[20px]">
                      pool
                    </span>
                    Swimming
                  </li>
                  <li className="flex items-center gap-3 text-primary font-semibold text-base">
                    <span className="material-symbols-outlined text-forest-green text-[20px]">
                      hiking
                    </span>
                    Hiking & Entrance
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-primary font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-accent text-2xl">
                    calendar_month
                  </span>
                  Trip Details
                </h4>
                <div className="space-y-5 bg-white p-4 rounded-xl border border-primary/5 shadow-sm">
                  <div>
                    <span className="text-xs font-bold text-teal-accent uppercase tracking-wider block mb-1">
                      Departure Date
                    </span>
                    <p className="font-extrabold text-primary text-xl">
                      06 / 12 / 2025
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-teal-accent uppercase tracking-wider block mb-1">
                      Pick up points
                    </span>
                    <p className="font-bold text-primary text-base leading-tight">
                      Thavhani Mall & <br /> Venda Plaza
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-forest-green/5 rounded-xl p-6 border border-forest-green/10 shadow-inner">
              <h4 className="text-center text-primary font-bold mb-4 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[#25D366]">
                  chat
                </span>
                Book Now via WhatsApp
              </h4>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-3.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
                  href="https://wa.me/27840228948"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined">chat</span>
                  084 022 8948
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
