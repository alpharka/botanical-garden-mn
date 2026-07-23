/**
 * Home Page - MenikahSudahDekat Wedding Invitation
 * Botanical Garden Theme
 * Single-page scroll-driven storytelling experience
 */

import { useState } from "react";
import { demoInvitation } from "@/data/demo-invitation";
import { Cover } from "@/components/sections/Cover";
import { Couple } from "@/components/sections/Couple";
import { Events } from "@/components/sections/Events";
import { Stories } from "@/components/sections/Stories";
import { Gallery } from "@/components/sections/Gallery";
import { RSVP } from "@/components/sections/RSVP";
import { Wishes } from "@/components/sections/Wishes";
import { Closing } from "@/components/sections/Closing";
import { BotanicalDivider } from "@/components/BotanicalDivider";

export default function Home() {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const invitation = demoInvitation;

  const coupleName = `${invitation.couple.bride.name} & ${invitation.couple.groom.name}`;

  if (!invitationOpened) {
    return (
      <Cover
        data={invitation.cover}
        guestName={invitation.guest.name}
        coupleName={coupleName}
        onOpen={() => setInvitationOpened(true)}
      />
    );
  }

  return (
    <main className="w-full bg-warm-linen">
      {/* Masthead Divider */}
      <BotanicalDivider position="top" className="text-ivory" />

      {/* Epigraph Section */}
      <section className="section-botanical bg-ivory">
        <div className="container max-w-2xl text-center">
          <p className="quote text-2xl md:text-3xl text-forest-green mb-4">
            "Two souls with but a single thought, two hearts that beat as one"
          </p>
          <p className="text-sm text-soft-sage uppercase tracking-widest">
            — John Keats
          </p>
        </div>
      </section>

      <BotanicalDivider position="bottom" className="text-warm-linen" />

      {/* Couple Section */}
      <Couple bride={invitation.couple.bride} groom={invitation.couple.groom} />

      <BotanicalDivider position="bottom" className="text-ivory" />

      {/* Events Section */}
      <Events
        ceremony={invitation.events.ceremony}
        reception={invitation.events.reception}
      />

      <BotanicalDivider position="bottom" className="text-warm-linen" />

      {/* Stories Section */}
      <Stories stories={invitation.stories} />

      <BotanicalDivider position="bottom" className="text-ivory" />

      {/* Gallery Section */}
      <Gallery images={invitation.gallery} />

      <BotanicalDivider position="bottom" className="text-warm-linen" />

      {/* RSVP Section */}
      <RSVP data={invitation.rsvp} />

      <BotanicalDivider position="bottom" className="text-ivory" />

      {/* Wishes Section */}
      <Wishes wishes={invitation.wishes} />

      <BotanicalDivider position="bottom" className="text-warm-linen" />

      {/* Closing Section */}
      <Closing data={invitation.closing} coupleName={coupleName} />

      {/* Footer */}
      <footer className="bg-deep-moss text-ivory py-8 md:py-12">
        <div className="container text-center">
          <p className="text-sm md:text-base font-serif">
            Thank you for celebrating with us
          </p>
          <p className="text-xs md:text-sm text-soft-sage mt-2">
            © 2025 MenikahSudahDekat. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
