import React, { useState } from 'react';
import { usePlateConfiguration } from '../hooks/usePlateConfiguration';
import { DimensionSelector } from './DimensionSelector';
import { ColorSelector } from './ColorSelector';
import { QuantitySelector } from './QuantitySelector';
import { PlatePreview } from './PlatePreview';
import { PriceSummary } from './PriceSummary';
import { Button } from './ui/Button';

/**
 * Main component for configuring metal plates
 * Orchestrates all sub-components in a unified interface
 */
export const PlateConfigurator: React.FC = () => {
  const {
    configuration,
    priceEstimate,
    updateDimensions,
    changeUnit,
    updateColor,
    updateQuantity,
    resetConfiguration
  } = usePlateConfiguration();

  const [activeStep, setActiveStep] = useState<'dimensions' | 'color' | 'quantity' | 'summary'>('dimensions');
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle adding to cart
  const handleAddToCart = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Navigation between steps
  const nextStep = () => {
    const steps: Array<'dimensions' | 'color' | 'quantity' | 'summary'> = ['dimensions', 'color', 'quantity', 'summary'];
    const currentIndex = steps.indexOf(activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const steps: Array<'dimensions' | 'color' | 'quantity' | 'summary'> = ['dimensions', 'color', 'quantity', 'summary'];
    const currentIndex = steps.indexOf(activeStep);
    if (currentIndex > 0) {
      setActiveStep(steps[currentIndex - 1]);
    }
  };

  const goToStep = (step: 'dimensions' | 'color' | 'quantity' | 'summary') => {
    setActiveStep(step);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo in top left corner */}
        <div className="absolute top-4 left-4 z-10">
          <img 
            src="/LOGOTEXT.png" 
            alt="Zuschnittprofi Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Metal Plate Configurator
          </h1>
          <p className="text-lg text-gray-600">
            Design your custom metal plate with dimensions, color, and finish
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[
              { id: 'dimensions', label: 'Dimensions', icon: '📏' },
              { id: 'color', label: 'Color', icon: '🎨' },
              { id: 'quantity', label: 'Quantity', icon: '📦' },
              { id: 'summary', label: 'Summary', icon: '✅' }
            ].map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => goToStep(step.id as any)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
                    ${activeStep === step.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                    }
                  `}
                >
                  <span className="text-lg">{step.icon}</span>
                  <span className="font-medium">{step.label}</span>
                </button>
                {index < 3 && (
                  <div className="w-8 h-0.5 bg-gray-300 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step: Dimensions */}
            {activeStep === 'dimensions' && (
              <div className="card">
                <DimensionSelector
                  dimensions={configuration.dimensions}
                  onDimensionsChange={updateDimensions}
                  onUnitChange={changeUnit}
                />
              </div>
            )}

            {/* Step: Color */}
            {activeStep === 'color' && (
              <div className="card">
                <ColorSelector
                  selectedColor={configuration.color}
                  onColorChange={updateColor}
                />
              </div>
            )}

            {/* Step: Quantity */}
            {activeStep === 'quantity' && (
              <div className="card">
                <QuantitySelector
                  quantity={configuration.quantity}
                  onQuantityChange={updateQuantity}
                />
              </div>
            )}

            {/* Step: Summary - Show complete preview */}
            {activeStep === 'summary' && (
              <div className="card">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Configuration Summary
                  </h3>
                  <p className="text-sm text-gray-600">
                    Review all details of your custom plate
                  </p>
                </div>
                
                {/* Plate preview in main panel */}
                <PlatePreview configuration={configuration} />
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={activeStep === 'dimensions'}
              >
                Previous
              </Button>
              
              {activeStep !== 'summary' && (
                <Button
                  variant="primary"
                  onClick={nextStep}
                >
                  Next
                </Button>
              )}
            </div>
          </div>

          {/* Side panel */}
          <div className="space-y-6">
            {/* Show preview in all steps except summary */}
            {activeStep !== 'summary' && (
              <PlatePreview configuration={configuration} />
            )}
            
            {/* Show price summary only in summary step */}
            {activeStep === 'summary' && (
              <PriceSummary
                configuration={configuration}
                priceEstimate={priceEstimate}
                onAddToCart={handleAddToCart}
                onReset={resetConfiguration}
              />
            )}
          </div>
        </div>

        {/* Success message */}
        {showSuccess && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Plate added to cart successfully!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 