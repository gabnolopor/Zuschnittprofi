import { useState, useCallback } from 'react';
import { PlateConfiguration, Dimensions, Unit, PlateColor } from '../types';
import { calculatePrice } from '../utils/pricing';

/**
 * Custom hook for managing plate configuration state
 * Handles dimensions, color, quantity and price calculations
 */
export const usePlateConfiguration = () => {
  // Initial configuration state
  const [configuration, setConfiguration] = useState<PlateConfiguration>({
    dimensions: {
      length: 100,
      width: 50,
      unit: 'mm'
    },
    color: 'raw-steel',
    quantity: 1
  });

  // Calculate price estimate based on current configuration
  const priceEstimate = calculatePrice(configuration);

  // Update dimensions
  const updateDimensions = useCallback((newDimensions: Dimensions) => {
    setConfiguration(prev => ({
      ...prev,
      dimensions: newDimensions
    }));
  }, []);

  // Change measurement unit
  const changeUnit = useCallback((newUnit: Unit) => {
    setConfiguration(prev => {
      // Convert dimensions when changing units
      const conversionFactor = newUnit === 'mm' ? 10 : 0.1;
      return {
        ...prev,
        dimensions: {
          length: Math.round(prev.dimensions.length * conversionFactor * 10) / 10,
          width: Math.round(prev.dimensions.width * conversionFactor * 10) / 10,
          unit: newUnit
        }
      };
    });
  }, []);

  // Update color selection
  const updateColor = useCallback((newColor: PlateColor) => {
    setConfiguration(prev => ({
      ...prev,
      color: newColor
    }));
  }, []);

  // Update quantity
  const updateQuantity = useCallback((newQuantity: number) => {
    setConfiguration(prev => ({
      ...prev,
      quantity: Math.max(1, newQuantity)
    }));
  }, []);

  // Reset configuration to defaults
  const resetConfiguration = useCallback(() => {
    setConfiguration({
      dimensions: {
        length: 100,
        width: 50,
        unit: 'mm'
      },
      color: 'raw-steel',
      quantity: 1
    });
  }, []);

  return {
    configuration,
    priceEstimate,
    updateDimensions,
    changeUnit,
    updateColor,
    updateQuantity,
    resetConfiguration
  };
}; 