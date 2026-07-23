/**
 * Stories Section Component
 * Botanical Garden Theme - Garden journal timeline with alternating layout
 */

import { Story } from "@/types/invitation";
import { BotanicalLeafDivider } from "@/components/BotanicalDivider";

interface StoriesProps {
  stories: Story[];
}

function StoryCard({
  story,
  index,
}: {
  story: Story;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24 ${
        !isEven ? "md:grid-flow-dense" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-xl shadow-lg ${
          !isEven ? "md:col-start-2" : ""
        }`}
      >
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
        />
        {story.date && (
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <p className="text-sm text-white font-serif">{story.date}</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`${!isEven ? "md:col-start-1" : ""}`}>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-4">
          {story.title}
        </h3>

        <p className="text-base md:text-lg text-deep-moss leading-relaxed font-serif">
          {story.description}
        </p>

        {/* Decorative element */}
        <div className="mt-6 flex gap-2">
          <div className="w-1 h-8 bg-sage-green rounded-full" />
          <div className="w-1 h-8 bg-soft-sage rounded-full opacity-50" />
        </div>
      </div>
    </div>
  );
}

export function Stories({ stories }: StoriesProps) {
  return (
    <section className="section-botanical bg-warm-linen">
      <div className="container max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-forest-green mb-4">
          Our Story
        </h2>

        <BotanicalLeafDivider />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sage-green via-soft-sage to-transparent opacity-30" />

          {/* Stories */}
          {stories.map((story, index) => (
            <StoryCard key={index} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
