// Product catalog for Khadria Groups
// Each product references a full infographic image (specification sheet).

export type ProductCategory =
  | "Precious Metals & Diamonds"
  | "Base Metals & Ores"
  | "Petroleum & Energy"
  | "Agri Commodities & Oils"
  | "Industrial Chemicals"
  | "Trade Services";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  image: string; // imported asset URL
  highlights: string[];
}

// Import all product images (Vite bundles them and gives back URLs)
import crudePetroleumOil from "@/assets/products/crude-petroleum-oil.jpeg";
import dieselD2 from "@/assets/products/diesel-d2.jpeg";
import gasoline from "@/assets/products/gasoline.jpeg";
import jetA1 from "@/assets/products/jet-a1.jpeg";
import kerosene from "@/assets/products/kerosene.jpeg";
import marineFuelOil from "@/assets/products/marine-fuel-oil.jpeg";
import lpg from "@/assets/products/lpg.jpeg";
import lng from "@/assets/products/lng.jpeg";
import en590Diesel from "@/assets/products/en590-diesel.jpeg";
import copperOre from "@/assets/products/copper-ore.jpeg";
import bauxiteOre from "@/assets/products/bauxite-ore.jpeg";
import chromeOre from "@/assets/products/chrome-ore.jpeg";
import manganeseOre from "@/assets/products/manganese-ore.jpeg";
import coal from "@/assets/products/coal.jpeg";
import ironOre from "@/assets/products/iron-ore.jpeg";
import gold999Bar from "@/assets/products/gold-999-bar.jpeg";
import silverDoreBars from "@/assets/products/silver-dore-bars.jpeg";
import silver999Bars from "@/assets/products/silver-999-bars.jpeg";
import roughDiamonds from "@/assets/products/rough-diamonds.jpeg";
import naturalDiamonds from "@/assets/products/natural-diamonds.jpeg";
import goldDoreBars from "@/assets/products/gold-dore-bars.jpeg";
import aluminiumWireScrap from "@/assets/products/aluminium-wire-scrap.jpeg";
import aluminiumIngot from "@/assets/products/aluminium-ingot.jpeg";
import ironScrap from "@/assets/products/iron-scrap.jpeg";
import steelTmtBars from "@/assets/products/steel-tmt-bars.jpeg";
import copperMelberyScrap from "@/assets/products/copper-melbery-scrap.jpeg";
import railwayRails from "@/assets/products/railway-rails.jpeg";
import copperCathodes from "@/assets/products/copper-cathodes.jpeg";
import edibleCrudeOil from "@/assets/products/edible-crude-oil.jpeg";
import soyabeanOil from "@/assets/products/soyabean-oil.jpeg";
import palmOil from "@/assets/products/palm-oil.jpeg";
import sunflowerRefinedOil from "@/assets/products/sunflower-refined-oil.jpeg";
import urea46Fertilizer from "@/assets/products/urea-46-fertilizer.jpeg";
import sugarIcumsa45 from "@/assets/products/sugar-icumsa-45.jpeg";
import filmProduction from "@/assets/products/film-production.jpeg";
import bankInstruments from "@/assets/products/bank-instruments.jpeg";
import sulphur from "@/assets/products/sulphur.jpeg";

