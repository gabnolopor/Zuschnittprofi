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
 * Componente para mostrar el resumen de la configuración y precio
 * Incluye detalles de la configuración y botones de acción
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
    <div className="card space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Resumen de tu Pedido
        </h3>
      </div>

      {/* Detalles de la configuración */}
      <div className="space-y-4">
        <div className="border-b border-gray-200 pb-4">
          <h4 className="font-medium text-gray-900 mb-3">Especificaciones</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Dimensiones:</span>
              <span className="font-medium">
                {configuration.dimensions.length} × {configuration.dimensions.width} {configuration.dimensions.unit}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Área:</span>
              <span className="font-medium">{areaInCm2.toFixed(2)} cm²</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Color:</span>
              <span className="font-medium">{colorOption?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cantidad:</span>
              <span className="font-medium">{configuration.quantity} unidad{configuration.quantity !== 1 ? 'es' : ''}</span>
            </div>
          </div>
        </div>

        {/* Desglose de precios */}
        <div className="border-b border-gray-200 pb-4">
          <h4 className="font-medium text-gray-900 mb-3">Desglose de Precios</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Precio base:</span>
              <span>{formatPrice(priceEstimate.basePrice)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Multiplicador color:</span>
              <span>×{priceEstimate.colorMultiplier.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Multiplicador tamaño:</span>
              <span>×{priceEstimate.sizeMultiplier.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Precio total */}
        <div className="bg-primary-50 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">Precio Total:</span>
            <span className="text-2xl font-bold text-primary-600">
              {formatPrice(priceEstimate.totalPrice)}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Precio estimado, puede variar según disponibilidad
          </p>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="space-y-3">
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={onAddToCart}
        >
          Agregar al Carrito
        </Button>
        
        <Button
          variant="outline"
          size="md"
          className="w-full"
          onClick={onReset}
        >
          Reiniciar Configuración
        </Button>
      </div>

      {/* Información adicional */}
      <div className="bg-blue-50 rounded-lg p-3">
        <div className="flex items-start space-x-2">
          <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-medium">Entrega rápida</p>
            <p className="text-blue-700">Tiempo de entrega estimado: 3-5 días hábiles</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 