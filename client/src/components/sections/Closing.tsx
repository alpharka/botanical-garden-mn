/**
 * Closing Section Component
 * Botanical Garden Theme - Botanical signature section with floral divider
 */

import { ClosingData } from "@/types/invitation";
import { BotanicalDivider, BotanicalLeafDivider } from "@/components/BotanicalDivider";

interface ClosingProps {
  data: ClosingData;
  coupleName: string;
}

export function Closing({ data, coupleName }: ClosingProps) {
  return (
    <section className="section-botanical bg-warm-linen">
      <div className="container max-w-2xl">
        <BotanicalLeafDivider />

        {/* Main Message */}
        {data.message && (
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-forest-green mb-8">
            {data.message}
          </h2>
        )}

        {/* Thank You Message */}
        {data.thankYouMessage && (
          <p className="text-center text-base md:text-lg text-deep-moss leading-relaxed font-serif mb-12">
            {data.thankYouMessage}
          </p>
        )}

        {/* Couple Signature */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="h-1 w-24 bg-gradient-to-r from-forest-green to-sage-green mb-4" />
            <p className="text-xl md:text-2xl font-serif font-bold text-forest-green">
              {coupleName}
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-sage-green to-forest-green mt-4" />
          </div>
        </div>

        {/* Hashtag */}
        {data.hashtag && (
          <p className="text-center text-sm md:text-base text-soft-sage tracking-widest uppercase mb-12">
            {data.hashtag}
          </p>
        )}

        {/* Decorative footer */}
        <div className="flex justify-center gap-4 mt-12">
          <svg
            className="w-8 h-8 text-soft-sage opacity-40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
          <svg
            className="w-8 h-8 text-soft-sage opacity-40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
          <svg
            className="w-8 h-8 text-soft-sage opacity-40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
