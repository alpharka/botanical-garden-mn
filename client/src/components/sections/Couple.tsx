/**
 * Couple Section Component
 * Botanical Garden Theme - Framed portrait cards with botanical accents
 */

import { Person } from "@/types/invitation";
import { BotanicalLeafDivider } from "@/components/BotanicalDivider";

interface CoupleProps {
  bride: Person;
  groom: Person;
}

function PersonCard({ person, title }: { person: Person; title: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Portrait frame */}
      <div className="relative mb-6 md:mb-8">
        <div className="w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-soft-sage">
          {person.photo && (
            <img
              src={person.photo}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {/* Botanical corner decoration */}
        <div className="absolute -top-4 -left-4 w-16 h-16 opacity-60">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-forest-green"
            fill="currentColor"
          >
            <path d="M20,20 Q40,10 60,20 L60,40 Q50,30 40,40 L20,40 Z" />
          </svg>
        </div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-60">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-sage-green"
            fill="currentColor"
          >
            <path d="M80,80 Q60,90 40,80 L40,60 Q50,70 60,60 L80,60 Z" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <p className="text-sm md:text-base tracking-widest text-soft-sage uppercase mb-2">
        {title}
      </p>

      {/* Name */}
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-forest-green mb-2">
        {person.name}
      </h3>

      {/* Nickname */}
      {person.nickname && (
        <p className="text-sm md:text-base text-deep-moss italic mb-4">
          "{person.nickname}"
        </p>
      )}

      {/* Parents */}
      {person.parents && (
        <div className="text-sm md:text-base text-deep-moss/80 mb-4 space-y-1">
          {person.parents.father && (
            <p>Son of {person.parents.father}</p>
          )}
          {person.parents.mother && (
            <p>and {person.parents.mother}</p>
          )}
        </div>
      )}

      {/* Instagram */}
      {person.instagram && (
        <a
          href={`https://instagram.com/${person.instagram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-forest-green hover:text-sage-green transition-colors duration-300"
        >
          {person.instagram}
        </a>
      )}
    </div>
  );
}

export function Couple({ bride, groom }: CoupleProps) {
  return (
    <section className="section-botanical bg-warm-linen">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-forest-green mb-4">
          Our Love Story
        </h2>

        <BotanicalLeafDivider />

        {/* Couple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <PersonCard person={bride} title="The Bride" />
          <PersonCard person={groom} title="The Groom" />
        </div>

        {/* Decorative divider */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <svg
            className="w-12 h-12 text-soft-sage opacity-40"
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