export const products: Product[] = [
  // Precious Metals & Diamonds
  { slug: "gold-999-bar", name: "999.9 Fine Gold Bar", tagline: "24K · LBMA Standard", category: "Precious Metals & Diamonds", image: gold999Bar, highlights: ["99.99% Purity", "Assay Certified", "1000g / 500g / 100g"] },
  { slug: "gold-dore-bars", name: "Gold Dore Bars", tagline: "90–98% purity · Refinery grade", category: "Precious Metals & Diamonds", image: goldDoreBars, highlights: ["Widely Accepted", "Global Standard", "Assay Reports"] },
  { slug: "silver-999-bars", name: "999 Fine Silver Bars", tagline: "99.9% Silver · Investment grade", category: "Precious Metals & Diamonds", image: silver999Bars, highlights: ["100g – 1000g", "LBMA Good Delivery", "Individually Assayed"] },
  { slug: "silver-dore-bars", name: "Silver Dore Bars", tagline: "Refinery feedstock", category: "Precious Metals & Diamonds", image: silverDoreBars, highlights: ["99.9% Ag", "Secure Export Packing", "Global Acceptance"] },
  { slug: "natural-diamonds", name: "Natural Diamonds", tagline: "Earth-mined · Certified", category: "Precious Metals & Diamonds", image: naturalDiamonds, highlights: ["GIA / IGI / HRD", "0.10 – 50 Ct", "Round · Oval · Emerald · Pear"] },
  { slug: "rough-diamonds", name: "Rough Diamonds", tagline: "Natural · Untreated · Ethical", category: "Precious Metals & Diamonds", image: roughDiamonds, highlights: ["Conflict-Free", "Origin Certificates", "White / Yellow / Fancy"] },

  // Base Metals & Ores
  { slug: "copper-cathodes", name: "Copper Cathodes", tagline: "LME Grade A · 99.99% Cu", category: "Base Metals & Ores", image: copperCathodes, highlights: ["Electrolytic Tough Pitch", "Standard Sheets", "Global Supply"] },
  { slug: "copper-ore", name: "Copper Ore", tagline: "High-grade Cu 2–5%", category: "Base Metals & Ores", image: copperOre, highlights: ["ISO / SGS Certified", "25 / 50 / 100 KG PP Bags", "Bulk Container"] },
  { slug: "copper-melbery-scrap", name: "Copper Melbery Scrap", tagline: "99.99% Pure Copper", category: "Base Metals & Ores", image: copperMelberyScrap, highlights: ["Bare Bright Wire", "High Conductivity", "100% Recyclable"] },
  { slug: "aluminium-ingot", name: "Aluminium Ingot", tagline: "99.7% Min. Purity", category: "Base Metals & Ores", image: aluminiumIngot, highlights: ["ASTM & EN Standards", "Bulk Container", "Industrial Grade"] },
  { slug: "aluminium-wire-scrap", name: "Aluminium Wire Scrap", tagline: "Clean · Sorted · Bright", category: "Base Metals & Ores", image: aluminiumWireScrap, highlights: ["High Conductivity", "For Remelting", "Bulk Available"] },
  { slug: "iron-ore", name: "Iron Ore", tagline: "Fe 58–68% · Lumps & Fines", category: "Base Metals & Ores", image: ironOre, highlights: ["Steel Manufacturing", "Fe 62 / Fe 58 Grades", "10–80 mm"] },
  { slug: "iron-scrap", name: "Iron & Steel Scrap", tagline: "HMS · Shredder · Rail", category: "Base Metals & Ores", image: ironScrap, highlights: ["Heavy Melting Scrap", "Cast Iron / Turnings", "For Steel Mills"] },
  { slug: "bauxite-ore", name: "Bauxite Ore", tagline: "Al₂O₃ 45–60%", category: "Base Metals & Ores", image: bauxiteOre, highlights: ["Alumina Refining", "Low Impurities", "Lumps & Fines"] },
  { slug: "chrome-ore", name: "Chrome Ore", tagline: "Cr₂O₃ 40–48%", category: "Base Metals & Ores", image: chromeOre, highlights: ["Stainless Steel Grade", "Ferrochrome Production", "Custom Grades"] },
  { slug: "manganese-ore", name: "Manganese Ore", tagline: "Mn 44–50%", category: "Base Metals & Ores", image: manganeseOre, highlights: ["Ferroalloy Production", "Lumps 10–150 mm", "Battery Industry"] },
  { slug: "steel-tmt-bars", name: "Steel TMT Bars", tagline: "IS 1786 · Fe 500D", category: "Base Metals & Ores", image: steelTmtBars, highlights: ["High Strength", "Corrosion Resistant", "Seismic Ready"] },
  { slug: "railway-rails", name: "Railway Rails R50 / R65", tagline: "Engineered for heavy haul", category: "Base Metals & Ores", image: railwayRails, highlights: ["50.03 / 64.72 kg/m", "12.5 – 25 m lengths", "Global Standards"] },

  // Petroleum & Energy
  { slug: "crude-petroleum-oil", name: "Crude Petroleum Oil", tagline: "Light · Medium · Heavy grades", category: "Petroleum & Energy", image: crudePetroleumOil, highlights: ["API 10–45", "Sweet / Sour", "Refinery Feedstock"] },
  { slug: "en590-diesel", name: "EN590 10 PPM Diesel", tagline: "Ultra-Low Sulphur", category: "Petroleum & Energy", image: en590Diesel, highlights: ["≤ 10 ppm S", "820–845 kg/m³", "EU Standard"] },
  { slug: "diesel-d2", name: "Diesel D2 (Gas Oil)", tagline: "ASTM D975 / EN 590", category: "Petroleum & Energy", image: dieselD2, highlights: ["500 ppm S Max", "Cetane 45+", "Automotive Grade"] },
  { slug: "gasoline", name: "Gasoline (Mogas)", tagline: "RON 91+ · Unleaded", category: "Petroleum & Energy", image: gasoline, highlights: ["ASTM D4814 / EN 228", "10 ppm S max", "High Octane"] },
  { slug: "jet-a1", name: "Jet A-1 Aviation Fuel", tagline: "Aviation Turbine Fuel", category: "Petroleum & Energy", image: jetA1, highlights: ["ASTM D1655", "DEF STAN 91-91", "42.8 MJ/kg"] },
  { slug: "kerosene", name: "Kerosene", tagline: "Aviation / Industrial / Heating", category: "Petroleum & Energy", image: kerosene, highlights: ["ASTM D3699", "Clear & Bright", "Multi-purpose"] },
  { slug: "marine-fuel-oil", name: "Marine Fuel Oil IFO 380", tagline: "ISO 8217:2017", category: "Petroleum & Energy", image: marineFuelOil, highlights: ["Quality Marine Fuel", "180–380 cSt", "Bunker Grade"] },
  { slug: "lpg", name: "Liquefied Petroleum Gas", tagline: "LPG · Domestic & Industrial", category: "Petroleum & Energy", image: lpg, highlights: ["Propane / Butane blends", "ISO tank / Bulk", "Global Delivery"] },
  { slug: "lng", name: "Liquefied Natural Gas", tagline: "LNG · Clean Energy", category: "Petroleum & Energy", image: lng, highlights: ["-162°C Storage", "Cryogenic Tanks", "Long-term Contracts"] },
  { slug: "coal", name: "Coal", tagline: "5,000 – 7,000 Kcal/kg", category: "Petroleum & Energy", image: coal, highlights: ["Steam / Coking / Anthracite", "Low Ash & Sulphur", "For Power & Cement"] },

  // Agri Commodities & Oils
  { slug: "edible-crude-oil", name: "Edible Crude Oil", tagline: "Refinery Feedstock", category: "Agri Commodities & Oils", image: edibleCrudeOil, highlights: ["ISO & SGS Certified", "Flexi Tanks / IBC / Drums", "Global Supply"] },
  { slug: "sunflower-refined-oil", name: "Sunflower Refined Oil", tagline: "100% Pure · High Smoke Point", category: "Agri Commodities & Oils", image: sunflowerRefinedOil, highlights: ["HACCP · ISO · SGS", "1L / 5L / 15L / IBC", "Rich in Vitamin E"] },
  { slug: "soyabean-oil", name: "Soyabean Oil", tagline: "Non-GMO · Refined", category: "Agri Commodities & Oils", image: soyabeanOil, highlights: ["Omega-3 & Omega-6", "Bulk Available", "Food-grade Packing"] },
  { slug: "palm-oil", name: "Palm Oil", tagline: "Pure · Refined · Sustainable", category: "Agri Commodities & Oils", image: palmOil, highlights: ["Rich in Vitamin E", "5.0R–50.0Y Lovibond", "Multiple Pack Sizes"] },
  { slug: "sugar-icumsa-45", name: "Sugar ICUMSA 45", tagline: "Crystal White · Brazil Origin", category: "Agri Commodities & Oils", image: sugarIcumsa45, highlights: ["99.8° Polarization", "50 KG PP Bag", "Human Consumption"] },
  { slug: "urea-46-fertilizer", name: "Urea 46% Granular", tagline: "High-nitrogen Fertilizer", category: "Agri Commodities & Oils", image: urea46Fertilizer, highlights: ["N 46% Min.", "50 KG PP Bags", "Suitable for All Crops"] },

  // Industrial Chemicals
  { slug: "sulphur", name: "Sulphur (Granular)", tagline: "99.5% Purity Min.", category: "Industrial Chemicals", image: sulphur, highlights: ["Various Origins", "1000 KG Big Bags", "Industrial Grade"] },

  // Trade Services
  { slug: "bank-instruments", name: "LC / SBLC / BG Trade Finance", tagline: "Global Trade & Banking Solutions", category: "Trade Services", image: bankInstruments, highlights: ["LC · SBLC · DLC · BG", "MT700 / MT760 / MT799", "Monetization Worldwide"] },
  { slug: "film-production", name: "Global Film Production", tagline: "Movies · Web Series · Ad Films", category: "Trade Services", image: filmProduction, highlights: ["6+ Indian Film Industries", "End-to-End Production", "Worldwide Locations"] },
];

export const categories: ProductCategory[] = [
  "Precious Metals & Diamonds",
  "Base Metals & Ores",
  "Petroleum & Energy",
  "Agri Commodities & Oils",
  "Industrial Chemicals",
  "Trade Services",
];
