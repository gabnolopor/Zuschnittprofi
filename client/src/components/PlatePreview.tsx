import React from 'react';
import { PlateConfiguration } from '../types';
import { getColorOption } from '../utils/pricing';

interface PlatePreviewProps {
  configuration: PlateConfiguration;
}

/**
 * Component to display a visual preview of the plate
 * Shows the plate with selected dimensions and color
 */
export const PlatePreview: React.FC<PlatePreviewProps> = ({ configuration }) => {
  const colorOption = getColorOption(configuration.color);
  
  // Calculate preview dimensions (max 200px for display)
  const maxPreviewSize = 200;
  const aspectRatio = configuration.dimensions.length / configuration.dimensions.width;
  
  let previewWidth, previewHeight;
  if (aspectRatio > 1) {
    // Portrait
    previewHeight = maxPreviewSize;
    previewWidth = maxPreviewSize / aspectRatio;
  } else {
    // Landscape
    previewWidth = maxPreviewSize;
    previewHeight = maxPreviewSize * aspectRatio;
  }

  return (
    <div className="card">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          Plate Preview
        </h3>
        <p className="text-sm text-gray-600">
          Visual representation of your custom plate
        </p>
      </div>

      {/* Visual preview - Centered at top */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <div
          className="border-2 border-gray-300 rounded-lg shadow-md"
          style={{
            width: `${previewWidth}px`,
            height: `${previewHeight}px`,
            backgroundColor: colorOption?.hexColor || '#6c757d',
            maxWidth: '100%',
            maxHeight: '200px'
          }}
        />
      </div>

      {/* Color information - Full width below preview */}
      <div className="space-y-4">
        {/* Color details */}
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-200 flex-shrink-0"
            style={{ backgroundColor: colorOption?.hexColor }}
          />
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-gray-900 text-sm sm:text-base">
              {colorOption?.name}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              {colorOption?.description}
            </div>
          </div>
        </div>

        {/* Dimensions info - Full width grid with responsive label-value spacing */}
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
          <h4 className="font-medium text-gray-900 mb-3 text-sm sm:text-base">Specifications</h4>
          <div className="space-y-2 text-sm">
            <div className="label-value-mobile lg:label-value-desktop">
              <span className="label">Length:</span>
              <span className="value">
                {configuration.dimensions.length} {configuration.dimensions.unit}
              </span>
            </div>
            <div className="label-value-mobile lg:label-value-desktop">
              <span className="label">Width:</span>
              <span className="value">
                {configuration.dimensions.width} {configuration.dimensions.unit}
              </span>
            </div>
            <div className="label-value-mobile lg:label-value-desktop">
              <span className="label">Area:</span>
              <span className="value">
                {(configuration.dimensions.length * configuration.dimensions.width).toFixed(2)} {configuration.dimensions.unit}²
              </span>
            </div>
            <div className="label-value-mobile lg:label-value-desktop">
              <span className="label">Quantity:</span>
              <span className="value">
                {configuration.quantity} {configuration.quantity === 1 ? 'plate' : 'plates'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional info - Full width at bottom */}
      <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="text-xs sm:text-sm text-blue-800">
            <p className="font-medium">Preview scale</p>
            <p className="text-blue-700">
              This is a scaled representation. Actual plate will be manufactured to your exact specifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 