import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { ContractorProfile } from '../../../types/contractor';

interface CommercialInfoProps {
  data: Partial<ContractorProfile>;
  onUpdate: (data: Partial<ContractorProfile>) => void;
}

export default function CommercialInfo({ data, onUpdate }: CommercialInfoProps) {
  const handlePricingUpdate = (field: keyof ContractorProfile['commercial']['pricing'], value: any) => {
    onUpdate({
      commercial: {
        ...data.commercial,
        pricing: {
          ...data.commercial?.pricing,
          [field]: value
        }
      }
    });
  };

  const handleAddServiceTier = () => {
    const serviceTiers = [
      ...(data.commercial?.serviceTiers || []),
      { name: '', description: '', price: 0, features: [] }
    ];
    onUpdate({
      commercial: {
        ...data.commercial,
        serviceTiers
      }
    });
  };

  const handleRemoveServiceTier = (index: number) => {
    const serviceTiers = data.commercial?.serviceTiers?.filter((_, i) => i !== index);
    onUpdate({
      commercial: {
        ...data.commercial,
        serviceTiers
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Pricing Structure */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Pricing Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rate Type
            </label>
            <select
              value={data.commercial?.pricing?.rateType || ''}
              onChange={(e) => handlePricingUpdate('rateType', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Rate Type</option>
              <option value="Hourly">Hourly Rate</option>
              <option value="Daily">Daily Rate</option>
              <option value="ProjectBased">Project Based</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Standard Rate (R)
            </label>
            <input
              type="number"
              min="0"
              value={data.commercial?.pricing?.standardRate || ''}
              onChange={(e) => handlePricingUpdate('standardRate', parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Payment Terms */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Terms</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Methods
            </label>
            <select
              multiple
              value={data.commercial?.payment?.methods || []}
              onChange={(e) => {
                const methods = Array.from(e.target.selectedOptions, option => option.value);
                onUpdate({
                  commercial: {
                    ...data.commercial,
                    payment: {
                      ...data.commercial?.payment,
                      methods
                    }
                  }
                });
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="BankTransfer">Bank Transfer</option>
              <option value="CreditCard">Credit Card</option>
              <option value="Cash">Cash</option>
              <option value="PaymentPlatform">Payment Platform</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deposit Required
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={data.commercial?.payment?.depositRequired || false}
                  onChange={(e) => onUpdate({
                    commercial: {
                      ...data.commercial,
                      payment: {
                        ...data.commercial?.payment,
                        depositRequired: e.target.checked
                      }
                    }
                  })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2">Yes</span>
              </label>
              {data.commercial?.payment?.depositRequired && (
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={data.commercial?.payment?.depositPercentage || ''}
                  onChange={(e) => onUpdate({
                    commercial: {
                      ...data.commercial,
                      payment: {
                        ...data.commercial?.payment,
                        depositPercentage: parseInt(e.target.value)
                      }
                    }
                  })}
                  placeholder="Deposit %"
                  className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Service Tiers */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Service Tiers</h3>
          <button
            onClick={handleAddServiceTier}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <Plus className="h-5 w-5 mr-1" />
            Add Tier
          </button>
        </div>
        {data.commercial?.serviceTiers?.map((tier, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                value={tier.name}
                onChange={(e) => {
                  const serviceTiers = [...(data.commercial?.serviceTiers || [])];
                  serviceTiers[index] = { ...tier, name: e.target.value };
                  onUpdate({
                    commercial: {
                      ...data.commercial,
                      serviceTiers
                    }
                  });
                }}
                placeholder="Tier Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                value={tier.price}
                onChange={(e) => {
                  const serviceTiers = [...(data.commercial?.serviceTiers || [])];
                  serviceTiers[index] = { ...tier, price: parseInt(e.target.value) };
                  onUpdate({
                    commercial: {
                      ...data.commercial,
                      serviceTiers
                    }
                  });
                }}
                placeholder="Price"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <textarea
              value={tier.description}
              onChange={(e) => {
                const serviceTiers = [...(data.commercial?.serviceTiers || [])];
                serviceTiers[index] = { ...tier, description: e.target.value };
                onUpdate({
                  commercial: {
                    ...data.commercial,
                    serviceTiers
                  }
                });
              }}
              placeholder="Tier Description"
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500 mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleRemoveServiceTier(index)}
                className="flex items-center text-red-600 hover:text-red-700"
              >
                <Minus className="h-5 w-5 mr-1" />
                Remove Tier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cancellation Policy */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Cancellation Policy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notice Period (hours)
            </label>
            <input
              type="number"
              min="0"
              value={data.commercial?.cancellation?.notice || ''}
              onChange={(e) => onUpdate({
                commercial: {
                  ...data.commercial,
                  cancellation: {
                    ...data.commercial?.cancellation,
                    notice: parseInt(e.target.value)
                  }
                }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cancellation Charges
            </label>
            <input
              type="text"
              value={data.commercial?.cancellation?.charges || ''}
              onChange={(e) => onUpdate({
                commercial: {
                  ...data.commercial,
                  cancellation: {
                    ...data.commercial?.cancellation,
                    charges: e.target.value
                  }
                }
              })}
              placeholder="e.g., 50% of project value"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}