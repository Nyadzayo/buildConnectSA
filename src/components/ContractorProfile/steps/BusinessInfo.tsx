import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { ContractorProfile } from '../../../types/contractor';

interface BusinessInfoProps {
  data: Partial<ContractorProfile>;
  onUpdate: (data: Partial<ContractorProfile>) => void;
}

export default function BusinessInfo({ data, onUpdate }: BusinessInfoProps) {
  const handleBusinessUpdate = (field: keyof ContractorProfile['business'], value: any) => {
    onUpdate({
      business: {
        ...data.business,
        [field]: value
      }
    });
  };

  const handleAddServiceArea = () => {
    const serviceAreas = [...(data.business?.serviceAreas || []), ''];
    handleBusinessUpdate('serviceAreas', serviceAreas);
  };

  const handleRemoveServiceArea = (index: number) => {
    const serviceAreas = data.business?.serviceAreas?.filter((_, i) => i !== index);
    handleBusinessUpdate('serviceAreas', serviceAreas);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Type
          </label>
          <select
            value={data.business?.type || ''}
            onChange={(e) => handleBusinessUpdate('type', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Business Type</option>
            <option value="SoleProprietor">Sole Proprietor</option>
            <option value="Partnership">Partnership</option>
            <option value="PrivateCompany">Private Company (Pty) Ltd</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Registration Number
          </label>
          <input
            type="text"
            value={data.business?.registrationNumber || ''}
            onChange={(e) => handleBusinessUpdate('registrationNumber', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            VAT Number (Optional)
          </label>
          <input
            type="text"
            value={data.business?.vatNumber || ''}
            onChange={(e) => handleBusinessUpdate('vatNumber', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year Established
          </label>
          <input
            type="number"
            min="1900"
            max={new Date().getFullYear()}
            value={data.business?.yearEstablished || ''}
            onChange={(e) => handleBusinessUpdate('yearEstablished', parseInt(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Employees
          </label>
          <input
            type="number"
            min="1"
            value={data.business?.employeeCount || ''}
            onChange={(e) => handleBusinessUpdate('employeeCount', parseInt(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Annual Turnover
          </label>
          <select
            value={data.business?.annualTurnover || ''}
            onChange={(e) => handleBusinessUpdate('annualTurnover', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Annual Turnover</option>
            <option value="Less1M">Less than R1 Million</option>
            <option value="1M-5M">R1 Million - R5 Million</option>
            <option value="5M-10M">R5 Million - R10 Million</option>
            <option value="More10M">More than R10 Million</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Areas
        </label>
        <div className="space-y-2">
          {data.business?.serviceAreas?.map((area, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={area}
                onChange={(e) => {
                  const serviceAreas = [...(data.business?.serviceAreas || [])];
                  serviceAreas[index] = e.target.value;
                  handleBusinessUpdate('serviceAreas', serviceAreas);
                }}
                placeholder="Enter service area"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={() => handleRemoveServiceArea(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <Minus className="h-5 w-5" />
              </button>
            </div>
          ))}
          <button
            onClick={handleAddServiceArea}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <Plus className="h-5 w-5 mr-1" />
            Add Service Area
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Maximum Work Radius (km)
        </label>
        <input
          type="number"
          min="0"
          value={data.business?.workRadius || ''}
          onChange={(e) => handleBusinessUpdate('workRadius', parseInt(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="mt-1 text-sm text-gray-500">
          Maximum distance you're willing to travel for projects
        </p>
      </div>
    </div>
  );
}