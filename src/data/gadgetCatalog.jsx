// Generated catalog: 10 categories × 4 brands × 5 variants = 200 products.
// Swap `searchProducts` for a real API call later — the shape it returns
// (an array of these product objects) is the only contract the chat UI relies on.

const CATEGORIES = [
    { name: "Wireless Earbuds", icon: "music", tags: ["earbuds", "wireless", "bluetooth", "audio"], base: 2200,
      features: ["Active Noise Cancelling", "Touch Controls", "IPX5 Water Resistant", "30hr Battery", "Low Latency Mode"] },
    { name: "Over-Ear Headphones", icon: "music", tags: ["headphones", "over-ear", "wireless", "audio"], base: 3200,
      features: ["Active Noise Cancelling", "Deep Bass", "40hr Battery", "Foldable Design", "Voice Assistant"] },
    { name: "Smartwatch", icon: "watch", tags: ["smartwatch", "wearable", "fitness", "health"], base: 3800,
      features: ["Heart Rate Monitor", "AMOLED Display", "7-Day Battery", "GPS Tracking", "Sleep Tracking"] },
    { name: "Bluetooth Speaker", icon: "radio", tags: ["speaker", "bluetooth", "audio", "portable"], base: 1800,
      features: ["360° Sound", "IPX7 Waterproof", "12hr Playtime", "Party Light Mode", "Dual Pairing"] },
    { name: "Power Bank", icon: "battery", tags: ["power bank", "charger", "portable", "battery"], base: 1200,
      features: ["20000mAh Capacity", "Fast Charging", "Dual USB Output", "LED Display", "Slim Design"] },
    { name: "Action Camera", icon: "camera", tags: ["camera", "action cam", "video", "outdoor", "waterproof"], base: 5500,
      features: ["4K Recording", "Waterproof Case", "Image Stabilization", "Wide Angle Lens", "WiFi Transfer"] },
    { name: "Fitness Band", icon: "watch", tags: ["fitness band", "wearable", "health", "tracker"], base: 1500,
      features: ["Step Counter", "Heart Rate Monitor", "Sleep Tracking", "Water Resistant", "14-Day Battery"] },
    { name: "Mechanical Keyboard", icon: "cpu", tags: ["keyboard", "mechanical", "gaming", "rgb"], base: 2800,
      features: ["RGB Backlight", "Hot-Swappable Switches", "Anti-Ghosting", "Detachable Cable", "Compact Layout"] },
    { name: "Wireless Mouse", icon: "mouse", tags: ["mouse", "wireless", "gaming"], base: 1400,
      features: ["Silent Clicks", "Adjustable DPI", "Ergonomic Grip", "Long Battery Life", "Multi-Device Pairing"] },
    { name: "Portable SSD", icon: "drive", tags: ["ssd", "storage", "portable", "drive"], base: 4200,
      features: ["USB-C 3.2", "Shock Resistant", "Fast Read/Write", "Compact Metal Body", "Password Protection"] },
  ];
  
  const BRANDS = ["AudioNova", "PulseTech", "ZenGear", "TitanByte", "NovaCore", "ByteWave", "FlexTronics", "UrbanVolt"];
  
  // Store name is what gets linked to in the demo — swap `url` for real store pages later.
  const STORES = [
    { name: "TechBazaar BD", url: "https://example.com/store/techbazaar" },
    { name: "GadgetHub", url: "https://example.com/store/gadgethub" },
    { name: "ClickMart", url: "https://example.com/store/clickmart" },
    { name: "DigitalPoint", url: "https://example.com/store/digitalpoint" },
    { name: "SmartStore24", url: "https://example.com/store/smartstore24" },
    { name: "ByteBazaar", url: "https://example.com/store/bytebazaar" },
    { name: "GearNest", url: "https://example.com/store/gearnest" },
    { name: "UrbanTech Store", url: "https://example.com/store/urbantech" },
  ];
  
  const VARIANTS = [
    { suffix: "Lite", priceMult: 0.75 },
    { suffix: "SE", priceMult: 0.9 },
    { suffix: "", priceMult: 1 },
    { suffix: "Plus", priceMult: 1.25 },
    { suffix: "Pro Max", priceMult: 1.6 },
  ];
  
  function buildCatalog() {
    const products = [];
    let id = 1;
    CATEGORIES.forEach((cat, ci) => {
      for (let b = 0; b < 4; b++) {
        const brand = BRANDS[(ci * 4 + b) % BRANDS.length];
        VARIANTS.forEach((variant, vi) => {
          const store = STORES[(ci + b + vi) % STORES.length];
          const feature1 = cat.features[vi % cat.features.length];
          const feature2 = cat.features[(vi + 2) % cat.features.length];
          const price = Math.round(((cat.base * variant.priceMult) + b * 150) / 10) * 10;
          products.push({
            id,
            name: `${brand} ${cat.name}${variant.suffix ? " " + variant.suffix : ""}`,
            brand,
            category: cat.name,
            icon: cat.icon,
            tags: [...cat.tags, feature1.toLowerCase(), feature2.toLowerCase()],
            features: [feature1, feature2],
            price,
            inStock: id % 7 !== 0, // ~85% in stock
            store: store.name,
            storeUrl: store.url,
          });
          id++;
        });
      }
    });
    return products;
  }
  
  export const PRODUCTS = buildCatalog();
  
  const STOP_WORDS = new Set([
    "a", "an", "the", "for", "with", "and", "i", "want", "need", "me", "some",
    "that", "is", "are", "of", "under", "below", "less", "than", "bdt", "tk", "in", "my",
  ]);
  
  /**
   * Client-side stand-in for a real semantic search API.
   * Parses a price ceiling ("under 3000") and keywords out of the query,
   * scores every product on keyword overlap, and returns the top matches.
   */
  export function searchProducts(query, { products = PRODUCTS, limit = 4 } = {}) {
    const q = query.toLowerCase().trim();
    if (!q) return [];
  
    const priceMatch = q.match(/(?:under|below|less than)\s*(?:tk|bdt|৳)?\s*(\d{3,6})/);
    const maxPrice = priceMatch ? parseInt(priceMatch[1], 10) : null;
  
    const keywords = q
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w && !STOP_WORDS.has(w) && !/^\d+$/.test(w));
  
    let scored = products
      .filter((p) => (maxPrice ? p.price <= maxPrice : true))
      .map((p) => {
        const haystack = `${p.name} ${p.brand} ${p.category} ${p.tags.join(" ")} ${p.features.join(" ")}`.toLowerCase();
        let score = 0;
        keywords.forEach((kw) => {
          if (haystack.includes(kw)) score += 1;
        });
        if (p.inStock) score += 0.25;
        return { ...p, score };
      })
      .filter((p) => p.score > 0)
      .sort((a, b) => b.score - a.score || a.price - b.price);
  
    // Fallback: keywords matched nothing specific enough — surface cheap, in-stock picks
    // within the price ceiling (or overall) so the demo never comes back empty-handed.
    if (scored.length === 0) {
      scored = products
        .filter((p) => (maxPrice ? p.price <= maxPrice : true))
        .filter((p) => p.inStock)
        .sort((a, b) => a.price - b.price);
    }
  
    return scored.slice(0, limit);
  }