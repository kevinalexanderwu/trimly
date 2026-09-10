export type Service = {
  name: string;
  price: number;
  duration: string;
  popular: boolean;
};

export type Salon = {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  distance: string;
  price: number;
  tag: string;
  address: string;
  hours: string;
  open: boolean;
  image: string;
  gallery: string[];
  services: Service[];
  about: string;
};

export type Barber = {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  exp: string;
  salonId: number;
  salon: string;
  available: boolean;
  image: string;
  tags: string[];
  bio: string;
};

export type Booking = {
  id: string;
  salonId: number;
  salon: string;
  barber: string;
  service: string;
  date: string;
  time: string;
  price: number;
  status: "upcoming" | "completed" | "cancelled";
  image: string;
  rated?: boolean;
};

const IMG = {
  s1: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=500&fit=crop&auto=format",
  s2: "https://images.unsplash.com/photo-1536520002442-39764a41e987?w=800&h=500&fit=crop&auto=format",
  s3: "https://images.unsplash.com/photo-1611313151697-d626e818dddf?w=800&h=500&fit=crop&auto=format",
  s4: "https://images.unsplash.com/photo-1576168056582-0a851a87ab8e?w=800&h=500&fit=crop&auto=format",
  s5: "https://images.unsplash.com/photo-1675599193990-33d71150902b?w=800&h=500&fit=crop&auto=format",
  s6: "https://images.unsplash.com/photo-1592647420148-bfcc177e2117?w=800&h=500&fit=crop&auto=format",

  b1: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop&auto=format",
  b2: "https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?w=400&h=400&fit=crop&auto=format",
  b3: "https://images.unsplash.com/photo-1553521041-d168abd31de3?w=400&h=400&fit=crop&auto=format",
  b4: "https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?w=400&h=400&fit=crop&auto=format",
};

export const SALONS: Salon[] = [
  {
    id: 1,
    name: "Gentlemen's Quarters",
    rating: 4.9,
    reviews: 312,
    distance: "0.3 km",
    price: 85,
    tag: "Trending",
    address: "14 Harbor Blvd, Midtown",
    hours: "08:00 – 20:00",
    open: true,
    image: IMG.s1,
    gallery: [IMG.s2, IMG.s3, IMG.s4, IMG.s5],
    services: [
      { name: "Classic Cut", price: 85, duration: "45 min", popular: true },
      { name: "Skin Fade", price: 95, duration: "60 min", popular: true },
      { name: "Beard Trim", price: 55, duration: "30 min", popular: false },
      {
        name: "Hot Towel Shave",
        price: 75,
        duration: "45 min",
        popular: false,
      },
      {
        name: "Hair & Beard Combo",
        price: 135,
        duration: "90 min",
        popular: false,
      },
    ],
    about:
      "An elevated grooming experience in the heart of Midtown. Our master barbers blend traditional techniques with modern precision.",
  },
  {
    id: 2,
    name: "Studio Noir",
    rating: 4.7,
    reviews: 188,
    distance: "0.8 km",
    price: 70,
    tag: "Popular",
    address: "7 Elm Street, Downtown",
    hours: "09:00 – 21:00",
    open: true,
    image: IMG.s2,
    gallery: [IMG.s1, IMG.s5, IMG.s6, IMG.s3],
    services: [
      { name: "Classic Cut", price: 70, duration: "45 min", popular: true },
      { name: "Design Cut", price: 90, duration: "60 min", popular: false },
      { name: "Beard Sculpt", price: 60, duration: "40 min", popular: true },
      { name: "Kids Cut", price: 45, duration: "30 min", popular: false },
    ],
    about:
      "Where artistry meets precision. Studio Noir is a curated space for those who take grooming seriously.",
  },
  {
    id: 3,
    name: "Blade & Brush",
    rating: 4.8,
    reviews: 241,
    distance: "1.2 km",
    price: 60,
    tag: "Top Rated",
    address: "22 West Park Ave",
    hours: "07:30 – 19:30",
    open: false,
    image: IMG.s3,
    gallery: [IMG.s4, IMG.s6, IMG.s1, IMG.s2],
    services: [
      { name: "Classic Cut", price: 60, duration: "40 min", popular: true },
      { name: "Buzz Cut", price: 45, duration: "25 min", popular: false },
      { name: "Fade & Shape", price: 80, duration: "55 min", popular: true },
    ],
    about:
      "Old-school craft, new-school precision. Blade & Brush has been setting standards in the West Park community since 2015.",
  },
  {
    id: 4,
    name: "The Parlor Room",
    rating: 4.6,
    reviews: 99,
    distance: "1.8 km",
    price: 55,
    tag: "New",
    address: "88 Crown Street, SoHo",
    hours: "10:00 – 20:00",
    open: true,
    image: IMG.s4,
    gallery: [IMG.s5, IMG.s3, IMG.s2, IMG.s6],
    services: [
      { name: "Express Cut", price: 55, duration: "30 min", popular: true },
      { name: "Full Groom", price: 110, duration: "75 min", popular: false },
    ],
    about:
      "A laid-back parlor with sharp results. Walk-ins welcome, appointments preferred.",
  },
];

