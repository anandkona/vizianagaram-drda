export type ProductCategory = "Handloom & craft" | "Agriculture" | "Food & wellness" | "Home & village";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
  unit: string;
  badge?: string;
  href?: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  href?: string;
};

export const CART_STORAGE_KEY = "vizianagaram-cart";
export const WISHLIST_STORAGE_KEY = "vizianagaram-wishlist";

const image = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=82`;

export const products: Product[] = [
  {
    id: "kothavalasa-beaded-necklace",
    name: "Kothavalasa-inspired bead necklace",
    price: 640,
    description: "A handcrafted necklace inspired by the colour stories and bead traditions of the Vizianagaram region.",
    category: "Handloom & craft",
    image: image("photo-1617038220319-276d3cfab638"),
    unit: "per piece",
    badge: "Artisan reference",
    href: "/mart#kothavalasa-beaded-necklace",
  },
  {
    id: "bobbili-cotton-stole",
    name: "Bobbili cotton craft stole",
    price: 890,
    description: "A lightweight cotton stole with a handloom-inspired weave, suitable for everyday styling and gifting.",
    category: "Handloom & craft",
    image: image("photo-1601924994987-69e26d50dc26"),
    unit: "per stole",
    badge: "Handloom reference",
    href: "/mart#bobbili-cotton-stole",
  },
  {
    id: "bobbili-veena-miniature",
    name: "Bobbili veena miniature",
    price: 1250,
    description: "A decorative miniature inspired by the Bobbili veena tradition; display and collectible use only.",
    category: "Handloom & craft",
    image: image("photo-1511192336575-5a79af67a629"),
    unit: "per miniature",
    badge: "Cultural craft",
    href: "/mart#bobbili-veena-miniature",
  },
  {
    id: "tribal-terracotta-set",
    name: "Terracotta village table set",
    price: 740,
    description: "A small hand-finished table set shaped by the earthy forms and practical beauty of village pottery.",
    category: "Handloom & craft",
    image: image("photo-1578749556568-bc2c40e68b61"),
    unit: "per set",
    href: "/mart#tribal-terracotta-set",
  },
  {
    id: "ragi-millet-flour",
    name: "Ragi millet flour",
    price: 145,
    description: "A stone-mill style staple flour reference from a small-grain cereal and everyday nutrition range.",
    category: "Food & wellness",
    image: image("photo-1509440159596-0249088772ff"),
    unit: "1 kg pack",
    badge: "Local pantry",
    href: "/mart#ragi-millet-flour",
  },
  {
    id: "koraput-arhar-pulse",
    name: "Arhar pulse pack",
    price: 220,
    description: "A pantry staple reference for everyday meals, sourced through a short and transparent supply chain.",
    category: "Agriculture",
    image: image("photo-1515543904379-3d757afe72e4"),
    unit: "1 kg pack",
    badge: "Farm value chain",
    href: "/mart#koraput-arhar-pulse",
  },
  {
    id: "turmeric-powder",
    name: "Forest-linked turmeric powder",
    price: 185,
    description: "A bright, aromatic spice reference presented for local pantry exploration; verify sourcing and labelling before purchase.",
    category: "Food & wellness",
    image: image("photo-1615485500704-8e990f9900f7"),
    unit: "250 g pack",
    href: "/mart#turmeric-powder",
  },
  {
    id: "cold-pressed-mustard-oil",
    name: "Small-batch mustard oil",
    price: 360,
    description: "A village kitchen range reference with a warm, familiar finish for everyday cooking.",
    category: "Food & wellness",
    image: image("photo-1474979266404-7eaacbcd87c5"),
    unit: "500 ml bottle",
    href: "/mart#cold-pressed-mustard-oil",
  },
  {
    id: "jute-storage-basket",
    name: "Jute storage basket",
    price: 560,
    description: "A sturdy, woven storage basket that brings a natural texture to a village-inspired home.",
    category: "Home & village",
    image: image("photo-1519710164239-da123dc03ef4"),
    unit: "per basket",
    href: "/mart#jute-storage-basket",
  },
  {
    id: "bamboo-serving-tray",
    name: "Bamboo serving tray",
    price: 480,
    description: "A handmade serving tray designed for tea, spices, welcoming guests or arranging a market display.",
    category: "Home & village",
    image: image("photo-1603199506016-b9a594b593c0"),
    unit: "per tray",
    href: "/mart#bamboo-serving-tray",
  },
  {
    id: "wildflower-honey",
    name: "Small-batch wildflower honey",
    price: 420,
    description: "A golden honey reference for a thoughtfully sourced local pantry shelf; check food labelling and allergies.",
    category: "Food & wellness",
    image: image("photo-1587049352846-4a222e784d38"),
    unit: "350 g jar",
    href: "/mart#wildflower-honey",
  },
  {
    id: "banana-fiber-shopping-bag",
    name: "Banana-fiber market bag",
    price: 290,
    description: "A reusable market bag with a natural fibre finish, made for everyday errands and thoughtful gifting.",
    category: "Handloom & craft",
    image: image("photo-1594223274512-ad4803739b7c"),
    unit: "per bag",
    badge: "Reusable",
    href: "/mart#banana-fiber-shopping-bag",
  },
];

export const productCategories = ["All products", "Handloom & craft", "Agriculture", "Food & wellness", "Home & village"] as const;
export type ProductCategoryFilter = (typeof productCategories)[number];

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function isCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === "string" &&
    typeof item.name === "string" &&
    typeof item.price === "number" &&
    Number.isFinite(item.price) &&
    typeof item.quantity === "number" &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0 &&
    typeof item.image === "string" &&
    (item.href === undefined || typeof item.href === "string")
  );
}

function notifyCartChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("vizianagaram-cart-change"));
  }
}

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isCartItem) : [];
  } catch {
    return [];
  }
}

export function writeCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } finally {
    notifyCartChange();
  }
}

export function addProductToCart(product: Product) {
  const current = readCart();
  const existing = current.find((item) => item.id === product.id);
  if (existing) {
    writeCart(current.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
  } else {
    writeCart([
      ...current,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        href: product.href,
      },
    ]);
  }
}

export function removeProductFromCart(productId: string) {
  writeCart(readCart().filter((item) => item.id !== productId));
}

export function setCartQuantity(productId: string, quantity: number) {
  if (quantity <= 0) {
    removeProductFromCart(productId);
    return;
  }
  writeCart(readCart().map((item) => (item.id === productId ? { ...item, quantity: Math.max(1, Math.floor(quantity)) } : item)));
}

export function clearCart() {
  writeCart([]);
}

export function readWishlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.every((item) => typeof item === "string") ? parsed : [];
  } catch {
    return [];
  }
}

export function writeWishlist(items: string[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(Array.from(new Set(items))));
  } finally {
    if (typeof window !== "undefined") window.dispatchEvent(new Event("vizianagaram-wishlist-change"));
  }
}

export function toggleWishlist(productId: string) {
  const current = readWishlist();
  writeWishlist(current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId]);
}
