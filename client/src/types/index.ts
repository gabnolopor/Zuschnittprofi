// Types for plate dimensions
export type Unit = 'cm' | 'mm';

// Types for available colors
export type PlateColor = 
  | 'raw-steel' 
  | 'black' 
  | 'galvanized' 
  | 'painted-white' 
  | 'painted-gray' 
  | 'stainless-steel';

// Interface for dimensions
export interface Dimensions {
  length: number;
  width: number;
  unit: Unit;
}

// Interface for complete plate configuration
export interface PlateConfiguration {
  dimensions: Dimensions;
  color: PlateColor;
  quantity: number;
}

// Interface for simulated pricing
export interface PriceEstimate {
  basePrice: number;
  colorMultiplier: number;
  sizeMultiplier: number;
  quantityMultiplier: number;
  quantityDiscount: number;
  quantityDiscountDescription: string;
  pricePerUnit: number;
  totalPrice: number;
  currency: string;
}

// Interface for color options
export interface ColorOption {
  id: PlateColor;
  name: string;
  description: string;
  hexColor: string;
  priceMultiplier: number;
}

// Interface for cart state
export interface CartItem {
  id: string;
  configuration: PlateConfiguration;
  price: PriceEstimate;
  timestamp: Date;
} 