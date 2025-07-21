import React from 'react';
import { PlateConfiguration, PriceEstimate } from '../types';
import { formatPrice, getColorOption } from '../utils/pricing';
import { Button } from './ui/Button';

interface PriceSummaryProps {
  configuration: PlateConfiguration;
  priceEstimate: PriceEstimate;
  onAddToCart: () => void;
  onReset: () => void;
}

/**
 * Component to display configuration summary and pricing
 * Includes configuration details and action buttons
 */
export const PriceSummary: React.FC<PriceSummaryProps> = ({
  configuration,
  priceEstimate,
  onAddToCart,
  onReset
}) => {
  const colorOption = getColorOption(configuration.color);
  const areaInCm2 = configuration.dimensions.unit === 'mm'
    ? (configuration.dimensions.length * configuration.dimensions.width) / 100
    : configuration.dimensions.length * configuration.dimensions.width;

  return (
    <div className="card">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          Order Summary
        </h3>
        <p className="text-sm text-gray-600">
          Review your configuration and pricing
        </p>
      </div>

      {/* Configuration details - Responsive layout */}
      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Dimensions:</span>
              <span className="font-medium">
                {configuration.dimensions.length} × {configuration.dimensions.width} {configuration.dimensions.unit}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Area:</span>
              <span className="font-medium">{areaInCm2.toFixed(2)} cm²</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Color:</span>
              <span className="font-medium">{colorOption?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Quantity:</span>
              <span className="font-medium">
                {configuration.quantity} {configuration.quantity === 1 ? 'plate' : 'plates'}
              </span>
            </div>
          </div>
        </div>

        {/* Price breakdown - Responsive layout */}
        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
          <h4 className="font-medium text-gray-900 mb-3 text-sm sm:text-base">Price Breakdown</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Base price per cm²:</span>
              <span>€{priceEstimate.basePrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Color multiplier:</span>
              <span>×{priceEstimate.colorMultiplier.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Size multiplier:</span>
              <span>×{priceEstimate.sizeMultiplier.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Price per unit:</span>
              <span className="font-medium">{formatPrice(priceEstimate.pricePerUnit)}</span>
            </div>
            {priceEstimate.quantityDiscount > 0 && (
              <>
                <div className="flex justify-between text-green-600">
                  <span>Quantity discount ({priceEstimate.quantityDiscountDescription}):</span>
                  <span>-{formatPrice(priceEstimate.quantityDiscount)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">{formatPrice(priceEstimate.totalPrice)}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Total price - Responsive layout */}
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg sm:text-xl font-semibold text-gray-900">Total Price:</span>
          <span className="text-2xl sm:text-3xl font-bold text-primary-600">
            {formatPrice(priceEstimate.totalPrice)}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Estimated price, may vary based on availability
        </p>
      </div>

      {/* Action buttons - Responsive layout */}
      <div className="space-y-3">
        <Button
          variant="primary"
          onClick={onAddToCart}
          className="w-full"
          size="lg"
        >
          Add to Cart
        </Button>
        <Button
          variant="outline"
          onClick={onReset}
          className="w-full"
        >
          Start Over
        </Button>
      </div>

      {/* Help information - Responsive layout */}
      <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="text-xs sm:text-sm text-blue-800">
            <p className="font-medium">Ready to order</p>
            <p className="text-blue-700">
              Your plate will be manufactured to exact specifications. Production typically takes 3-5 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 