import React from 'react';
import { ContractorProfile } from '../../../types/contractor';

interface ComplianceInfoProps {
  data: Partial<ContractorProfile>;
  onUpdate: (data: Partial<ContractorProfile>) => void;
}

export default function ComplianceInfo({ data, onUpdate }: ComplianceInfoProps) {
  const handleInsuranceUpdate = (type: 'professionalIndemnity' | 'publicLiability' | 'workersCompensation', field: string, value: any) => {
    onUpdate({
      compliance: {
        ...data.compliance,
        [type]: {
          ...data.compliance?.[type],
          [field]: value
        }
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Professional Indemnity Insurance */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-blue-900 mb-4">Professional Indemnity Insurance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Insurance Provider
            </label>
            <input
              type="text"
              value={data.compliance?.professionalIndemnity?.provider || ''}
              onChange={(e) => handleInsuranceUpdate('professionalIndemnity', 'provider', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Policy Number
            </label>
            <input
              type="text"
              value={data.compliance?.professionalIndemnity?.policyNumber || ''}
              onChange={(e) => handleInsuranceUpdate('professionalIndemnity', 'policyNumber', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Coverage Amount (R)
            </label>
            <input
              type="number"
              min="0"
              step="100000"
              value={data.compliance?.professionalIndemnity?.coverage || ''}
              onChange={(e) => handleInsuranceUpdate('professionalIndemnity', 'coverage', parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="date"
              value={data.compliance?.professionalIndemnity?.expiryDate || ''}
              onChange={(e) => handleInsuranceUpdate('professionalIndemnity', 'expiryDate', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Public Liability Insurance */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-green-900 mb-4">Public Liability Insurance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Insurance Provider
            </label>
            <input
              type="text"
              value={data.compliance?.publicLiability?.provider || ''}
              onChange={(e) => handleInsuranceUpdate('publicLiability', 'provider', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Policy Number
            </label>
            <input
              type="text"
              value={data.compliance?.publicLiability?.policyNumber || ''}
              onChange={(e) => handleInsuranceUpdate('publicLiability', 'policyNumber', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Coverage Amount (R)
            </label>
            <input
              type="number"
              min="0"
              step="100000"
              value={data.compliance?.publicLiability?.coverage || ''}
              onChange={(e) => handleInsuranceUpdate('publicLiability', 'coverage', parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="date"
              value={data.compliance?.publicLiability?.expiryDate || ''}
              onChange={(e) => handleInsuranceUpdate('publicLiability', 'expiryDate', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Workers Compensation */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-yellow-900 mb-4">Workers Compensation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Insurance Provider
            </label>
            <input
              type="text"
              value={data.compliance?.workersCompensation?.provider || ''}
              onChange={(e) => handleInsuranceUpdate('workersCompensation', 'provider', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Policy Number
            </label>
            <input
              type="text"
              value={data.compliance?.workersCompensation?.policyNumber || ''}
              onChange={(e) => handleInsuranceUpdate('workersCompensation', 'policyNumber', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="date"
              value={data.compliance?.workersCompensation?.expiryDate || ''}
              onChange={(e) => handleInsuranceUpdate('workersCompensation', 'expiryDate', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Note: Maintaining valid insurance coverage is essential for protecting your business and meeting client requirements. 
          Please ensure all policies are kept up to date.
        </p>
      </div>
    </div>
  );
}