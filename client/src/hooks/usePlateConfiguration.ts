import { useState, useCallback, useMemo } from 'react';
import { PlateConfiguration, Dimensions, Unit, PlateColor } from '../types';
import { calculatePrice } from '../utils/pricing';

/**
 * Hook personalizado para manejar la configuración de la placa
 * Proporciona estado y funciones para configurar dimensiones, color y cantidad
 */
export function usePlateConfiguration() {
  // Estado inicial de la configuración
  const [configuration, setConfiguration] = useState<PlateConfiguration>({
    dimensions: {
      length: 100,
      width: 50,
      unit: 'cm'
    },
    color: 'raw-steel',
    quantity: 1
  });

  // Calcular precio estimado basado en la configuración actual
  const priceEstimate = useMemo(() => {
    return calculatePrice(configuration);
  }, [configuration]);

  // Función para actualizar las dimensiones
  const updateDimensions = useCallback((dimensions: Partial<Dimensions>) => {
    setConfiguration(prev => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        ...dimensions
      }
    }));
  }, []);

  // Función para cambiar la unidad de medida
  const changeUnit = useCallback((unit: Unit) => {
    setConfiguration(prev => {
      const currentUnit = prev.dimensions.unit;
      let newLength = prev.dimensions.length;
      let newWidth = prev.dimensions.width;

      // Convertir valores si es necesario
      if (currentUnit === 'cm' && unit === 'mm') {
        newLength = prev.dimensions.length * 10;
        newWidth = prev.dimensions.width * 10;
      } else if (currentUnit === 'mm' && unit === 'cm') {
        newLength = Math.round(prev.dimensions.length / 10);
        newWidth = Math.round(prev.dimensions.width / 10);
      }

      return {
        ...prev,
        dimensions: {
          ...prev.dimensions,
          length: newLength,
          width: newWidth,
          unit
        }
      };
    });
  }, []);

  // Función para actualizar el color
  const updateColor = useCallback((color: PlateColor) => {
    setConfiguration(prev => ({
      ...prev,
      color
    }));
  }, []);

  // Función para actualizar la cantidad
  const updateQuantity = useCallback((quantity: number) => {
    if (quantity > 0) {
      setConfiguration(prev => ({
        ...prev,
        quantity
      }));
    }
  }, []);

  // Función para resetear la configuración
  const resetConfiguration = useCallback(() => {
    setConfiguration({
      dimensions: {
        length: 100,
        width: 50,
        unit: 'cm'
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
} 