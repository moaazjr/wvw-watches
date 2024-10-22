import { NextResponse } from "next/server";

// Watches data
export const watches = [
  {
    id: 1,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/global_mobile_1x/public/2024-04/big-bang-integral-time-only-king-gold-38-mm-soldier.png?itok=g_JB0Ben",
    title: "Carli Mini Three-Hand Blush Leather Watch",
    brand: "ROLEX",
    price: 245,
    waterResistance: "yes",
    description:
      "Elegant watch with blush leather strap, perfect for formal occasions.",
  },
  {
    id: 2,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/2024-09/spirit-of-big-bang-tourbillon-sorai-42-mm-soldier_0.png?itok=mCJXQqve",
    title: "Amarosa 24 Mm Stainless Steel Case",
    brand: "Movado",
    price: 957,
    waterResistance: "no",
    description:
      "Sophisticated stainless steel case, luxurious design for timeless fashion.",
  },
  {
    id: 3,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/classic-fusion-aerofusion-moonphase-black-magic-42-mm-547.CX.0170.LR-soldier-shot.png?itok=cWaC78Mr",
    title: "Ultra Minimalist Unisex Wristwatch",
    brand: "Fossil",
    price: 667,
    waterResistance: "yes",
    description:
      "Sleek unisex design with modern minimalist appeal for any occasion.",
  },
  {
    id: 4,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/global_mobile_1x/public/2024-04/big-bang-integral-time-only-king-gold-38-mm-soldier.png?itok=g_JB0Ben",
    title: "Ultra Minimalist Unisex Wristwatch",
    brand: "Fossil",
    price: 667,
    waterResistance: "yes",
    description:
      "Classic style and water resistance make this watch truly versatile.",
  },
  {
    id: 5,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/classic-fusion-aerofusion-moonphase-black-magic-42-mm-547.CX.0170.LR-soldier-shot.png?itok=cWaC78Mr",
    title: "Luxe Modern Watch",
    brand: "Fossil",
    price: 685,
    waterResistance: "yes",
    description:
      "An ultra-modern, durable watch with black magic aesthetic and elegance.",
  },
  {
    id: 6,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/global_mobile_1x/public/2024-04/big-bang-integral-time-only-king-gold-38-mm-soldier.png?itok=g_JB0Ben",
    title: "King Gold Elegant Wristwatch",
    brand: "ROLEX",
    price: 1550,
    waterResistance: "yes",
    description:
      "Gold watch with sleek, timeless design, perfect for formal attire.",
  },
  {
    id: 7,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/classic-fusion-aerofusion-moonphase-black-magic-42-mm-547.CX.0170.LR-soldier-shot.png?itok=cWaC78Mr",
    title: "Classic Aerofusion Black Watch",
    brand: "Fossil",
    price: 720,
    waterResistance: "no",
    description:
      "Black fusion watch with premium build and a minimalist finish.",
  },
  {
    id: 8,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/global_mobile_1x/public/2024-04/big-bang-integral-time-only-king-gold-38-mm-soldier.png?itok=g_JB0Ben",
    title: "Big Bang King Gold Watch",
    brand: "ROLEX",
    price: 1480,
    waterResistance: "yes",
    description:
      "Premium King Gold with cutting-edge design, a luxurious statement piece.",
  },
  {
    id: 9,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/2024-09/spirit-of-big-bang-tourbillon-sorai-42-mm-soldier_0.png?itok=mCJXQqve",
    title: "Tourbillon Sorai 42mm",
    brand: "Movado",
    price: 1050,
    waterResistance: "no",
    description:
      "Precision engineering meets contemporary design in this high-end luxury watch.",
  },
  {
    id: 10,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/global_mobile_1x/public/2024-04/big-bang-integral-time-only-king-gold-38-mm-soldier.png?itok=g_JB0Ben",
    title: "Big Bang Gold 38mm",
    brand: "ROLEX",
    price: 2000,
    waterResistance: "yes",
    description:
      "Iconic gold design combined with modern craftsmanship, water-resistant technology.",
  },
  {
    id: 11,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/classic-fusion-aerofusion-moonphase-black-magic-42-mm-547.CX.0170.LR-soldier-shot.png?itok=cWaC78Mr",
    title: "Classic Moonphase Black",
    brand: "Fossil",
    price: 660,
    waterResistance: "yes",
    description:
      "Elegant moonphase design with sleek black accents for stylish wear.",
  },
  {
    id: 12,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/2024-09/spirit-of-big-bang-tourbillon-sorai-42-mm-soldier_0.png?itok=mCJXQqve",
    title: "Big Bang Sorai Tourbillon",
    brand: "Movado",
    price: 1450,
    waterResistance: "no",
    description:
      "Tourbillon movement with bold styling and timeless precision craftsmanship.",
  },
  {
    id: 13,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/global_mobile_1x/public/2024-04/big-bang-integral-time-only-king-gold-38-mm-soldier.png?itok=g_JB0Ben",
    title: "Gold King 38mm",
    brand: "ROLEX",
    price: 1800,
    waterResistance: "yes",
    description:
      "Royal-inspired design with gold finish and outstanding water resistance.",
  },
  {
    id: 14,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/classic-fusion-aerofusion-moonphase-black-magic-42-mm-547.CX.0170.LR-soldier-shot.png?itok=cWaC78Mr",
    title: "Black Aerofusion Watch",
    brand: "Fossil",
    price: 675,
    waterResistance: "yes",
    description:
      "Aerofusion elegance with moonphase functionality and modern black design.",
  },
  {
    id: 15,
    imageURL:
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/classic-fusion-aerofusion-moonphase-black-magic-42-mm-547.CX.0170.LR-soldier-shot.png?itok=cWaC78Mr",
    title: "Minimalist Black Aerofusion",
    brand: "Fossil",
    price: 670,
    waterResistance: "yes",
    description:
      "Black magic aerofusion style in a sleek, minimalist design for all.",
  },
];

