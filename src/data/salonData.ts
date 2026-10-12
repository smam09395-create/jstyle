export interface Stylist {
  id: string;
  name: string;
  role: string;
  badge: string;
  specialty: string[];
  experience: string;
  image: string;
  gender: 'female' | 'male' | 'all';
  bio: string;
}

export interface SalonService {
  id: string;
  title: string;
  category: 'men' | 'women';
  group: 'hair' | 'skin' | 'beard' | 'nails' | 'treatment' | 'waxing' | 'makeup';
  price: number;
  durationMinutes: number;
  description: string;
  image: string;
  popular?: boolean;
}

export interface VideoReel {
  id: string;
  title: string;
  category: string;
  videoSrc: string;
  posterSrc: string;
  likes: string;
  views: string;
  description: string;
  featuredStylist: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'skin' | 'beard' | 'women';
  image: string;
  clientType: string;
  tags: string[];
}

export interface Appointment {
  id: string;
  fullName: string;
  phone: string;
  serviceId: string;
  serviceTitle: string;
  stylistId: string;
  stylistName: string;
  date: string;
  time: string;
  genderCategory: 'men' | 'women';
  notes?: string;
  status: 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
  totalPrice: number;
}

export const SALON_INFO = {
  name: "J Style Men's Women's Salon",
  shortName: "J. STYLES",
  subBrand: "Hair lounge",
  tagline: "Look Good · Feel Good",
  subheading: "Premium Grooming & Beauty Services for Everyone",
  aboutHeading: "More Than Just a Salon",
  aboutText: "J Style Men's Women's Salon is your premier destination for luxury hair transformations, precision barbering, beard sculpting, and clinical HydraFacials. Led by Master Stylist Ayesha and our Head Master Barber in DHA Phase 9 Lahore.",
  address: "Plot No. C2, First Floor, Commercial Area, A Block, Phase 9, DHA, Lahore.",
  shortAddress: "Plot C2, 1st Floor, A Block, Phase 9 DHA, Lahore",
  phone: "0302 2380871",
  phoneFormatted: "+92 302 2380871",
  whatsappNumber: "923022380871",
  whatsappDisplay: "0302 2380871",
  timing: "Rozana 11:00 AM – 11:00 PM",
  instagramHandle: "@jstylemenswomenssalon",
  instagramUrl: "https://instagram.com/jstylemenswomenssalon",
  facebookName: "J Style Men's Salon",
  facebookUrl: "https://facebook.com/jstylemenssalon",
  tiktokUrl: "https://tiktok.com/@jstylemenswomenssalon",
  specialOffer: "GRAND OFFER: 1 HydraFacial ke sath 2nd HydraFacial Bilkul Free! Ayesha & Master Barber ke sath DHA Phase 9 Lahore."
};

// Accurately representing Ayesha & the Master Barber as seen in the uploaded videos
export const STYLISTS: Stylist[] = [
  {
    id: "ayesha",
    name: "Ayesha",
    role: "Salon Director & Master Skin Aesthetician",
    badge: "Master Skin & Hair Specialist",
    specialty: ["Clinical HydraFacial", "Skin Rejuvenation", "Balayage & Highlights", "Hair Transformation"],
    experience: "9+ Years Experience",
    image: "/src/assets/images/ayesha_real_stylist_1791821231979.jpg",
    gender: "female",
    bio: "Salon Director at J Style Men's Women's Salon. Known for signature HydraFacials, glowing skin treatments, and high-fashion women's haircuts & styling as featured in our Grand Offer video."
  },
  {
    id: "master-tariq",
    name: "Master Barber (Ustad)",
    role: "Head Master Barber & Grooming Specialist",
    badge: "Signature Red & Black Uniform Master",
    specialty: ["Signature Razor Fade", "Beard Sculpting", "Blowdry Volumizing", "Hot Towel Shave"],
    experience: "12+ Years Experience",
    image: "/src/assets/images/master_barber_red_shirt_1791819632444.jpg",
    gender: "male",
    bio: "Head Master Barber with iconic full groomed beard, featured giving precision fades, texturizing blowouts, and thumbs-up client transformations in our salon videos."
  },
  {
    id: "hamza-malik",
    name: "Hamza Malik",
    role: "Senior Men's Stylist",
    badge: "Hair & Beard Artisan",
    specialty: ["Modern Scissor Cuts", "Charcoal Detoxing", "Keratin Smoothing"],
    experience: "6+ Years Experience",
    image: "/src/assets/images/video1_haircut_master_1791821248078.jpg",
    gender: "male",
    bio: "Senior Stylist specializing in low taper fades, executive cuts, and relaxing hot towel therapies."
  },
  {
    id: "sana-sheikh",
    name: "Sana Sheikh",
    role: "Senior Colorist & Nail Artist",
    badge: "Hair & Nail Specialist",
    specialty: ["Highlights & Ombre", "Deluxe Gel Manicures", "Organic Scalp Spa"],
    experience: "7+ Years Experience",
    image: "/src/assets/images/ayesha_real_stylist_1791821231979.jpg",
    gender: "female",
    bio: "Expert colorist trained under Ayesha for luxury blonde balayage, bridal styling, and relaxing manicures."
  }
];

