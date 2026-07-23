import { InvitationData } from "@/types/invitation";

export const demoInvitation: InvitationData = {
  couple: {
    bride: {
      name: "Siti Nurhaliza",
      nickname: "Siti",
      parents: {
        father: "Haji Ahmad Nurdin",
        mother: "Haji Salmah Binti Hassan",
      },
      instagram: "@sitiinvites",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop",
    },
    groom: {
      name: "Rizki Pratama",
      nickname: "Rizki",
      parents: {
        father: "Bapak Bambang Pratama",
        mother: "Ibu Susi Wijaya",
      },
      instagram: "@rizkipratama",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
    },
  },
  guest: {
    name: "Honored Guest",
    email: "guest@example.com",
    phone: "+62 812 3456 7890",
  },
  cover: {
    title: "Siti & Rizki",
    subtitle: "We joyfully invite you to celebrate our love",
    date: "August 15, 2025",
    backgroundImage: "/manus-storage/botanical-hero-bg_d514b8d0.png",
    musicUrl: "https://example.com/wedding-music.mp3",
  },
  events: {
    ceremony: {
      date: "August 15, 2025",
      time: "10:00 AM",
      venue: "Grand Mosque of Jakarta",
      address: "Jl. Taman Wijaya No. 1, Jakarta, Indonesia",
      googleMapsUrl: "https://maps.google.com/?q=Grand+Mosque+Jakarta",
      dressCode: "Formal / Traditional",
      parkingInfo: "Complimentary valet parking available",
    },
    reception: {
      date: "August 15, 2025",
      time: "6:00 PM",
      venue: "Botanical Garden Ballroom",
      address: "Jl. Raya Bogor Km. 5, Jakarta, Indonesia",
      googleMapsUrl: "https://maps.google.com/?q=Botanical+Garden+Ballroom+Jakarta",
      dressCode: "Formal / Traditional",
      parkingInfo: "Free parking for all guests",
    },
  },
  rsvp: {
    deadline: "August 1, 2025",
    contactEmail: "rsvp@sitirizki.com",
    contactPhone: "+62 812 9876 5432",
  },
  stories: [
    {
      title: "How We Met",
      description:
        "Our love story began at a botanical garden exhibition where Siti was showcasing her photography and Rizki was admiring the flowers. A chance encounter among the blooms led to an unforgettable conversation.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      date: "March 2022",
    },
    {
      title: "The Proposal",
      description:
        "Rizki planned an intimate proposal in the same botanical garden where we first met. Surrounded by blooming flowers and golden sunset light, he asked the question that changed our lives forever.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      date: "December 2024",
    },
    {
      title: "Our Journey",
      description:
        "From stolen glances to stolen moments, our journey has been filled with laughter, adventure, and endless love. Every moment with you feels like a beautiful garden in bloom.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
      date: "2022 - 2025",
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop",
      alt: "Engagement photo in garden",
      caption: "Golden hour in the garden",
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop",
      alt: "Couple portrait",
      caption: "Our love story",
    },
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=600&fit=crop",
      alt: "Pre-wedding shoot",
      caption: "Moments of joy",
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop",
      alt: "Garden setting",
      caption: "Nature's beauty",
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop",
      alt: "Couple moment",
      caption: "Forever starts now",
    },
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=600&fit=crop",
      alt: "Wedding preparation",
      caption: "Getting ready",
    },
  ],
  videos: [
    {
      title: "Our Love Story",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    },
    {
      title: "Save The Date",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    },
  ],
  livestream: {
    title: "Wedding Ceremony Live Stream",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    startTime: "August 15, 2025 at 10:00 AM",
    description:
      "Join us live as we say our vows. Click below to watch the ceremony from anywhere in the world.",
  },
  gifts: {
    monetary: [
      {
        bankName: "Bank Mandiri",
        accountName: "Rizki Pratama & Siti Nurhaliza",
        accountNumber: "1234567890",
        swiftCode: "BMRIIDJA",
        currency: "IDR",
      },
    ],
    physical: {
      name: "Siti & Rizki Wedding Registry",
      address: "Jl. Raya Bogor Km. 5, Jakarta, Indonesia",
      phone: "+62 812 9876 5432",
      email: "gifts@sitirizki.com",
    },
  },
  wishes: [
    {
      guestName: "Sarah Johnson",
      message:
        "Wishing you both a lifetime of love, laughter, and beautiful moments together. May your marriage bloom like the most beautiful garden!",
      timestamp: "August 10, 2025",
    },
    {
      guestName: "Ahmad Hassan",
      message:
        "Congratulations on your wedding! May your love grow stronger with each passing day. Wishing you both happiness and prosperity.",
      timestamp: "August 9, 2025",
    },
    {
      guestName: "Maria Garcia",
      message:
        "What a beautiful couple! Wishing you endless love, joy, and adventure together. Cheers to your new chapter!",
      timestamp: "August 8, 2025",
    },
  ],
  closing: {
    message: "Thank you for being part of our special day",
    thankYouMessage:
      "Your presence and blessings mean the world to us. We look forward to celebrating with you!",
    hashtag: "#SitiRizki2025",
  },
};
