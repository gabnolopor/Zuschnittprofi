import React from 'react';
import { Button } from './ui/Button';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

/**
 * Component for selecting the quantity of plates
 * Includes quantity controls and bulk discount information
 */
export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange
}) => {
  // Handle quantity changes
  const handleQuantityChange = (newQuantity: number) => {
    const validQuantity = Math.max(1, Math.min(1000, newQuantity));
    onQuantityChange(validQuantity);
  };

  // Calculate discount percentage
  const getDiscountPercentage = (qty: number): number => {
    if (qty >= 100) return 25;
    if (qty >= 50) return 20;
    if (qty >= 25) return 15;
    if (qty >= 10) return 10;
    if (qty >= 5) return 5;
    return 0;
  };

  const currentDiscount = getDiscountPercentage(quantity);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Quantity
        </h3>
        <p className="text-sm text-gray-600">
          Select how many plates you need. Higher quantities receive volume discounts.
        </p>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center justify-center space-x-4">
        <Button
          variant="outline"
          size="lg"
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity <= 1}
          className="w-12 h-12 p-0 text-xl font-bold"
        >
          −
        </Button>

        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900">{quantity}</div>
          <div className="text-sm text-gray-500">units</div>
        </div>

        <Button
          variant="outline"
          size="lg"
          onClick={() => handleQuantityChange(quantity + 1)}
          disabled={quantity >= 1000}
          className="w-12 h-12 p-0 text-xl font-bold"
        >
          +
        </Button>
      </div>

      {/* Direct quantity input */}
      <div className="max-w-xs mx-auto">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
          Or enter quantity directly:
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
          className="input-field text-center"
          min="1"
          max="1000"
        />
      </div>

      {/* Quick quantity buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {[1, 5, 10, 25, 50, 100].map((qty) => (
          <Button
            key={qty}
            variant={quantity === qty ? 'primary' : 'outline'}
            size="sm"
            onClick={() => handleQuantityChange(qty)}
          >
            {qty}
          </Button>
        ))}
      </div>

      {/* Discount information */}
      {currentDiscount > 0 && (
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <div className="font-medium text-green-800">
                Volume Discount Applied!
              </div>
              <div className="text-sm text-green-700">
                {currentDiscount}% discount for {quantity} units
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Discount tiers */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-3">Volume Discounts</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">1-4 units:</span>
            <span className="font-medium">No discount</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">5-9 units:</span>
            <span className="font-medium text-green-600">5% off</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">10-24 units:</span>
            <span className="font-medium text-green-600">10% off</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">25-49 units:</span>
            <span className="font-medium text-green-600">15% off</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">50-99 units:</span>
            <span className="font-medium text-green-600">20% off</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">100+ units:</span>
            <span className="font-medium text-green-600">25% off</span>
          </div>
        </div>
      </div>

      {/* Help information */}
      <div className="bg-blue-50 rounded-lg p-3">
        <div className="flex items-start space-x-2">
          <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-medium">Bulk pricing</p>
            <p className="text-blue-700">
              Order more to save more! Volume discounts are automatically applied 
              and reflected in the final price calculation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 