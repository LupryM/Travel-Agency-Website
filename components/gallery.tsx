"use client";

import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string; // Kept for accessibility/lightbox
  location?: string; // Kept for lightbox display only
  span?: string; // Used for Desktop layout only
}

const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/water.jpg",
    alt: "Silhouette of a large Baobab tree against a vibrant orange and purple African sunset",
    title: "Waterfall",
    location: "Limpopo",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/gallery/people.jpg",
    alt: "Performers in traditional colorful attire dancing with energy",
    title: "People",
  },
  {
    src: "/gallery/herotest.jpg",
    alt: "A majestic waterfall cascading down into a pool surrounded by green vegetation",
    title: "Mpumalanga Falls",
  },
  {
    src: "/gallery/herotest2.jpg",
    alt: "Turquoise ocean waves meeting golden sandy beach",
    title: "Maputo Eco Tourism Resort",
    location: "Coast",
    span: "md:col-span-2",
  },
  {
    src: "/gallery/fall.jpg",
    alt: "Vibrant local market",
    title: "Local Markets",
  },
  {
    src: "/b.jpeg",
    alt: "Vibrant local market",
    title: "Local Markets",
  },
  {
    src: "/group.jpeg",
    alt: "Vibrant local market",
    title: "Local Markets",
  },
  {
    src: "/c.jpeg",
    alt: "Vibrant local market",
    title: "Local Markets",
  },
  {
    src: "/f.jpeg",
    alt: "Vibrant local market",
    title: "Local Markets",
  },
  {
    src: "/d.jpeg",
    alt: "Vibrant local market",
    title: "Local Markets",
  },
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === 0 ? galleryImages.length - 1 : (prev as number) - 1
      );
    }
  };

  const selectedImage =
    selectedIndex !== null ? galleryImages[selectedIndex] : null;

  return (
    <>
      <section
        className="py-16 md:py-20 px-4 md:px-10 bg-background-light"
        id="gallery"
      >
        <div className="max-w-[1100px] mx-auto">
          {/* Header Section */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-primary text-[32px] md:text-4xl font-bold leading-tight tracking-tight mb-4">
              Captured Moments
            </h2>
            <p className="text-primary/70 text-lg max-w-2xl">
              A glimpse into the breathtaking landscapes and vibrant experiences
              waiting for you.
            </p>
          </div>

          {/* responsive container: 
            Mobile: Flexbox with horizontal scroll (carousel)
            Desktop: CSS Grid
          */}
          <div
            className="
            flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide
            md:grid md:grid-cols-4 md:gap-4 md:auto-rows-[250px] md:overflow-visible md:pb-0
          "
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`
                  /* Mobile Sizing: Fixed width blocks that snap */
                  shrink-0 w-[85vw] h-[300px] snap-center 
                  
                  /* Desktop Sizing: Reset width/height and use grid */
                  md:w-auto md:h-full md:col-span-1 
                  ${image.span || ""} 
                  
                  /* Common Styling */
                  rounded-xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-all
                `}
              >
                {/* Image Container - No Text Overlay */}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url("${image.src}")` }}
                  role="img"
                  aria-label={image.alt}
                />
              </div>
            ))}
          </div>

          {/* Mobile Hint (Optional: Shows user they can scroll) */}
          <p className="md:hidden text-center text-sm text-primary/40 mt-2 font-medium">
            Swipe to explore gallery &rarr;
          </p>
        </div>
      </section>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50 p-2"
            onClick={() => setSelectedIndex(null)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-50 hover:bg-white/10 rounded-full"
          >
            <span className="material-symbols-outlined text-4xl md:text-5xl">
              chevron_left
            </span>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-50 hover:bg-white/10 rounded-full"
          >
            <span className="material-symbols-outlined text-4xl md:text-5xl">
              chevron_right
            </span>
          </button>

          <div
            className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center gap-4 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
          >
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-w-full max-h-[75vh] object-contain rounded-md shadow-2xl"
            />

            {/* Title is only shown in the lightbox now */}
            <div className="text-center">
              {selectedImage.location && (
                <span className="text-teal-accent text-xs font-bold uppercase tracking-wider mb-1 block">
                  {selectedImage.location}
                </span>
              )}
              <h3 className="text-white text-xl font-bold">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
