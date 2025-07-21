import React, { useState } from 'react';
import { Dimensions, Unit } from '../types';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

interface DimensionSelectorProps {
  dimensions: Dimensions;
  onDimensionsChange: (dimensions: Partial<Dimensions>) => void;
  onUnitChange: (unit: Unit) => void;
}

/**
 * Componente para configurar las dimensiones de la placa
 * Incluye validación y conversión automática de unidades
 */
export const DimensionSelector: React.FC<DimensionSelectorProps> = ({
  dimensions,
  onDimensionsChange,
  onUnitChange
}) => {
  const [errors, setErrors] = useState<{ length?: string; width?: string }>({});

  // Validar dimensiones
  const validateDimensions = (length: number, width: number): boolean => {
    const newErrors: { length?: string; width?: string } = {};

    if (length <= 0) {
      newErrors.length = 'La longitud debe ser mayor a 0';
    } else if (length > 10000) {
      newErrors.length = 'La longitud no puede exceder 10,000';
    }

    if (width <= 0) {
      newErrors.width = 'El ancho debe ser mayor a 0';
    } else if (width > 10000) {
      newErrors.width = 'El ancho no puede exceder 10,000';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar cambios en las dimensiones
  const handleDimensionChange = (field: 'length' | 'width', value: string) => {
    const numValue = parseFloat(value) || 0;
    
    if (validateDimensions(
      field === 'length' ? numValue : dimensions.length,
      field === 'width' ? numValue : dimensions.width
    )) {
      onDimensionsChange({ [field]: numValue });
    }
  };

  // Calcular área para mostrar
  const area = dimensions.length * dimensions.width;
  const areaInCm2 = dimensions.unit === 'mm' ? area / 100 : area;

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Dimensiones de la Placa
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Define el tamaño de tu placa de metal
        </p>
      </div>

      {/* Selector de unidad */}
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-700">Unidad:</span>
        <div className="flex bg-gray-100 rounded-lg p-1">
          {(['cm', 'mm'] as Unit[]).map((unit) => (
            <button
              key={unit}
              onClick={() => onUnitChange(unit)}
              className={`
                px-3 py-1 text-sm font-medium rounded-md transition-colors
                ${dimensions.unit === unit
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                }
              `}
            >
              {unit.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Campos de dimensiones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Longitud"
          type="number"
          min="0.1"
          max="10000"
          step="0.1"
          value={dimensions.length}
          onChange={(e) => handleDimensionChange('length', e.target.value)}
          error={errors.length}
          helperText={`Mín: 0.1, Máx: 10,000 ${dimensions.unit}`}
        />

        <Input
          label="Ancho"
          type="number"
          min="0.1"
          max="10000"
          step="0.1"
          value={dimensions.width}
          onChange={(e) => handleDimensionChange('width', e.target.value)}
          error={errors.width}
          helperText={`Mín: 0.1, Máx: 10,000 ${dimensions.unit}`}
        />
      </div>

      {/* Información del área */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Área total:</span>
          <span className="text-lg font-semibold text-gray-900">
            {areaInCm2.toFixed(2)} cm²
          </span>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          {dimensions.unit === 'mm' && (
            <span>Convertido de {area.toFixed(0)} mm²</span>
          )}
        </div>
      </div>

      {/* Botones de acción rápida */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onDimensionsChange({ length: 100, width: 50 })}
        >
          Estándar (100×50)
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onDimensionsChange({ length: 200, width: 100 })}
        >
          Grande (200×100)
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onDimensionsChange({ length: 50, width: 25 })}
        >
          Pequeña (50×25)
        </Button>
      </div>
    </div>
  );
}; 