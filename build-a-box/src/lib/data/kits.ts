import type { BoxSize } from "./boxes";

export type KitCategory = "Starter" | "Statement" | "Decor";
export type KitFilter = "All" | "Starter" | "Statement" | "Decor";

export type BoxRequirement = { size: BoxSize; quantity: number };

export type KitRequirementOption = {
  /** Human-readable alternative, e.g. "3 × Medium" or "2 × Large" */
  label: string;
  boxes: BoxRequirement[];
};

export type KitProduct = {
  id: string;
  slug: string;
  name: string;
  category: KitCategory;
  price: number;
  requirements: KitRequirementOption[];
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
    requirements: [
      { label: "1 × Large", boxes: [{ size: "Large", quantity: 1 }] },
      { label: "2 × Medium", boxes: [{ size: "Medium", quantity: 2 }] },
    ],
    shortDescription: "A quiet surface for a book and a glass of water.",
    imageCaption: "[Kit: Cardboard side table beside linen sofa]",
  },
  {
    id: "kit-floor-lamp",
    slug: "floor-lamp",
    name: "Floor Lamp Kit",
    category: "Starter",
    price: 46,
    requirements: [
      { label: "2 × Large", boxes: [{ size: "Large", quantity: 2 }] },
      { label: "3 × Medium", boxes: [{ size: "Medium", quantity: 3 }] },
    ],
    shortDescription: "Light, softened. A paper-like glow from reused board.",
    imageCaption: "[Kit: Cardboard floor lamp in corner of calm room]",
  },
  {
    id: "kit-bookends",
    slug: "bookend-set",
    name: "Bookend Set",
    category: "Starter",
    price: 22,
    requirements: [{ label: "1 × Small", boxes: [{ size: "Small", quantity: 1 }] }],
    shortDescription: "Two forms, one material. Holds weight with ease.",
    imageCaption: "[Kit: Minimal cardboard bookends on shelf]",
  },
  {
    id: "kit-planter-stand",
    slug: "planter-stand",
    name: "Planter Stand",
    category: "Starter",
    price: 28,
    requirements: [
      { label: "1 × Medium", boxes: [{ size: "Medium", quantity: 1 }] },
      { label: "1 × Small", boxes: [{ size: "Small", quantity: 1 }] },
    ],
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
    requirements: [
      { label: "2 × Extra Large", boxes: [{ size: "Extra Large", quantity: 2 }] },
      { label: "3 × Large", boxes: [{ size: "Large", quantity: 3 }] },
    ],
    shortDescription: "Surprisingly structural. Designed to be lived with.",
    imageCaption: "[Hero: Cardboard lounge chair in sunlit room]",
  },
  {
    id: "kit-bookshelf",
    slug: "bookshelf",
    name: "Bookshelf Kit",
    category: "Statement",
    price: 144,
    requirements: [
      { label: "4 × Large", boxes: [{ size: "Large", quantity: 4 }] },
      { label: "6 × Medium", boxes: [{ size: "Medium", quantity: 6 }] },
      { label: "2 × Extra Large", boxes: [{ size: "Extra Large", quantity: 2 }] },
    ],
    shortDescription: "A grid of calm. Slots, folds, and quiet strength.",
    imageCaption: "[Kit: Cardboard bookshelf with ceramics and books]",
  },
  {
    id: "kit-bench",
    slug: "bench",
    name: "Bench Kit",
    category: "Statement",
    price: 98,
    requirements: [
      { label: "2 × Large", boxes: [{ size: "Large", quantity: 2 }] },
      { label: "3 × Medium", boxes: [{ size: "Medium", quantity: 3 }] },
    ],
    shortDescription: "For entryways, the end of beds, and pauses.",
    imageCaption: "[Kit: Cardboard bench with folded blanket]",
  },
  {
    id: "kit-desk",
    slug: "desk",
    name: "Desk Kit",
    category: "Statement",
    price: 158,
    requirements: [
      { label: "3 × Extra Large", boxes: [{ size: "Extra Large", quantity: 3 }] },
      { label: "4 × Large", boxes: [{ size: "Large", quantity: 4 }] },
    ],
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
    requirements: [
      { label: "1 × Medium", boxes: [{ size: "Medium", quantity: 1 }] },
      { label: "1 × Large", boxes: [{ size: "Large", quantity: 1 }] },
    ],
    shortDescription: "Layered petals of board. Shadow, warmth, presence.",
    imageCaption: "[Kit: Cardboard pendant chandelier over dining table]",
  },
  {
    id: "kit-wall-sculpture",
    slug: "wall-sculpture",
    name: "Wall Sculpture",
    category: "Decor",
    price: 58,
    requirements: [
      { label: "1 × Small", boxes: [{ size: "Small", quantity: 1 }] },
      { label: "2 × Small", boxes: [{ size: "Small", quantity: 2 }] },
      { label: "1 × Medium", boxes: [{ size: "Medium", quantity: 1 }] },
    ],
    shortDescription: "A relief of repeating forms—soft, tactile geometry.",
    imageCaption: "[Kit: Cardboard wall sculpture in hallway]",
  },
  {
    id: "kit-divider",
    slug: "room-divider",
    name: "Room Divider",
    category: "Decor",
    price: 110,
    requirements: [
      { label: "2 × Extra Large", boxes: [{ size: "Extra Large", quantity: 2 }] },
      { label: "3 × Large", boxes: [{ size: "Large", quantity: 3 }] },
    ],
    shortDescription: "A movable boundary. Light passes through; life continues.",
    imageCaption: "[Kit: Cardboard room divider in studio apartment]",
  },
];

export const featuredKitSlugs = ["lounge-chair", "side-table", "bookshelf", "pendant-chandelier"] as const;

export function getKitBySlug(slug: string) {
  return kits.find((k) => k.slug === slug);
}

export function getKitSizes(kit: KitProduct): BoxSize[] {
  return Array.from(
    new Set(kit.requirements.flatMap((opt) => opt.boxes.map((b) => b.size))),
  );
}

export function getKitRequirementsSummary(kit: KitProduct) {
  return kit.requirements.map((o) => o.label).join(" or ");
}

export function isSingleBoxKitForSize(kit: KitProduct, size: BoxSize) {
  return kit.requirements.some(
    (opt) =>
      opt.boxes.length === 1 &&
      opt.boxes[0]?.size === size &&
      opt.boxes[0]?.quantity === 1,
  );
}

export function getSingleBoxKitsForSize(size: BoxSize) {
  return kits.filter((k) => isSingleBoxKitForSize(k, size));
}

