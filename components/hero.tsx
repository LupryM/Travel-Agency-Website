"use client";

import Image from "next/image";
import Link from "next/link";
// 1. IMPORT THE FONTS
import { Dancing_Script, Montserrat } from "next/font/google";

// 2. CONFIGURE THE FONTS
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#29B6F6] via-[#4FC3F7] via-[#B3E5FC] to-[#FDFBF7]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bighero.webp"
          alt="Travel background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-32">
        {/* MAIN HERO LINE — Changed to Dark Brown (#3E2723) to match Logo Text */}
        <h1
          className={`${dancingScript.className} text-5xl md:text-7xl lg:text-8xl text-[#3E2723] mb-4 leading-tight drop-shadow-sm`}
        >
          Group Trips from Thohoyandou
        </h1>

        {/* Supporting text — Dark Brown for warmth and readability */}
        <p className="text-lg md:text-xl text-[#3E2723] mb-10 font-medium">
          Authentic Limpopo Journeys
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#special-offer"
            className="
              bg-[#4C7031] text-white
              px-8 py-3 rounded-full
              font-bold uppercase tracking-wide
              shadow-lg
              hover:bg-[#3E2723]
              transition
              inline-flex items-center gap-2
            "
          >
            {/* Button is now GREEN (like the Tree), Hover is BROWN */}
            <span className="material-symbols-outlined">flight_takeoff</span>
            Join our next trip
          </Link>

          <Link
            href="#services"
            className="
              bg-white text-[#3E2723]
              px-8 py-3 rounded-full
              font-bold uppercase tracking-wide
              shadow-lg
              hover:bg-[#FFFBF2] hover:text-[#4C7031]
              transition
              inline-flex items-center gap-2
            "
          >
            <span className="material-symbols-outlined">explore</span>
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
