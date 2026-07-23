/**
 * Complete data model for MenikahSudahDekat wedding invitations
 * Botanical Garden Theme
 */

export interface Person {
  name: string;
  nickname?: string;
  parents?: {
    father?: string;
    mother?: string;
  };
  instagram?: string;
  photo?: string;
}

export interface Couple {
  bride: Person;
  groom: Person;
}

export interface Guest {
  name: string;
  email?: string;
  phone?: string;
}

export interface CoverData {
  title?: string;
  subtitle?: string;
  date?: string;
  backgroundImage?: string;
  musicUrl?: string;
}

export interface EventDetails {
  date: string;
  time: string;
  venue: string;
  address: string;
  googleMapsUrl?: string;
  dressCode?: string;
  parkingInfo?: string;
}

export interface Events {
  ceremony: EventDetails;
  reception: EventDetails;
}

export interface RSVPData {
  deadline?: string;
  contactEmail?: string;
  contactPhone?: string;
}

export interface Story {
  title: string;
  description: string;
  image: string;
  date?: string;
}

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface Video {
  title: string;
  youtubeUrl: string;
  thumbnail?: string;
}

export interface LivestreamData {
  title?: string;
  youtubeUrl?: string;
  startTime?: string;
  description?: string;
}

export interface MonetaryGift {
  bankName: string;
  accountName: string;
  accountNumber: string;
  swiftCode?: string;
  currency?: string;
}

export interface PhysicalGift {
  name: string;
  address: string;
  phone?: string;
  email?: string;
}

export interface Wish {
  guestName: string;
  message: string;
  timestamp?: string;
  photo?: string;
}

export interface ClosingData {
  message?: string;
  thankYouMessage?: string;
  hashtag?: string;
}

export interface InvitationData {
  couple: Couple;
  guest: Guest;
  cover: CoverData;
  events: Events;
  rsvp: RSVPData;
  stories: Story[];
  gallery: GalleryImage[];
  videos: Video[];
  livestream?: LivestreamData;
  gifts: {
    monetary?: MonetaryGift[];
    physical?: PhysicalGift;
  };
  wishes: Wish[];
  closing: ClosingData;
}

export type ThemeName = "botanical-garden";