export const BARBERS: Barber[] = [
  {
    id: 1,
    name: "Marcus Reid",
    specialty: "Fades & Tapers",
    rating: 4.9,
    reviews: 204,
    exp: "8 yrs",
    salonId: 1,
    salon: "Gentlemen's Quarters",
    available: true,
    image: IMG.b1,
    tags: ["Skin Fade", "Taper", "Design Cut", "Lineup"],
    bio: "Marcus is a certified master barber specializing in high-skin fades, tapers, and architectural hairlines. Eight years in, and his chair is always the first to fill up.",
  },
  {
    id: 2,
    name: "Jordan Voss",
    specialty: "Beard Design",
    rating: 4.8,
    reviews: 176,
    exp: "6 yrs",
    salonId: 2,
    salon: "Studio Noir",
    available: true,
    image: IMG.b2,
    tags: ["Beard Sculpt", "Razor Edge", "Classic Cut"],
    bio: "Jordan brings a sculptor's eye to beard design and precision cuts. Known for impossibly clean lines and an artist's attention to face shape.",
  },
  {
    id: 3,
    name: "Elias Stone",
    specialty: "Classic & Hot Shave",
    rating: 4.7,
    reviews: 139,
    exp: "12 yrs",
    salonId: 3,
    salon: "Blade & Brush",
    available: false,
    image: IMG.b3,
    tags: ["Hot Shave", "Classic Cut", "Pompadour"],
    bio: "A traditionalist with 12 years perfecting the straight-razor shave and timeless cuts. Elias brings old-world craft to every appointment.",
  },
  {
    id: 4,
    name: "Kai Tanaka",
    specialty: "Texture & Color",
    rating: 4.9,
    reviews: 88,
    exp: "5 yrs",
    salonId: 4,
    salon: "The Parlor Room",
    available: true,
    image: IMG.b4,
    tags: ["Color", "Texture", "Modern Cuts"],
    bio: "Kai trained in Tokyo and Seoul before bringing a cutting-edge approach to texture, color, and contemporary men's grooming to New York.",
  },
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: "TRM-4821",
    salonId: 1,
    salon: "Gentlemen's Quarters",
    barber: "Marcus Reid",
    service: "Skin Fade",
    date: "Sat, Jul 19",
    time: "10:30 AM",
    price: 95,
    status: "upcoming",
    image: IMG.s1,
  },
  {
    id: "TRM-4720",
    salonId: 2,
    salon: "Studio Noir",
    barber: "Jordan Voss",
    service: "Classic Cut",
    date: "Mon, Jun 30",
    time: "2:00 PM",
    price: 70,
    status: "completed",
    image: IMG.s2,
    rated: false,
  },
  {
    id: "TRM-4601",
    salonId: 3,
    salon: "Blade & Brush",
    barber: "Elias Stone",
    service: "Beard Sculpt",
    date: "Fri, Jun 13",
    time: "11:00 AM",
    price: 60,
    status: "completed",
    image: IMG.s3,
    rated: true,
  },
  {
    id: "TRM-4432",
    salonId: 1,
    salon: "Gentlemen's Quarters",
    barber: "Marcus Reid",
    service: "Classic Cut",
    date: "Tue, May 27",
    time: "9:00 AM",
    price: 85,
    status: "completed",
    image: IMG.s1,
    rated: true,
  },
];

// untuk kategori yang ada di home screen, misal Haircut, Hair Color, Styling, Treatment, Beard, Kids
export const CATEGORIES = [
  { icon: "content-cut", label: "Haircut", color: "#EFF6FF", fg: "#2563EB" },
  {
    icon: "palette-outline",
    label: "Hair Color",
    color: "#FFFBEB",
    fg: "#D97706",
  },
  {
    icon: "hair-dryer",
    label: "Styling",
    color: "#F5F3FF",
    fg: "#7C3AED",
  },
  {
    icon: "spa-outline",
    label: "Treatment",
    color: "#ECFDF5",
    fg: "#059669",
  },
  { icon: "face-man-outline", label: "Beard", color: "#FFF1F2", fg: "#E11D48" },
  { icon: "human-child", label: "Kids", color: "#F0FDF4", fg: "#16A34A" },
] as const;

export const TIMES = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
];
export const TAKEN_TIMES = new Set(["09:30", "10:30", "13:30", "15:30"]);

export const CAL_DAYS = [
  { d: 14, w: "Mon" },
  { d: 15, w: "Tue" },
  { d: 16, w: "Wed" },
  { d: 17, w: "Thu" },
  { d: 18, w: "Fri" },
  { d: 19, w: "Sat" },
  { d: 20, w: "Sun" },
  { d: 21, w: "Mon" },
  { d: 22, w: "Tue" },
  { d: 23, w: "Wed" },
  { d: 24, w: "Thu" },
];
