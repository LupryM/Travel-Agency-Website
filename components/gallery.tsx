"use client";

import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  location?: string;
  span?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/water.jpg",
    alt: "Silhouette of a large Baobab tree against a vibrant orange and purple African sunset",
    title: "Waterfall",
    location: "Limpopo",
    span: "lg:col-span-2 lg:row-span-2",
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
    span: "lg:col-span-2",
  },
  {
    src: "/gallery/water.jpg",
    alt: "Elephants roaming the African savanna",
    title: "Wildlife Safari",
    location: "Kruger",
  },
  {
    src: "/gallery/water.jpg",
    alt: "Traditional African village",
    title: "Cultural Heritage",
  },
  {
    src: "/mountain-hiking-trails-with-dramatic-views.jpg",
    alt: "Dramatic mountain hiking trails",
    title: "Mountain Adventures",
    span: "lg:col-span-2",
  },
  {
    src: "/colorful-african-market-bustling-with-people.jpg",
    alt: "Vibrant local market",
    title: "Local Markets",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  const displayedImages = showFullGallery
    ? galleryImages
    : galleryImages.slice(0, 4);

  return (
    <>
      <section className="py-20 px-4 md:px-10 bg-background-light" id="gallery">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary text-[32px] md:text-4xl font-bold leading-tight tracking-tight mb-4">
                Captured Moments
              </h2>
              <p className="text-primary/70 text-lg">
                A glimpse into the breathtaking landscapes and vibrant
                experiences waiting for you.
              </p>
            </div>
            <button
              onClick={() => setShowFullGallery(!showFullGallery)}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-primary/20 rounded-lg hover:bg-white hover:border-primary/40 transition-all font-medium text-primary"
            >
              {showFullGallery ? "Show Less" : "View Full Gallery"}
              <span className="material-symbols-outlined text-[20px]">
                grid_view
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[240px] md:auto-rows-[250px]">
            {displayedImages.map((image, index) => (
              <div
                key={index}
                className={`${
                  image.span || ""
                } rounded-xl overflow-hidden relative group cursor-pointer`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {image.location && (
                    <span className="text-teal-accent text-xs font-bold uppercase tracking-wider mb-2 block">
                      {image.location}
                    </span>
                  )}
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    {image.title}
                  </h3>
                </div>
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url("${image.src}")` }}
                  role="img"
                  aria-label={image.alt}
                ></div>
              </div>
            ))}
          </div>

          {!showFullGallery && (
            <button
              onClick={() => setShowFullGallery(true)}
              className="md:hidden mt-6 w-full flex items-center justify-center gap-2 px-5 py-3 border border-primary/20 rounded-lg hover:bg-white hover:border-primary/40 transition-all font-medium text-primary"
            >
              View Full Gallery
              <span className="material-symbols-outlined text-[20px]">
                grid_view
              </span>
            </button>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-teal-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center gap-4">
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center">
              {selectedImage.location && (
                <span className="text-teal-accent text-sm font-bold uppercase tracking-wider mb-2 block">
                  {selectedImage.location}
                </span>
              )}
              <h3 className="text-white text-2xl font-bold">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
