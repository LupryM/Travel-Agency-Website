"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Dancing_Script, Inter } from "next/font/google";
import {
  Compass,
  Utensils,
  Bed,
  Users,
  Trees,
  MessageCircle,
  Menu,
} from "lucide-react";

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

// Type-safe ServiceCard
interface ServiceCardProps {
  children: ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  children,
  className = "",
}) => (
  <div
    className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg shadow-brand-dark/5 transition-all duration-400 cubic-bezier(0.4, 0, 0.2, 1) hover:-translate-y-1 ${className}`}
  >
    {children}
  </div>
);

export const Services: React.FC = () => {
  return (
    <div
      className={`${montserrat.variable} ${dancingScript.variable} ${inter.variable} bg-brand-cream text-brand-dark font-sans antialiased min-h-screen flex flex-col relative selection:bg-brand-green selection:text-white`}
    >
      {/* Background Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-brand-cream"></div>
      </div>

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <span className="font-script text-4xl sm:text-5xl text-brand-green block mb-2 transform -rotate-2 opacity-90 relative z-10">
              Authentic Journeys
            </span>
            <div className="absolute -inset-4 bg-brand-accent/10 blur-xl rounded-full -z-0"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-6">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-brand-dark/70 text-lg leading-relaxed font-body">
            Discover Limpopo with Ndila Ya Vhupo. We bring you unforgettable
            experiences through local tours, cultural immersion, and adventures
            that connect you with the soul of South Africa.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Local Tours */}
          <ServiceCard className="md:col-span-8 md:row-span-1">
            <div className="absolute inset-0 bg-brand-dark/30 group-hover:bg-brand-dark/20 transition-colors z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1496531693211-31c5234a5ea9?q=80&w=2070&auto=format&fit=crop"
              alt="Local Tours"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent">
              <div className="flex items-center gap-3 mb-2 text-brand-accent">
                <Compass size={28} />
                <span className="text-sm font-bold tracking-widest uppercase">
                  Signature Experience
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Local Tours
              </h3>
              <p className="text-brand-cream font-body text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 max-w-lg">
                Explore hidden gems of Limpopo. From Mapate Eco-Tourism Resort
                to sacred Venda sites, discover beauty beyond the tourist trail.
              </p>
            </div>
          </ServiceCard>

          {/* Food Tours */}
          <ServiceCard className="md:col-span-4 md:row-span-2 bg-brand-cream">
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=2070&auto=format&fit=crop"
              alt="Local Food"
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 text-white border border-white/30">
                <Utensils size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Local Food Tours
              </h3>
              <p className="text-brand-cream/90 font-body text-sm">
                Taste authentic flavors. Culinary heritage through local markets
                and traditional home-cooked meals.
              </p>
            </div>
          </ServiceCard>

          {/* Accommodation */}
          <ServiceCard className="md:col-span-4 md:row-span-1 border border-brand-dark/5 bg-white">
            <div className="flex h-full flex-col">
              <div className="relative h-48 overflow-hidden w-full">
                <Image
                  src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2028&auto=format&fit=crop"
                  alt="Accommodation"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-brand-cream/90 backdrop-blur text-brand-dark px-3 py-1 rounded-full text-xs font-bold shadow-sm z-20">
                  Best Value
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-center bg-white relative z-10">
                <div className="flex items-center gap-2 mb-2 text-brand-green">
                  <Bed size={24} />
                  <h3 className="font-bold text-xl text-brand-dark">
                    Affordable Stays
                  </h3>
                </div>
                <p className="text-brand-dark/70 text-sm font-body line-clamp-3">
                  Comfortable stays that won't break the bank. Carefully
                  selected lodges and guesthouses.
                </p>
              </div>
            </div>
          </ServiceCard>

          {/* Culture */}
          <ServiceCard className="md:col-span-4 md:row-span-1">
            <div className="absolute inset-0 bg-brand-green/90 mix-blend-multiply z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1492052481023-e22384ae26d3?q=80&w=1978&auto=format&fit=crop"
              alt="Culture"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60"
            />
            <div className="absolute inset-0 p-8 z-20 flex flex-col items-center justify-center text-center border-4 border-white/10 m-4 rounded-xl backdrop-blur-[2px]">
              <Users size={40} className="text-brand-accent mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Cultural Experiences
              </h3>
              <p className="text-white/90 text-sm font-body max-w-xs">
                Connect with the soul of Limpopo. Living traditions and
                heritage.
              </p>
            </div>
          </ServiceCard>

          {/* Adventure */}
          <ServiceCard className="md:col-span-6 md:row-span-1">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green/90 to-transparent z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1533692328615-6e620c6c8463?q=80&w=2070&auto=format&fit=crop"
              alt="Adventure"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 p-8 z-20 flex flex-col justify-center items-start">
              <span className="bg-brand-accent text-brand-dark text-xs font-bold px-2 py-1 rounded mb-3">
                THRILLS
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">
                Adventure Activities
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Hiking", "Water Sports", "Safaris"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ServiceCard>

          {/* Group Tours */}
          <ServiceCard className="md:col-span-6 md:row-span-1 bg-brand-dark">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-green/30 rounded-full blur-2xl"></div>
            <div className="relative z-10 p-8 h-full flex flex-row items-center gap-6">
              <div className="w-1/3 shrink-0 rounded-xl overflow-hidden h-40 shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-300 ring-2 ring-brand-accent/20 relative">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop"
                  alt="Friends"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-white">
                <div className="flex items-center gap-2 mb-2 text-brand-accent">
                  <Users size={20} />
                  <span className="text-sm font-bold uppercase">
                    Group Tours
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-cream">
                  Adventure is Better Together
                </h3>
                <p className="text-brand-cream/70 text-sm font-body">
                  Retreats, family reunions, or friends' getaways designed to
                  showcase the best of Limpopo.
                </p>
              </div>
            </div>
          </ServiceCard>
        </div>
      </main>
    </div>
  );
};