// Filter function// Function to filter watches based on brand, water resistance, and price range
function filterWatches(
  brands: string[],
  waterResistance: string | undefined,
  minPrice: number,
  maxPrice: number,
  searchQuery: string | null
) {
  return watches.filter((watch) => {
    const matchesBrand = brands.length
      ? brands.some((b) => watch.brand.toLowerCase() === b.toLowerCase())
      : true;

    const matchesWaterResistance = waterResistance
      ? watch.waterResistance === waterResistance
      : true;

    const matchesPrice = watch.price >= minPrice && watch.price <= maxPrice;

    const matchesSearchQuery = searchQuery
      ? watch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        watch.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return (
      matchesBrand &&
      matchesWaterResistance &&
      matchesPrice &&
      matchesSearchQuery
    );
  });
}

// Function to sort watches based on the sort parameter
function sortWatches(watches: any[], sort: string | null) {
  if (sort === "price-asc") {
    // Sort by price low to high
    return watches.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    // Sort by price high to low
    return watches.sort((a, b) => b.price - a.price);
  } else {
    // Default: sort by "newest" (original order)
    return watches;
  }
}

// API route handler
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Parse filters from query params
  const brandQuery = searchParams.get("brand");
  const waterResistance = searchParams.get("waterResistance")!;
  const minPrice = parseFloat(searchParams.get("minPrice")!) || 0;
  const maxPrice =
    parseFloat(searchParams.get("maxPrice")!) || Number.MAX_VALUE;

  // Parse search query parameter
  const searchQuery = searchParams.get("search");

  // If `brand` is provided as a comma-separated string, split it into an array
  const brands = brandQuery ? brandQuery.split(",") : [];

  // Get the sort query parameter (e.g., "price-asc", "price-desc", "newest")
  const sort = searchParams.get("sort");

  // Filter watches based on the parsed filters and search query
  let filteredWatches = filterWatches(
    brands,
    waterResistance == "none" ? undefined : waterResistance,
    minPrice,
    maxPrice,
    searchQuery
  );

  // Sort the filtered watches based on the sort parameter
  filteredWatches = sortWatches(filteredWatches, sort);

  return NextResponse.json(filteredWatches);
}
