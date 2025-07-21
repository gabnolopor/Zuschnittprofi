import { PlateConfiguration, PriceEstimate, ColorOption } from '../types';

// Available color options with their price multipliers
export const COLOR_OPTIONS: ColorOption[] = [
  {
    id: 'raw-steel',
    name: 'Raw Steel',
    description: 'Untreated steel surface',
    hexColor: '#6c757d',
    priceMultiplier: 1.0
  },
  {
    id: 'black',
    name: 'Black',
    description: 'Steel painted in black',
    hexColor: '#212529',
    priceMultiplier: 1.2
  },
  {
    id: 'galvanized',
    name: 'Galvanized',
    description: 'Galvanized steel for enhanced durability',
    hexColor: '#adb5bd',
    priceMultiplier: 1.4
  },
  {
    id: 'painted-white',
    name: 'White Painted',
    description: 'Steel painted in white',
    hexColor: '#f8f9fa',
    priceMultiplier: 1.3
  },
  {
    id: 'painted-gray',
    name: 'Gray Painted',
    description: 'Steel painted in gray',
    hexColor: '#6c757d',
    priceMultiplier: 1.3
  },
  {
    id: 'stainless-steel',
    name: 'Stainless Steel',
    description: 'High-quality stainless steel',
    hexColor: '#e9ecef',
    priceMultiplier: 2.0
  }
];

// Base price per cm² (simulated)
const BASE_PRICE_PER_CM2 = 0.15; // € per cm²

// Quantity discounts
const QUANTITY_DISCOUNTS = [
  { minQuantity: 1, maxQuantity: 4, discount: 0 },      // No discount
  { minQuantity: 5, maxQuantity: 9, discount: 0.05 },   // 5% discount
  { minQuantity: 10, maxQuantity: 24, discount: 0.10 }, // 10% discount
  { minQuantity: 25, maxQuantity: 49, discount: 0.15 }, // 15% discount
  { minQuantity: 50, maxQuantity: 99, discount: 0.20 }, // 20% discount
  { minQuantity: 100, maxQuantity: Infinity, discount: 0.25 } // 25% discount
];

/**
 * Get quantity discount based on order size
 * @param quantity - Number of pieces
 * @returns Object with discount and description
 */
function getQuantityDiscount(quantity: number): { discount: number; description: string } {
  const discountInfo = QUANTITY_DISCOUNTS.find(
    d => quantity >= d.minQuantity && quantity <= d.maxQuantity
  );
  
  if (!discountInfo) {
    return { discount: 0, description: 'No discount' };
  }
  
  const percentage = discountInfo.discount * 100;
  return {
    discount: discountInfo.discount,
    description: `${percentage}% volume discount`
  };
}

/**
 * Calculate estimated price for a plate configuration
 * @param configuration - Plate configuration
 * @returns Price estimate
 */
export function calculatePrice(configuration: PlateConfiguration): PriceEstimate {
  const { dimensions, color, quantity } = configuration;
  
  // Convert to cm² if necessary
  const areaInCm2 = dimensions.unit === 'mm' 
    ? (dimensions.length * dimensions.width) / 100 
    : dimensions.length * dimensions.width;
  
  // Base price per unit
  const basePricePerUnit = areaInCm2 * BASE_PRICE_PER_CM2;
  
  // Color multiplier
  const colorOption = COLOR_OPTIONS.find(option => option.id === color);
  const colorMultiplier = colorOption?.priceMultiplier || 1.0;
  
  // Size multiplier (discount for large plates)
  const sizeMultiplier = areaInCm2 > 1000 ? 0.9 : areaInCm2 > 500 ? 0.95 : 1.0;
  
  // Price per unit after color and size adjustments
  const pricePerUnit = basePricePerUnit * colorMultiplier * sizeMultiplier;
  
  // Quantity discount
  const quantityDiscountInfo = getQuantityDiscount(quantity);
  const quantityMultiplier = 1 - quantityDiscountInfo.discount;
  
  // Total price
  const totalPrice = pricePerUnit * quantity * quantityMultiplier;
  
  return {
    basePrice: basePricePerUnit * quantity,
    colorMultiplier,
    sizeMultiplier,
    quantityMultiplier,
    quantityDiscount: quantityDiscountInfo.discount,
    quantityDiscountDescription: quantityDiscountInfo.description,
    pricePerUnit,
    totalPrice: Math.round(totalPrice * 100) / 100, // Round to 2 decimal places
    currency: 'EUR'
  };
}

/**
 * Get color option by ID
 * @param colorId - Color ID
 * @returns Color option or undefined
 */
export function getColorOption(colorId: string): ColorOption | undefined {
  return COLOR_OPTIONS.find(option => option.id === colorId);
}

/**
 * Format price for display
 * @param price - Price in euros
 * @returns Formatted price string
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
} 