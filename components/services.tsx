"use client";

import type React from "react";
import { Montserrat, Dancing_Script, Inter } from "next/font/google";

// Font Configuration
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const Services: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-earthy-beige" id="services">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-forest-green font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-8 h-[2px] bg-forest-green"></span>
            Our Services
          </div>
          <h2 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
            Authentic Limpopo Journeys
          </h2>
          <p className="max-w-2xl mx-auto text-primary/70 text-lg leading-relaxed">
            Discover the soul of South Africa through local tours, cultural
            immersion, and adventures that connect you with authentic
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          {/* Local Tours - Large Feature */}
          <div className="md:col-span-8 md:row-span-1 rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl">
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-all duration-500 z-10"></div>
            <div
              style={{
                backgroundImage: `url("/gallery/water.jpg")`,
                backgroundSize: "cover", // optional: makes the image cover the div
                backgroundPosition: "center", // optional: centers the image
                width: "100%", // optional: define width
                height: "400px", // optional: define height
              }}
            ></div>

            <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-primary/95 via-primary/60 to-transparent">
              <div className="flex items-center gap-2 mb-3 text-teal-accent">
                <span className="material-symbols-outlined text-2xl">
                  explore
                </span>
                <span className="text-xs font-bold tracking-widest uppercase">
                  Signature Experience
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                Local Tours
              </h3>
              <p className="text-white/90 text-base max-w-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Explore hidden gems from Mapate Eco-Tourism Resort to sacred
                Venda sites beyond the tourist trail.
              </p>
            </div>
          </div>

          {/* Food Tours - Tall Card */}
          <div className="md:col-span-4 md:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl">
            <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/20 transition-all duration-500 z-10"></div>
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
              style={{
                backgroundImage: 'url("/food.webp")',
              }}
            ></div>
            <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-primary/95 via-transparent to-transparent">
              <div className="w-14 h-14 bg-teal-accent rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="material-symbols-outlined text-white text-2xl">
                  restaurant
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                Local Food Tours
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Taste authentic flavors and culinary heritage through local
                markets and traditional home-cooked meals.
              </p>
            </div>
          </div>

          {/* Accommodation */}
          <div className="md:col-span-4 md:row-span-1 rounded-2xl overflow-hidden bg-white shadow-xl group cursor-pointer border border-primary/5">
            <div className="flex h-full flex-col">
              <div className="relative h-40 overflow-hidden w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: 'url("/accomodation.webp")',
                  }}
                ></div>
                <div className="absolute top-3 right-3 bg-teal-accent text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md z-20">
                  Best Value
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3 text-forest-green">
                  <span className="material-symbols-outlined text-2xl">
                    bed
                  </span>
                  <h3 className="font-extrabold text-xl text-primary">
                    Affordable Stays
                  </h3>
                </div>
                <p className="text-primary/70 text-sm leading-relaxed">
                  Comfortable lodges and guesthouses that won't break the bank,
                  carefully selected for quality.
                </p>
              </div>
            </div>
          </div>

          {/* Cultural Experiences */}
          <div className="md:col-span-4 md:row-span-1 rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl">
            <div className="absolute inset-0 bg-forest-green/80 mix-blend-multiply z-10"></div>
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1492052481023-e22384ae26d3?q=80&w=1978&auto=format&fit=crop")',
              }}
            ></div>
            <div className="absolute inset-0 p-8 z-20 flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-teal-accent text-5xl mb-4">
                diversity_3
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Cultural Experiences
              </h3>
              <p className="text-white/90 text-sm max-w-xs leading-relaxed">
                Connect with living traditions and the heritage soul of Limpopo.
              </p>
            </div>
          </div>

          {/* Adventure Activities */}
          <div className="md:col-span-6 md:row-span-1 rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 to-transparent z-10"></div>
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1533692328615-6e620c6c8463?q=80&w=2070&auto=format&fit=crop")',
              }}
            ></div>
            <div className="absolute inset-0 p-8 z-20 flex flex-col justify-center">
              <span className="bg-teal-accent text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block self-start shadow-md uppercase tracking-wide">
                Thrills
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Adventure Activities
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Hiking", "Water Sports", "Safaris"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full border border-white/30 hover:bg-white/30 transition-colors font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Group Tours */}
          <div className="md:col-span-6 md:row-span-1 rounded-2xl overflow-hidden bg-primary shadow-xl group cursor-pointer relative">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-teal-accent/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 p-8 h-full flex flex-row items-center gap-6">
              <div className="w-1/3 shrink-0 rounded-xl overflow-hidden h-36 shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-300 ring-4 ring-teal-accent/20 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("/gallery/people.jpg")',
                  }}
                ></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 text-teal-accent">
                  <span className="material-symbols-outlined text-xl">
                    groups
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide">
                    Group Tours
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold mb-2 text-white">
                  Better Together
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Retreats, family reunions, or friends' getaways showcasing the
                  best of Limpopo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
