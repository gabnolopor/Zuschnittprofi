import React from 'react';
import { PlateColor } from '../types';
import { COLOR_OPTIONS } from '../utils/pricing';

interface ColorSelectorProps {
  selectedColor: PlateColor;
  onColorChange: (color: PlateColor) => void;
}

/**
 * Componente para seleccionar el color de la placa
 * Muestra opciones visuales con muestras de color y descripciones
 */
export const ColorSelector: React.FC<ColorSelectorProps> = ({
  selectedColor,
  onColorChange
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Color de la Placa
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Selecciona el acabado y color de tu placa de metal
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {COLOR_OPTIONS.map((colorOption) => (
          <button
            key={colorOption.id}
            onClick={() => onColorChange(colorOption.id)}
            className={`
              relative p-4 rounded-lg border-2 transition-all duration-200
              ${selectedColor === colorOption.id 
                ? 'border-primary-500 bg-primary-50 shadow-md' 
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }
            `}
          >
            {/* Indicador de selección */}
            {selectedColor === colorOption.id && (
              <div className="absolute top-2 right-2">
                <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-3">
              {/* Muestra de color */}
              <div 
                className="w-8 h-8 rounded-full border border-gray-300 shadow-sm"
                style={{ backgroundColor: colorOption.hexColor }}
              />
              
              <div className="text-left">
                <h4 className="font-medium text-gray-900 text-sm">
                  {colorOption.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {colorOption.description}
                </p>
                <p className="text-xs text-primary-600 font-medium mt-1">
                  +{((colorOption.priceMultiplier - 1) * 100).toFixed(0)}% precio
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}; 