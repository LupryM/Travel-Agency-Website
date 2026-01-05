"use client"

import type React from "react"

import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing:", email)
  }

  return (
    <section className="py-20 px-4 md:px-10 bg-forest-green text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      ></div>
      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready for your next adventure?</h2>
        <p className="text-white/80 text-lg mb-10">
          Sign up for our newsletter to receive exclusive offers and travel inspiration directly to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            className="flex-1 h-12 px-4 rounded-lg text-primary border-0 focus:ring-2 focus:ring-teal-accent"
            placeholder="Enter your email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="h-12 px-8 rounded-lg bg-earthy-beige text-primary font-bold hover:bg-white transition-colors"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
