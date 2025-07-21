import React from 'react';
import { Button } from './ui/Button';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  maxQuantity?: number;
}

/**
 * Componente para seleccionar la cantidad de placas
 * Incluye controles para incrementar/decrementar y entrada directa
 */
export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  maxQuantity = 100
}) => {
  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleInputChange = (value: string) => {
    const numValue = parseInt(value) || 1;
    const clampedValue = Math.max(1, Math.min(maxQuantity, numValue));
    onQuantityChange(clampedValue);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Cantidad
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Selecciona cuántas placas necesitas
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <Button
            variant="outline"
            size="sm"
            className="rounded-r-none border-r-0"
            onClick={handleDecrement}
            disabled={quantity <= 1}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </Button>
          
          <input
            type="number"
            min="1"
            max={maxQuantity}
            value={quantity}
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-16 text-center border-0 focus:ring-0 text-lg font-medium"
          />
          
          <Button
            variant="outline"
            size="sm"
            className="rounded-l-none border-l-0"
            onClick={handleIncrement}
            disabled={quantity >= maxQuantity}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </Button>
        </div>

        <span className="text-sm text-gray-600">
          unidad{quantity !== 1 ? 'es' : ''}
        </span>
      </div>

      {/* Botones de cantidad rápida */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onQuantityChange(1)}
          className={quantity === 1 ? 'bg-primary-50 border-primary-200 text-primary-700' : ''}
        >
          1
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onQuantityChange(5)}
          className={quantity === 5 ? 'bg-primary-50 border-primary-200 text-primary-700' : ''}
        >
          5
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onQuantityChange(10)}
          className={quantity === 10 ? 'bg-primary-50 border-primary-200 text-primary-700' : ''}
        >
          10
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onQuantityChange(25)}
          className={quantity === 25 ? 'bg-primary-50 border-primary-200 text-primary-700' : ''}
        >
          25
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onQuantityChange(50)}
          className={quantity === 50 ? 'bg-primary-50 border-primary-200 text-primary-700' : ''}
        >
          50
        </Button>
      </div>

      {/* Información adicional */}
      <div className="bg-blue-50 rounded-lg p-3">
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-medium">Descuentos por volumen</p>
            <p className="text-blue-700">Pedidos de más de 10 unidades reciben descuento automático</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 