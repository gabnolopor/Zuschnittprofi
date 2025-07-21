// Tipos para las dimensiones de la placa
export type Unit = 'cm' | 'mm';

// Tipos para los colores disponibles
export type PlateColor = 
  | 'raw-steel' 
  | 'black' 
  | 'galvanized' 
  | 'painted-white' 
  | 'painted-gray' 
  | 'stainless-steel';

// Interfaz para las dimensiones
export interface Dimensions {
  length: number;
  width: number;
  unit: Unit;
}

// Interfaz para la configuración completa de la placa
export interface PlateConfiguration {
  dimensions: Dimensions;
  color: PlateColor;
  quantity: number;
}

// Interfaz para el precio simulado
export interface PriceEstimate {
  basePrice: number;
  colorMultiplier: number;
  sizeMultiplier: number;
  totalPrice: number;
  currency: string;
}

// Interfaz para las opciones de color
export interface ColorOption {
  id: PlateColor;
  name: string;
  description: string;
  hexColor: string;
  priceMultiplier: number;
}

// Interfaz para el estado del carrito
export interface CartItem {
  id: string;
  configuration: PlateConfiguration;
  price: PriceEstimate;
  timestamp: Date;
} 