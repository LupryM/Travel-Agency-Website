export function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-10 bg-earthy-beige" id="testimonials">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary text-[32px] md:text-4xl font-bold leading-tight tracking-tight mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-primary/80 text-lg font-normal max-w-2xl mx-auto">
            Hear from travelers who have walked the path with us and experienced the magic of South Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary/5 relative hover:-translate-y-1 transition-transform duration-300">
            <span className="material-symbols-outlined text-4xl text-teal-accent/20 absolute top-6 right-6 select-none">
              format_quote
            </span>
            <div className="flex items-center gap-4 mb-6">
              <div className="size-12 rounded-full bg-forest-green flex items-center justify-center text-white font-bold text-lg shadow-md">
                TM
              </div>
              <div>
                <h4 className="font-bold text-primary">Thandiwe M.</h4>
                <div className="flex text-[#FFD700] text-sm gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-primary/70 italic leading-relaxed">
              &quot;The trip to Mapate Eco-Tourism Resort was absolutely life-changing. The guides were so knowledgeable
              about the local flora and history. I felt truly connected to the land.&quot;
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary/5 relative hover:-translate-y-1 transition-transform duration-300">
            <span className="material-symbols-outlined text-4xl text-teal-accent/20 absolute top-6 right-6 select-none">
              format_quote
            </span>
            <div className="flex items-center gap-4 mb-6">
              <div className="size-12 rounded-full bg-teal-accent flex items-center justify-center text-white font-bold text-lg shadow-md">
                JD
              </div>
              <div>
                <h4 className="font-bold text-primary">James Dewalt</h4>
                <div className="flex text-[#FFD700] text-sm gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star_half
                  </span>
                </div>
              </div>
            </div>
            <p className="text-primary/70 italic leading-relaxed">
              &quot;From the food to the hiking trails, everything was curated perfectly. Ndila Ya Vhupo showed us a
              side of Limpopo we never would have found on our own.&quot;
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary/5 relative hover:-translate-y-1 transition-transform duration-300">
            <span className="material-symbols-outlined text-4xl text-teal-accent/20 absolute top-6 right-6 select-none">
              format_quote
            </span>
            <div className="flex items-center gap-4 mb-6">
              <div className="size-12 rounded-full bg-sky-blue flex items-center justify-center text-white font-bold text-lg shadow-md">
                LN
              </div>
              <div>
                <h4 className="font-bold text-primary">Lerato Nkosi</h4>
                <div className="flex text-[#FFD700] text-sm gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-primary/70 italic leading-relaxed">
              &quot;An unforgettable cultural immersion. The warmth of the people and the beauty of the landscapes were
              breathtaking. Highly recommend booking your next adventure here!&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