// ONLY the 2 real user videos as explicitly requested:
export const FEATURED_VIDEOS: VideoReel[] = [
  {
    id: "video-1",
    title: "Master Barber Transformation & Blowdry Styling",
    category: "Men's Luxury Grooming",
    videoSrc: "/videos/video1_master_barber_haircut.mp4",
    posterSrc: "/src/assets/images/video1_haircut_master_1791821248078.jpg",
    likes: "28.5K",
    views: "112K",
    description: "Watch our Master Barber in action styling a client with precision scissors, high-volume blow-drying, and a happy thumbs up transformation!",
    featuredStylist: "Master Barber (Ustad)",
    badge: "Client Transformation Video"
  },
  {
    id: "video-2",
    title: "J Style Grand Offer: 1 HydraFacial + 1 Free!",
    category: "Independence Day & Salon Special",
    videoSrc: "/videos/video2_grand_offer_ayesha.mp4",
    posterSrc: "/src/assets/images/video2_grand_offer_1791821264122.jpg",
    likes: "42.1K",
    views: "189K",
    description: "Ali Mughal visits J Style Salon in DHA Phase 9 Lahore with Director Ayesha (in yellow top & sunglasses) and our Master Barber to announce the 1+1 Free HydraFacial offer!",
    featuredStylist: "Ayesha & Master Barber",
    badge: "Grand Offer Video"
  }
];

export const CORE_SERVICE_CATEGORIES = [
  { id: "hair-cuts", title: "Hair Cuts & Styling", subtitle: "Men & Women", icon: "Scissors" },
  { id: "hair-color", title: "Hair Coloring", subtitle: "Highlights & Balayage", icon: "Sparkles" },
  { id: "facials", title: "Facials & Skin Care", subtitle: "HydraFacial Glow", icon: "Smile" },
  { id: "makeup", title: "Makeup Services", subtitle: "Bridal & Party", icon: "Brush" },
  { id: "beard", title: "Beard Grooming", subtitle: "Sharp & Clean Look", icon: "Shield" },
  { id: "nails", title: "Nail Services", subtitle: "Manicure & Pedicure", icon: "Hand" },
  { id: "treatments", title: "Hair Treatments", subtitle: "Keratin & Protein", icon: "Flame" },
  { id: "waxing", title: "Waxing", subtitle: "For a Confident You", icon: "UserCheck" }
];

