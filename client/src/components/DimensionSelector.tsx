import React from 'react';
import { Dimensions, Unit } from '../types';
import { Button } from './ui/Button';

interface DimensionSelectorProps {
  dimensions: Dimensions;
  onDimensionsChange: (dimensions: Dimensions) => void;
  onUnitChange: (unit: Unit) => void;
}

/**
 * Component for selecting plate dimensions
 * Allows users to set length, width and choose between cm/mm units
 */
export const DimensionSelector: React.FC<DimensionSelectorProps> = ({
  dimensions,
  onDimensionsChange,
  onUnitChange
}) => {
  // Handle dimension changes
  const handleDimensionChange = (field: 'length' | 'width', value: string) => {
    // Handle empty value - don't convert to 0
    if (value === '') {
      onDimensionsChange({
        ...dimensions,
        [field]: 0
      });
      return;
    }
    
    const numValue = parseFloat(value);
    // Only update if it's a valid number
    if (!isNaN(numValue) && numValue >= 0) {
      onDimensionsChange({
        ...dimensions,
        [field]: numValue
      });
    }
  };

  // Handle unit changes
  const handleUnitChange = (newUnit: Unit) => {
    if (newUnit === dimensions.unit) return;
    
    // Convert dimensions when changing units
    const conversionFactor = newUnit === 'mm' ? 10 : 0.1;
    onDimensionsChange({
      length: Math.round(dimensions.length * conversionFactor * 10) / 10,
      width: Math.round(dimensions.width * conversionFactor * 10) / 10,
      unit: newUnit
    });
    onUnitChange(newUnit);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          Plate Dimensions
        </h3>
        <p className="text-sm text-gray-600">
          Set the length and width of your custom metal plate
        </p>
      </div>

      {/* Unit selection - Responsive layout */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Measurement Unit
        </label>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <Button
            variant={dimensions.unit === 'cm' ? 'primary' : 'outline'}
            size="md"
            onClick={() => handleUnitChange('cm')}
            className="w-full sm:w-auto"
          >
            Centimeters (cm)
          </Button>
          <Button
            variant={dimensions.unit === 'mm' ? 'primary' : 'outline'}
            size="md"
            onClick={() => handleUnitChange('mm')}
            className="w-full sm:w-auto"
          >
            Millimeters (mm)
          </Button>
        </div>
      </div>

      {/* Dimension inputs - Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Length input */}
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-2">
            Length
          </label>
          <div className="relative">
            <input
              type="text"
              id="length"
              value={dimensions.length || ''}
              onChange={(e) => handleDimensionChange('length', e.target.value)}
              onKeyPress={(e) => {
                // Allow only numbers, decimal point, and backspace
                if (!/[0-9.]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                  e.preventDefault();
                }
              }}
              className="input-field"
              placeholder="Enter length"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-sm">{dimensions.unit}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Maximum: 1000 {dimensions.unit}
          </p>
        </div>

        {/* Width input */}
        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-2">
            Width
          </label>
          <div className="relative">
            <input
              type="text"
              id="width"
              value={dimensions.width || ''}
              onChange={(e) => handleDimensionChange('width', e.target.value)}
              onKeyPress={(e) => {
                // Allow only numbers, decimal point, and backspace
                if (!/[0-9.]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                  e.preventDefault();
                }
              }}
              className="input-field"
              placeholder="Enter width"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-sm">{dimensions.unit}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Maximum: 1000 {dimensions.unit}
          </p>
        </div>
      </div>

      {/* Area calculation - Responsive layout with better desktop spacing */}
      <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
        <div className="label-value-mobile lg:label-value-desktop">
          <span className="label">Total Area:</span>
          <span className="value break-all">
            {(dimensions.length * dimensions.width).toFixed(2)} {dimensions.unit}²
          </span>
        </div>
        <div className="label-value-mobile lg:label-value-desktop mt-1">
          <span className="label">Area in cm²:</span>
          <span className="value break-all">
            {dimensions.unit === 'mm' 
              ? ((dimensions.length * dimensions.width) / 100).toFixed(2)
              : (dimensions.length * dimensions.width).toFixed(2)
            } cm²
          </span>
        </div>
      </div>

      {/* Help text - Responsive layout */}
      <div className="bg-blue-50 rounded-lg p-3">
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-medium">Precision matters</p>
            <p className="text-blue-700">
              Enter exact dimensions for accurate pricing. You can switch between cm and mm at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 