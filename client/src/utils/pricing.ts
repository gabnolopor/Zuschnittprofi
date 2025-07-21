import { PlateConfiguration, PriceEstimate, ColorOption } from '../types';

// Configuración de colores disponibles con sus multiplicadores de precio
export const COLOR_OPTIONS: ColorOption[] = [
  {
    id: 'raw-steel',
    name: 'Acero Crudo',
    description: 'Acero sin tratamiento superficial',
    hexColor: '#6c757d',
    priceMultiplier: 1.0
  },
  {
    id: 'black',
    name: 'Negro',
    description: 'Acero pintado en color negro',
    hexColor: '#212529',
    priceMultiplier: 1.2
  },
  {
    id: 'galvanized',
    name: 'Galvanizado',
    description: 'Acero galvanizado para mayor durabilidad',
    hexColor: '#adb5bd',
    priceMultiplier: 1.4
  },
  {
    id: 'painted-white',
    name: 'Pintado Blanco',
    description: 'Acero pintado en color blanco',
    hexColor: '#f8f9fa',
    priceMultiplier: 1.3
  },
  {
    id: 'painted-gray',
    name: 'Pintado Gris',
    description: 'Acero pintado en color gris',
    hexColor: '#6c757d',
    priceMultiplier: 1.3
  },
  {
    id: 'stainless-steel',
    name: 'Acero Inoxidable',
    description: 'Acero inoxidable de alta calidad',
    hexColor: '#e9ecef',
    priceMultiplier: 2.0
  }
];

// Precio base por cm² (simulado)
const BASE_PRICE_PER_CM2 = 0.15; // € por cm²

/**
 * Calcula el precio estimado para una configuración de placa
 * @param configuration - Configuración de la placa
 * @returns Estimación de precio
 */
export function calculatePrice(configuration: PlateConfiguration): PriceEstimate {
  const { dimensions, color, quantity } = configuration;
  
  // Convertir a cm² si es necesario
  const areaInCm2 = dimensions.unit === 'mm' 
    ? (dimensions.length * dimensions.width) / 100 
    : dimensions.length * dimensions.width;
  
  // Precio base
  const basePrice = areaInCm2 * BASE_PRICE_PER_CM2;
  
  // Multiplicador por color
  const colorOption = COLOR_OPTIONS.find(option => option.id === color);
  const colorMultiplier = colorOption?.priceMultiplier || 1.0;
  
  // Multiplicador por tamaño (descuento para placas grandes)
  const sizeMultiplier = areaInCm2 > 1000 ? 0.9 : areaInCm2 > 500 ? 0.95 : 1.0;
  
  // Precio total
  const totalPrice = basePrice * colorMultiplier * sizeMultiplier * quantity;
  
  return {
    basePrice: basePrice * quantity,
    colorMultiplier,
    sizeMultiplier,
    totalPrice: Math.round(totalPrice * 100) / 100, // Redondear a 2 decimales
    currency: 'EUR'
  };
}

/**
 * Obtiene la opción de color por ID
 * @param colorId - ID del color
 * @returns Opción de color o undefined
 */
export function getColorOption(colorId: string): ColorOption | undefined {
  return COLOR_OPTIONS.find(option => option.id === colorId);
}

/**
 * Formatea el precio para mostrar
 * @param price - Precio en euros
 * @returns Precio formateado
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
} 