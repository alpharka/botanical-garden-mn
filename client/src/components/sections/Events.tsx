/**
 * Events Section Component
 * Botanical Garden Theme - Elegant botanical venue cards
 */

import { EventDetails } from "@/types/invitation";
import { MapPin, Clock, Calendar } from "lucide-react";
import { BotanicalLeafDivider } from "@/components/BotanicalDivider";

interface EventsProps {
  ceremony: EventDetails;
  reception: EventDetails;
}

function EventCard({ event, title }: { event: EventDetails; title: string }) {
  return (
    <div className="card-botanical">
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-forest-green mb-6">
        {title}
      </h3>

      {/* Date and Time */}
      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-sage-green flex-shrink-0 mt-1" />
          <div>
            <p className="text-sm text-soft-sage uppercase tracking-wide">Date</p>
            <p className="text-base md:text-lg text-deep-moss font-serif">
              {event.date}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-sage-green flex-shrink-0 mt-1" />
          <div>
            <p className="text-sm text-soft-sage uppercase tracking-wide">Time</p>
            <p className="text-base md:text-lg text-deep-moss font-serif">
              {event.time}
            </p>
          </div>
        </div>
      </div>

      {/* Venue */}
      <div className="mb-6">
        <h4 className="text-sm text-soft-sage uppercase tracking-wide mb-2">
          Venue
        </h4>
        <p className="text-lg md:text-xl text-deep-moss font-serif mb-2">
          {event.venue}
        </p>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-sage-green flex-shrink-0 mt-1" />
          <p className="text-base text-deep-moss/80">{event.address}</p>
        </div>
      </div>

      {/* Dress Code */}
      {event.dressCode && (
        <div className="mb-6 pb-6 border-b border-soft-sage">
          <p className="text-sm text-soft-sage uppercase tracking-wide mb-2">
            Dress Code
          </p>
          <p className="text-base text-deep-moss">{event.dressCode}</p>
        </div>
      )}

      {/* Parking */}
      {event.parkingInfo && (
        <div className="mb-6">
          <p className="text-sm text-soft-sage uppercase tracking-wide mb-2">
            Parking
          </p>
          <p className="text-base text-deep-moss">{event.parkingInfo}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-soft-sage">
        {event.googleMapsUrl && (
          <a
            href={event.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-botanical-outline flex-1 text-center"
          >
            View Map
          </a>
        )}
        <button className="btn-botanical-outline flex-1">
          Add to Calendar
        </button>
      </div>
    </div>
  );
}

export function Events({ ceremony, reception }: EventsProps) {
  return (
    <section className="section-botanical bg-ivory">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-forest-green mb-4">
          Wedding Events
        </h2>

        <BotanicalLeafDivider />

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <EventCard event={ceremony} title="Ceremony" />
          <EventCard event={reception} title="Reception" />
        </div>
      </div>
    </section>
  );
}
