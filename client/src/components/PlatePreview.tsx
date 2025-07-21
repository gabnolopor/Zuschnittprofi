import React from 'react';
import { PlateConfiguration } from '../types';
import { getColorOption } from '../utils/pricing';

interface PlatePreviewProps {
  configuration: PlateConfiguration;
}

/**
 * Componente para mostrar una vista previa visual de la placa
 * Representa la placa con las dimensiones y color seleccionados
 */
export const PlatePreview: React.FC<PlatePreviewProps> = ({ configuration }) => {
  const colorOption = getColorOption(configuration.color);
  
  // Calcular dimensiones relativas para la visualización
  const maxDimension = Math.max(configuration.dimensions.length, configuration.dimensions.width);
  const scale = Math.min(200 / maxDimension, 1); // Máximo 200px
  
  const displayWidth = configuration.dimensions.width * scale;
  const displayHeight = configuration.dimensions.length * scale;

  return (
    <div className="card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Vista Previa
        </h3>
        <p className="text-sm text-gray-600">
          Visualización de tu placa personalizada
        </p>
      </div>

      {/* Contenedor de la vista previa */}
      <div className="relative bg-gray-100 rounded-lg p-6 flex items-center justify-center min-h-[300px]">
        {/* Placa */}
        <div
          className="relative border-2 border-gray-400 shadow-lg"
          style={{
            width: `${displayWidth}px`,
            height: `${displayHeight}px`,
            backgroundColor: colorOption?.hexColor || '#6c757d',
            opacity: 1
          }}
        >
          {/* Efecto de brillo */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)'
            }}
          />
          
          {/* Dimensiones */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 font-medium">
            {configuration.dimensions.length} {configuration.dimensions.unit}
          </div>
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-gray-600 font-medium">
            {configuration.dimensions.width} {configuration.dimensions.unit}
          </div>
        </div>

        {/* Información del color */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md">
          <div className="flex items-center space-x-2">
            <div
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: colorOption?.hexColor }}
            />
            <span className="text-sm font-medium text-gray-900">
              {colorOption?.name}
            </span>
          </div>
        </div>

        {/* Escala */}
        <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-2 shadow-md">
          <div className="text-xs text-gray-600">
            <div className="font-medium">Escala: 1:{Math.round(1/scale)}</div>
            <div>Área: {(configuration.dimensions.length * configuration.dimensions.width).toFixed(0)} {configuration.dimensions.unit}²</div>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="font-medium text-gray-900">Dimensiones</div>
          <div className="text-gray-600">
            {configuration.dimensions.length} × {configuration.dimensions.width} {configuration.dimensions.unit}
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="font-medium text-gray-900">Acabado</div>
          <div className="text-gray-600">{colorOption?.description}</div>
        </div>
      </div>
    </div>
  );
}; 