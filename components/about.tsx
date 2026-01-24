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
              About Ndila Ya Vhupo Travels Connecting People Through the Beauty of Venda and Beyond.
            </h2>
            <p className="text-primary/70 text-lg leading-relaxed">
              Based right here in Thohoyandou, Ndila Ya Vhupo Travels was founded on a simple belief: travel is better when it’s shared. We noticed that many people in Venda want to explore the beauty of Limpopo and South Africa but don't want the stress of driving long distances or planning complex itineraries alone.
            </p>
            <p className="text-primary/70 text-lg leading-relaxed">
              That is where we come in. We are more than just a tour operator; we are community builders. We curate authentic group journeys that celebrate our heritage, respect nature, and foster friendship.
            </p>
            <div className="pt-4">
              <h3 className="text-primary text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="text-primary/70 text-lg leading-relaxed list-disc list-inside space-y-2">
                <li>Locally Based: We operate out of Thohoyandou and understand the needs of our local community.</li>
                <li>Hassle-Free Planning: We manage the transport, meals, and bookings.</li>
                <li>Safety & Comfort: We partner with trusted transport providers and lodges.</li>
                <li>Cultural Pride: Our trips often feature deep dives into Venda culture and history.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
