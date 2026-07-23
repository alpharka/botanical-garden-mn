/**
 * Gallery Section Component
 * Botanical Garden Theme - Editorial masonry gallery
 */

import { GalleryImage } from "@/types/invitation";
import { BotanicalLeafDivider } from "@/components/BotanicalDivider";

interface GalleryProps {
  images: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <section className="section-botanical bg-ivory">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-forest-green mb-4">
          Gallery
        </h2>

        <BotanicalLeafDivider />

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-max">
          {images.map((image, index) => {
            const isLarge = index % 5 === 0;
            const isTall = index % 7 === 2;

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 group ${
                  isLarge ? "md:col-span-2 md:row-span-2" : ""
                } ${isTall ? "md:row-span-2" : ""}`}
              >
                <img
                  src={image.src}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Caption overlay */}
                {image.caption && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-serif text-sm md:text-base">
                      {image.caption}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
