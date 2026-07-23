/**
 * RSVP Section Component
 * Botanical Garden Theme - Elegant invitation card with leaf border
 */

import { RSVPData } from "@/types/invitation";
import { BotanicalLeafDivider } from "@/components/BotanicalDivider";
import { Mail, Phone } from "lucide-react";

interface RSVPProps {
  data: RSVPData;
}

export function RSVP({ data }: RSVPProps) {
  return (
    <section className="section-botanical bg-warm-linen">
      <div className="container max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-forest-green mb-4">
          RSVP
        </h2>

        <BotanicalLeafDivider />

        {/* RSVP Card */}
        <div className="card-botanical relative overflow-hidden">
          {/* Decorative leaf corners */}
          <div className="absolute top-0 left-0 w-24 h-24 opacity-20">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-forest-green"
              fill="currentColor"
            >
              <path d="M20,20 Q40,10 60,20 L60,40 Q50,30 40,40 L20,40 Z" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20 rotate-180">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-sage-green"
              fill="currentColor"
            >
              <path d="M20,20 Q40,10 60,20 L60,40 Q50,30 40,40 L20,40 Z" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <p className="text-center text-sm text-soft-sage uppercase tracking-widest mb-4">
              We would love to have you celebrate with us
            </p>

            <h3 className="text-center text-2xl md:text-3xl font-serif font-bold text-forest-green mb-8">
              Please Confirm Your Attendance
            </h3>

            {/* Deadline */}
            {data.deadline && (
              <div className="text-center mb-8 pb-8 border-b border-soft-sage">
                <p className="text-sm text-soft-sage uppercase tracking-wide mb-2">
                  RSVP Deadline
                </p>
                <p className="text-lg md:text-xl text-deep-moss font-serif">
                  {data.deadline}
                </p>
              </div>
            )}

            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              {data.contactEmail && (
                <div className="flex items-center justify-center gap-4">
                  <Mail className="w-6 h-6 text-sage-green" />
                  <a
                    href={`mailto:${data.contactEmail}`}
                    className="text-base md:text-lg text-forest-green hover:text-sage-green transition-colors duration-300 font-serif"
                  >
                    {data.contactEmail}
                  </a>
                </div>
              )}

              {data.contactPhone && (
                <div className="flex items-center justify-center gap-4">
                  <Phone className="w-6 h-6 text-sage-green" />
                  <a
                    href={`tel:${data.contactPhone}`}
                    className="text-base md:text-lg text-forest-green hover:text-sage-green transition-colors duration-300 font-serif"
                  >
                    {data.contactPhone}
                  </a>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="btn-botanical">
                Confirm Your Attendance
              </button>
            </div>

            {/* Decorative text */}
            <p className="text-center text-sm text-soft-sage italic mt-8">
              Your presence is the greatest gift
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
