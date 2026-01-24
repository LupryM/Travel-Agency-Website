"use client"

import type React from "react"

import { useState } from "react"

export function Newsletter() {
  const [form, setForm] = useState({ name: "", whatsapp: "", suggestion: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct WhatsApp message
    const whatsappNumber = "27840228948"; // Same as in WhatsApp button
    const message = encodeURIComponent(
      `Hi! I'm interested in the next itinerary.\n\nName: ${form.name}\nWhatsApp: ${form.whatsapp}\nSuggestion: ${form.suggestion || 'None'}`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 md:px-10 bg-forest-green text-white relative overflow-hidden" id="newsletter">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      ></div>
      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Get the Next Itinerary First</h2>
        <p className="text-white/80 text-lg mb-10">
          We are currently finalizing the dates and destination for our next authentic journey. Sign up to receive the flyer and booking details via WhatsApp as soon as they are ready.
        </p>
        {submitted ? (
          <div className="text-xl font-semibold text-white py-8">Thank you! You’ll be notified on WhatsApp as soon as the next trip is ready.</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto text-left">
            <label className="font-semibold text-white/90">Name
              <input
                className="block w-full h-12 px-4 mt-2 rounded-lg text-primary border-0 focus:ring-2 focus:ring-teal-accent"
                placeholder="Your Name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="font-semibold text-white/90">WhatsApp Number
              <input
                className="block w-full h-12 px-4 mt-2 rounded-lg text-primary border-0 focus:ring-2 focus:ring-teal-accent"
                placeholder="e.g. 082 123 4567"
                type="tel"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                required
              />
            </label>
            <label className="font-semibold text-white/90">Suggestion: Which destination would you like to see us visit?
              <textarea
                className="block w-full px-4 py-3 mt-2 rounded-lg text-primary border-0 focus:ring-2 focus:ring-teal-accent resize-none"
                placeholder="Your suggestion (optional)"
                name="suggestion"
                value={form.suggestion}
                onChange={handleChange}
                rows={3}
              />
            </label>
            <button
              className="h-12 px-8 rounded-lg bg-earthy-beige text-primary font-bold hover:bg-white transition-colors mt-2"
              type="submit"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
