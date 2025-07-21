import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

/**
 * Component for selecting the quantity of plates
 * Includes quantity controls and volume discount information
 */
export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange
}) => {
  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleInputChange = (value: string) => {
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue > 0) {
      onQuantityChange(numValue);
    }
  };

  // Calculate discount percentage
  const getDiscountPercentage = (qty: number) => {
    if (qty >= 100) return 25;
    if (qty >= 50) return 20;
    if (qty >= 25) return 15;
    if (qty >= 10) return 10;
    if (qty >= 5) return 5;
    return 0;
  };

  const discountPercentage = getDiscountPercentage(quantity);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          Quantity
        </h3>
        <p className="text-sm text-gray-600">
          Select the number of plates you need
        </p>
      </div>

      {/* Quantity selector - Responsive layout */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Quantity controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleDecrement}
            disabled={quantity <= 1}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 rounded-lg flex items-center justify-center transition-colors"
          >
            <span className="text-xl sm:text-2xl font-bold text-gray-700">−</span>
          </button>
          
          <div className="relative">
            <input
              type="number"
              value={quantity}
              onChange={(e) => handleInputChange(e.target.value)}
              min="1"
              className="w-20 sm:w-24 h-10 sm:h-12 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg sm:text-xl font-semibold"
            />
          </div>
          
          <button
            onClick={handleIncrement}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
          >
            <span className="text-xl sm:text-2xl font-bold text-gray-700">+</span>
          </button>
        </div>

        {/* Quick quantity buttons - Responsive grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
          {[1, 5, 10, 25, 50, 100].map((qty) => (
            <button
              key={qty}
              onClick={() => onQuantityChange(qty)}
              className={`
                px-3 py-2 text-sm sm:text-base rounded-lg transition-colors
                ${quantity === qty
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {qty}
            </button>
          ))}
        </div>
      </div>

      {/* Volume discount information - Responsive layout */}
      {discountPercentage > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-green-800 text-sm sm:text-base">
              Volume Discount Applied!
            </span>
          </div>
          <p className="text-green-700 text-sm">
            You're saving <span className="font-semibold">{discountPercentage}%</span> on your order of {quantity} plates.
          </p>
        </div>
      )}

      {/* Discount tiers - Responsive table */}
      <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
        <h4 className="font-medium text-gray-900 mb-3 text-sm sm:text-base">Volume Discounts</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 text-xs sm:text-sm">
          <div className="text-center p-2 bg-white rounded border">
            <div className="font-semibold text-gray-900">1-4</div>
            <div className="text-gray-600">No discount</div>
          </div>
          <div className="text-center p-2 bg-white rounded border">
            <div className="font-semibold text-gray-900">5-9</div>
            <div className="text-green-600 font-medium">5% off</div>
          </div>
          <div className="text-center p-2 bg-white rounded border">
            <div className="font-semibold text-gray-900">10-24</div>
            <div className="text-green-600 font-medium">10% off</div>
          </div>
          <div className="text-center p-2 bg-white rounded border">
            <div className="font-semibold text-gray-900">25-49</div>
            <div className="text-green-600 font-medium">15% off</div>
          </div>
          <div className="text-center p-2 bg-white rounded border">
            <div className="font-semibold text-gray-900">50-99</div>
            <div className="text-green-600 font-medium">20% off</div>
          </div>
          <div className="text-center p-2 bg-white rounded border">
            <div className="font-semibold text-gray-900">100+</div>
            <div className="text-green-600 font-medium">25% off</div>
          </div>
        </div>
      </div>

      {/* Help information - Responsive layout */}
      <div className="bg-blue-50 rounded-lg p-3">
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="text-xs sm:text-sm text-blue-800">
            <p className="font-medium">Bulk pricing</p>
            <p className="text-blue-700">
              Order more plates to unlock volume discounts. Perfect for larger projects and businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 