export const SERVICES_LIST: SalonService[] = [
  // Men's Services
  {
    id: "m-haircut",
    title: "Hair Cut & Style",
    category: "men",
    group: "hair",
    price: 1200,
    durationMinutes: 30,
    description: "Precision haircut by master barber, wash, hot towel, and blow-dry styling.",
    image: "/src/assets/images/video1_haircut_master_1791821248078.jpg",
    popular: true
  },
  {
    id: "m-beard",
    title: "Beard Grooming",
    category: "men",
    group: "beard",
    price: 800,
    durationMinutes: 25,
    description: "Beard trimming, sharp razor edging, conditioning oil massage, and hot towel finish.",
    image: "/src/assets/images/master_barber_red_shirt_1791819632444.jpg",
    popular: true
  },
  {
    id: "m-color",
    title: "Hair Color",
    category: "men",
    group: "hair",
    price: 2500,
    durationMinutes: 45,
    description: "Ammonia-free organic color application, grey coverage, shampoo, and blowdry.",
    image: "/src/assets/images/video1_haircut_master_1791821248078.jpg"
  },
  {
    id: "m-facial",
    title: "Facial & Skin Cleanup",
    category: "men",
    group: "skin",
    price: 2000,
    durationMinutes: 45,
    description: "Deep cleanse, exfoliating scrub, blackhead extraction, and soothing mask.",
    image: "/src/assets/images/video2_grand_offer_1791821264122.jpg",
    popular: true
  },
  {
    id: "m-hydrafacial",
    title: "Men's HydraFacial Elite",
    category: "men",
    group: "skin",
    price: 4000,
    durationMinutes: 60,
    description: "Ultrasonic deep pore extraction, hydration serum infusion, and LED phototherapy.",
    image: "/src/assets/images/video2_grand_offer_1791821264122.jpg"
  },
  {
    id: "m-waxing",
    title: "Face Waxing & Threading",
    category: "men",
    group: "waxing",
    price: 1000,
    durationMinutes: 20,
    description: "Cheek, ear, and nose hair grooming using gentle gold strip wax.",
    image: "/src/assets/images/master_barber_red_shirt_1791819632444.jpg"
  },

  // Women's Services
  {
    id: "w-haircut",
    title: "Layered Hair Cut & Blowdry",
    category: "women",
    group: "hair",
    price: 2500,
    durationMinutes: 45,
    description: "Custom consultation, wash, precision layered cut, split-end removal, and blowout.",
    image: "/src/assets/images/ayesha_real_stylist_1791821231979.jpg",
    popular: true
  },
  {
    id: "w-hydrafacial",
    title: "Signature HydraFacial (1+1 Free)",
    category: "women",
    group: "skin",
    price: 4500,
    durationMinutes: 60,
    description: "7-step clinical HydraFacial with LED phototherapy & cold hammer tightening. Buy 1 get 1 Free!",
    image: "/src/assets/images/video2_grand_offer_1791821264122.jpg",
    popular: true
  },
  {
    id: "w-color",
    title: "Balayage & Hair Highlights",
    category: "women",
    group: "hair",
    price: 7500,
    durationMinutes: 120,
    description: "Hand-painted dimensional balayage or foil babylights with Olaplex bond repair.",
    image: "/src/assets/images/ayesha_real_stylist_1791821231979.jpg"
  },
  {
    id: "w-manicure",
    title: "Luxury Manicure & Pedicure",
    category: "women",
    group: "nails",
    price: 3000,
    durationMinutes: 50,
    description: "Sea salt foot bath, cuticle care, hand scrub, massage, and glossy gel polish.",
    image: "/src/assets/images/ayesha_real_stylist_1791821231979.jpg"
  },
  {
    id: "w-keratin",
    title: "Keratin Protein Smoothing",
    category: "women",
    group: "treatment",
    price: 8000,
    durationMinutes: 120,
    description: "Formaldehyde-free intense keratin therapy for 4-6 months of frizz-free glass hair.",
    image: "/src/assets/images/jstyle_salon_hero_1791819644045.jpg"
  },
  {
    id: "w-waxing",
    title: "Full Body / Face Rica Waxing",
    category: "women",
    group: "waxing",
    price: 2500,
    durationMinutes: 40,
    description: "Italian Rica wax for smooth, pain-reduced hair removal and moisturized skin.",
    image: "/src/assets/images/ayesha_real_stylist_1791821231979.jpg"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Master Blowdry & Scissor Transformation",
    category: "hair",
    image: "/src/assets/images/video1_haircut_master_1791821248078.jpg",
    clientType: "Men's Master Grooming",
    tags: ["Video Feature", "Master Barber", "Fade & Volume"]
  },
  {
    id: "g2",
    title: "Grand Offer HydraFacial Glow",
    category: "skin",
    image: "/src/assets/images/video2_grand_offer_1791821264122.jpg",
    clientType: "Aesthetic Skin Spa",
    tags: ["1+1 Offer", "Ayesha", "HydraFacial"]
  },
  {
    id: "g3",
    title: "Master Barber Signature Beard Styling",
    category: "beard",
    image: "/src/assets/images/master_barber_red_shirt_1791819632444.jpg",
    clientType: "Executive Men",
    tags: ["Red Uniform", "Beard Sculpting", "Razor Sharp"]
  },
  {
    id: "g4",
    title: "Director Ayesha Hair & Skin Lounge",
    category: "women",
    image: "/src/assets/images/ayesha_real_stylist_1791821231979.jpg",
    clientType: "Women's Styling",
    tags: ["Ayesha", "Balayage", "Glow Therapy"]
  },
  {
    id: "g5",
    title: "Luxury Lounge & VIP Stations",
    category: "hair",
    image: "/src/assets/images/jstyle_salon_hero_1791819644045.jpg",
    clientType: "Salon Ambience",
    tags: ["Phase 9 DHA", "VIP Lounge", "Hygienic"]
  }
];

export const TIME_SLOTS = [
  "11:00 AM", "11:45 AM", "12:30 PM", "01:15 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"
];
