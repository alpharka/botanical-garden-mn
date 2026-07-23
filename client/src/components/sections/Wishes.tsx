/**
 * Wishes Section Component
 * Botanical Garden Theme - Warm handwritten garden guestbook
 */

import { Wish } from "@/types/invitation";
import { BotanicalLeafDivider } from "@/components/BotanicalDivider";

interface WishesProps {
  wishes: Wish[];
}

function WishCard({ wish }: { wish: Wish }) {
  return (
    <div className="card-botanical">
      <div className="flex items-start gap-4 mb-4">
        {wish.photo && (
          <img
            src={wish.photo}
            alt={wish.guestName}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          />
        )}
        <div>
          <h4 className="font-serif font-semibold text-forest-green">
            {wish.guestName}
          </h4>
          {wish.timestamp && (
            <p className="text-sm text-soft-sage">{wish.timestamp}</p>
          )}
        </div>
      </div>

      <p className="text-base text-deep-moss leading-relaxed font-serif italic">
        "{wish.message}"
      </p>
    </div>
  );
}

export function Wishes({ wishes }: WishesProps) {
  return (
    <section className="section-botanical bg-ivory">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-forest-green mb-4">
          Wedding Wishes
        </h2>

        <BotanicalLeafDivider />

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {wishes.map((wish, index) => (
            <WishCard key={index} wish={wish} />
          ))}
        </div>

        {/* Add Wish CTA */}
        <div className="text-center mt-12">
          <button className="btn-botanical">
            Share Your Wishes
          </button>
        </div>
      </div>
    </section>
  );
}
