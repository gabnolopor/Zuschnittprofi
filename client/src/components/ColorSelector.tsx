import React from 'react';
import { PlateColor } from '../types';
import { COLOR_OPTIONS } from '../utils/pricing';

interface ColorSelectorProps {
  selectedColor: PlateColor;
  onColorChange: (color: PlateColor) => void;
}

/**
 * Component for selecting plate color and finish
 * Displays available color options with visual previews
 */
export const ColorSelector: React.FC<ColorSelectorProps> = ({
  selectedColor,
  onColorChange
}) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          Color & Finish
        </h3>
        <p className="text-sm text-gray-600">
          Choose the color and surface treatment for your metal plate
        </p>
      </div>

      {/* Color grid - Responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {COLOR_OPTIONS.map((colorOption) => (
          <button
            key={colorOption.id}
            onClick={() => onColorChange(colorOption.id)}
            className={`
              relative p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 text-left
              ${selectedColor === colorOption.id
                ? 'border-primary-500 bg-primary-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              }
            `}
          >
            {/* Color preview */}
            <div className="flex items-center space-x-3 mb-2">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-200 flex-shrink-0"
                style={{ backgroundColor: colorOption.hexColor }}
              />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 text-sm sm:text-base">{colorOption.name}</div>
                {colorOption.priceMultiplier > 1 && (
                  <div className="text-xs sm:text-sm text-primary-600 font-medium">
                    +{((colorOption.priceMultiplier - 1) * 100).toFixed(0)}%
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-xs sm:text-sm text-gray-600 line-clamp-2">
              {colorOption.description}
            </div>

            {/* Selected indicator */}
            {selectedColor === colorOption.id && (
              <div className="absolute top-2 right-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Selected color details - Responsive layout */}
      {selectedColor && (
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
          <div className="flex items-center space-x-3 mb-2">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-gray-200 flex-shrink-0"
              style={{ backgroundColor: COLOR_OPTIONS.find(c => c.id === selectedColor)?.hexColor }}
            />
            <div>
              <div className="font-semibold text-gray-900 text-sm sm:text-base">
                {COLOR_OPTIONS.find(c => c.id === selectedColor)?.name}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {COLOR_OPTIONS.find(c => c.id === selectedColor)?.description}
              </div>
            </div>
          </div>
          
          {/* Help information - Responsive text */}
          <div className="bg-blue-50 rounded-lg p-3 mt-3">
            <div className="flex items-start space-x-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div className="text-xs sm:text-sm text-blue-800">
                <p className="font-medium">Quality finishes</p>
                <p className="text-blue-700">
                  Premium finishes like stainless steel provide enhanced corrosion resistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 