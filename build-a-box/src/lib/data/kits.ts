export type KitCategory = "Starter" | "Statement" | "Decor";
export type KitFilter = "All" | "Starter" | "Statement" | "Decor";

export type KitProduct = {
  id: string;
  slug: string;
  name: string;
  category: KitCategory;
  price: number;
  boxCount: string;
  shortDescription: string;
  imageCaption: string;
};

export const kits: KitProduct[] = [
  // Starter kits (1–4 boxes)
  {
    id: "kit-side-table",
    slug: "side-table",
    name: "Side Table Kit",
    category: "Starter",
    price: 38,
    boxCount: "2–3 boxes",
    shortDescription: "A quiet surface for a book and a glass of water.",
    imageCaption: "[Kit: Cardboard side table beside linen sofa]",
  },
  {
    id: "kit-floor-lamp",
    slug: "floor-lamp",
    name: "Floor Lamp Kit",
    category: "Starter",
    price: 46,
    boxCount: "3–4 boxes",
    shortDescription: "Light, softened. A paper-like glow from reused board.",
    imageCaption: "[Kit: Cardboard floor lamp in corner of calm room]",
  },
  {
    id: "kit-bookends",
    slug: "bookend-set",
    name: "Bookend Set",
    category: "Starter",
    price: 22,
    boxCount: "1–2 boxes",
    shortDescription: "Two forms, one material. Holds weight with ease.",
    imageCaption: "[Kit: Minimal cardboard bookends on shelf]",
  },
  {
    id: "kit-planter-stand",
    slug: "planter-stand",
    name: "Planter Stand",
    category: "Starter",
    price: 28,
    boxCount: "1–2 boxes",
    shortDescription: "A small lift for green things and morning light.",
    imageCaption: "[Kit: Cardboard planter stand near window]",
  },

  // Statement kits (5–12 boxes)
  {
    id: "kit-lounge-chair",
    slug: "lounge-chair",
    name: "Lounge Chair Kit",
    category: "Statement",
    price: 128,
    boxCount: "8–10 boxes",
    shortDescription: "Surprisingly structural. Designed to be lived with.",
    imageCaption: "[Hero: Cardboard lounge chair in sunlit room]",
  },
  {
    id: "kit-bookshelf",
    slug: "bookshelf",
    name: "Bookshelf Kit",
    category: "Statement",
    price: 144,
    boxCount: "10–12 boxes",
    shortDescription: "A grid of calm. Slots, folds, and quiet strength.",
    imageCaption: "[Kit: Cardboard bookshelf with ceramics and books]",
  },
  {
    id: "kit-bench",
    slug: "bench",
    name: "Bench Kit",
    category: "Statement",
    price: 98,
    boxCount: "6–8 boxes",
    shortDescription: "For entryways, the end of beds, and pauses.",
    imageCaption: "[Kit: Cardboard bench with folded blanket]",
  },
  {
    id: "kit-desk",
    slug: "desk",
    name: "Desk Kit",
    category: "Statement",
    price: 158,
    boxCount: "10–12 boxes",
    shortDescription: "A work surface that begins with what you already have.",
    imageCaption: "[Kit: Cardboard desk with notebook and lamp]",
  },

  // Decor kits
  {
    id: "kit-pendant",
    slug: "pendant-chandelier",
    name: "Pendant Chandelier",
    category: "Decor",
    price: 64,
    boxCount: "3–4 boxes",
    shortDescription: "Layered petals of board. Shadow, warmth, presence.",
    imageCaption: "[Kit: Cardboard pendant chandelier over dining table]",
  },
  {
    id: "kit-wall-sculpture",
    slug: "wall-sculpture",
    name: "Wall Sculpture",
    category: "Decor",
    price: 58,
    boxCount: "2–3 boxes",
    shortDescription: "A relief of repeating forms—soft, tactile geometry.",
    imageCaption: "[Kit: Cardboard wall sculpture in hallway]",
  },
  {
    id: "kit-divider",
    slug: "room-divider",
    name: "Room Divider",
    category: "Decor",
    price: 110,
    boxCount: "7–9 boxes",
    shortDescription: "A movable boundary. Light passes through; life continues.",
    imageCaption: "[Kit: Cardboard room divider in studio apartment]",
  },
];

export const featuredKitSlugs = ["lounge-chair", "side-table", "bookshelf", "pendant-chandelier"] as const;

export function getKitBySlug(slug: string) {
  return kits.find((k) => k.slug === slug);
}

