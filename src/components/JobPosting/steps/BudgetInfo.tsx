import React from 'react';
import { Plus, Minus, DollarSign } from 'lucide-react';
import { JobPostingForm } from '../../../types/jobPosting';

interface BudgetInfoProps {
  data: Partial<JobPostingForm>;
  onUpdate: (data: Partial<JobPostingForm>) => void;
}

export default function BudgetInfo({ data, onUpdate }: BudgetInfoProps) {
  const handleAddPaymentSchedule = () => {
    const paymentSchedule = [...(data.budget?.paymentSchedule || []), ''];
    onUpdate({
      budget: {
        ...data.budget,
        paymentSchedule
      }
    });
  };

  const handleRemovePaymentSchedule = (index: number) => {
    const paymentSchedule = data.budget?.paymentSchedule?.filter((_, i) => i !== index);
    onUpdate({
      budget: {
        ...data.budget,
        paymentSchedule
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Budget (R)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            <input
              type="number"
              min="0"
              value={data.budget?.minimum || ''}
              onChange={(e) => onUpdate({
                budget: {
                  ...data.budget,
                  minimum: parseInt(e.target.value)
                }
              })}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Budget (R)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            <input
              type="number"
              min={data.budget?.minimum || 0}
              value={data.budget?.maximum || ''}
              onChange={(e) => onUpdate({
                budget: {
                  ...data.budget,
                  maximum: parseInt(e.target.value)
                }
              })}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Budget Type
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['Fixed', 'Hourly', 'TimeAndMaterials'] as const).map((type) => (
            <button
              key={type}
              onClick={() => onUpdate({
                budget: {
                  ...data.budget,
                  type
                }
              })}
              className={`py-2 px-4 rounded-lg border ${
                data.budget?.type === type
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-300 hover:border-blue-600'
              }`}
            >
              {type === 'TimeAndMaterials' ? 'Time & Materials' : type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Payment Schedule
        </label>
        {data.budget?.paymentSchedule?.map((schedule, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={schedule}
              onChange={(e) => {
                const paymentSchedule = [...(data.budget?.paymentSchedule || [])];
                paymentSchedule[index] = e.target.value;
                onUpdate({
                  budget: {
                    ...data.budget,
                    paymentSchedule
                  }
                });
              }}
              placeholder="e.g., 30% upfront, 40% at milestone 1..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => handleRemovePaymentSchedule(index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Minus className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button
          onClick={handleAddPaymentSchedule}
          className="flex items-center text-blue-600 hover:text-blue-700 mt-2"
        >
          <Plus className="h-5 w-5 mr-1" />
          Add Payment Milestone
        </button>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Payment Protection</h3>
        <p className="text-sm text-gray-600">
          All payments are securely held in escrow until you approve the work. 
          We release payments according to the agreed schedule and only after your confirmation.
        </p>
      </div>
    </div>
  );
}