"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-[#F9F5F0] py-2 shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1440px] mx-auto w-full px-6">
        {/* LOGO */}
        <Link href="/" className="relative z-10 flex items-center">
          <div
            className={`transition-all duration-300 ${
              isScrolled ? "shadow-none" : "shadow-lg"
            }`}
          >
            <Image
              src="/logoshiny.png"
              alt="Ndila Ya Vhupo Travels"
              width={200}
              height={80}
              priority
              className="h-14 w-auto object-contain rounded-none"
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Upcoming Trip", "Services", "About", "Gallery"].map(
            (item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : item === "Upcoming Trip"
                    ? "#special-offer"
                    : `#${item.toLowerCase().replace(" ", "-")}`
                }
                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                  isScrolled
                    ? "text-[#3E2723] hover:text-[#4A7C59]"
                    : "text-white hover:text-[#F9F5F0]"
                }`}
              >
                {item}
              </Link>
            )
          )}

          <button
            className={`font-bold uppercase tracking-wide px-6 py-2 transition-all duration-300 shadow-md border-2 rounded-full ${
              isScrolled
                ? "bg-[#4A7C59] text-white border-[#4A7C59] hover:bg-[#3E2723] hover:border-[#3E2723]"
                : "bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-[#3E2723]"
            }`}
          >
            Contact
          </button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            className={`p-2 transition-colors duration-300 ${
              isScrolled ? "text-[#3E2723]" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#F9F5F0] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-[#3E2723]"
        >
          <span className="material-symbols-outlined text-4xl">close</span>
        </button>

        {/* MOBILE LOGO */}
        <div className="mb-4 shadow-sm">
          <Image
            src="/logoshiny.png"
            alt="Logo"
            width={150}
            height={60}
            className="h-16 w-auto object-contain rounded-none"
          />
        </div>

        {[
          "Home",
          "Upcoming Trip",
          "Services",
          "About",
          "Gallery",
          "Testimonials",
        ].map((item) => (
          <Link
            key={item}
            href={
              item === "Home"
                ? "/"
                : item === "Upcoming Trip"
                ? "#special-offer"
                : `#${item.toLowerCase().replace(" ", "-")}`
            }
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#3E2723] text-xl font-bold uppercase tracking-widest hover:text-[#4A7C59] transition-colors"
          >
            {item}
          </Link>
        ))}

        <button className="bg-[#4A7C59] text-white px-10 py-3 rounded-full font-bold uppercase tracking-wide shadow-lg mt-4 hover:bg-[#3E2723] transition-colors">
          Contact
        </button>
      </div>
    </header>
  );
}
