export type BoxSize = "Small" | "Medium" | "Large" | "Extra Large";

export type BoxProduct = {
  id: string;
  name: string;
  size: BoxSize;
  dimensions: string;
  price: number;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Tailwind-like aspect ratio value, e.g. "1024/575" */
  imageAspect?: string;
};

export const boxProducts: BoxProduct[] = [
  {
    id: "box-small",
    name: "Small Moving Box",
    size: "Small",
    dimensions: '12" × 12" × 12"',
    price: 4.0,
    description:
      "For books, pantry jars, and the small pieces that add up. Crisp corners. Clean stack.",
    imageSrc: "/box-small.png",
    imageAlt: "Small moving box with cut and fold guidelines",
    imageAspect: "1024/575",
  },
  {
    id: "box-medium",
    name: "Medium Moving Box",
    size: "Medium",
    dimensions: '18" × 18" × 16"',
    price: 7.0,
    description:
      "A steady default for linens and everyday objects. Double-wall corrugation where it matters.",
    imageSrc: "/box-medium.png",
    imageAlt: "Medium moving box with printed instructions",
    imageAspect: "1024/575",
  },
  {
    id: "box-large",
    name: "Large Moving Box",
    size: "Large",
    dimensions: '24" × 18" × 18"',
    price: 10.0,
    description:
      "For awkward shapes and gentle bulk—lamps, appliances, the things you carry with two hands.",
    imageSrc: "/box-large.png",
    imageAlt: "Large moving box with cut and fold lines",
    imageAspect: "1024/575",
  },
  {
    id: "box-xl",
    name: "Extra Large Moving Box",
    size: "Extra Large",
    dimensions: '24" × 24" × 24"',
    price: 13.0,
    description:
      "Big panels for statement builds and wide surfaces. The one you keep after the move.",
    imageSrc: "/box-xl.png",
    imageAlt: "Extra large moving box with printed build diagram",
    imageAspect: "1024/575",
  },
];

export type BoxBundle = {
  id: string;
  name: string;
  price: number;
  summary: string;
  contents: { size: BoxSize; quantity: number }[];
};

export const boxBundles: BoxBundle[] = [
  {
    id: "bundle-studio",
    name: "Studio Bundle",
    price: 74,
    summary: "A calm starting point for a small space.",
    contents: [
      { size: "Small", quantity: 8 },
      { size: "Medium", quantity: 8 },
      { size: "Large", quantity: 4 },
      { size: "Extra Large", quantity: 1 },
    ],
  },
  {
    id: "bundle-1br",
    name: "1‑Bedroom Bundle",
    price: 124,
    summary: "Balanced boxes for living, kitchen, and closet.",
    contents: [
      { size: "Small", quantity: 10 },
      { size: "Medium", quantity: 12 },
      { size: "Large", quantity: 8 },
      { size: "Extra Large", quantity: 2 },
    ],
  },
  {
    id: "bundle-2br",
    name: "2‑Bedroom Bundle",
    price: 176,
    summary: "For the move that includes a few heavy chapters.",
    contents: [
      { size: "Small", quantity: 14 },
      { size: "Medium", quantity: 16 },
      { size: "Large", quantity: 12 },
      { size: "Extra Large", quantity: 3 },
    ],
  },
  {
    id: "bundle-whole-home",
    name: "Whole Home Bundle",
    price: 248,
    summary: "A complete set—packed with intention.",
    contents: [
      { size: "Small", quantity: 20 },
      { size: "Medium", quantity: 22 },
      { size: "Large", quantity: 16 },
      { size: "Extra Large", quantity: 4 },
    ],
  },
];

