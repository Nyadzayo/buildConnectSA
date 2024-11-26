import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { ContractorProfile } from '../../../types/contractor';

interface ReviewProfileProps {
  data: Partial<ContractorProfile>;
  onUpdate: (data: Partial<ContractorProfile>) => void;
  onSubmit: () => void;
}

export default function ReviewProfile({ data, onSubmit }: ReviewProfileProps) {
  const isComplete = (section: keyof ContractorProfile): boolean => {
    if (!data[section]) return false;
    
    switch (section) {
      case 'personal':
        return Boolean(data.personal?.legalName && data.personal?.contact?.email);
      case 'credentials':
        return Boolean(data.credentials?.cidb?.registrationNumber);
      case 'expertise':
        return Boolean(data.expertise?.primaryTrade);
      case 'business':
        return Boolean(data.business?.registrationNumber);
      case 'compliance':
        return Boolean(data.compliance?.workersCompensation);
      case 'portfolio':
        return Boolean(data.portfolio?.projects?.length);
      case 'operations':
        return Boolean(data.operations?.workingHours);
      case 'commercial':
        return Boolean(data.commercial?.pricing);
      default:
        return true;
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-medium text-blue-900 mb-2">Review Your Profile</h3>
        <p className="text-blue-700">
          Please review all the information below before submitting your profile.
          Make sure everything is accurate and complete.
        </p>
      </div>

      <section className="space-y-6">
        {/* Personal Information */}
        <div className="border-b border-gray-200 pb-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            Personal Information
            {isComplete('personal') ? (
              <Check className="h-5 w-5 text-green-500 ml-2" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500 ml-2" />
            )}
          </h4>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Legal Name</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.personal?.legalName || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Contact Email</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.personal?.contact?.email || '-'}</dd>
            </div>
          </dl>
        </div>

        {/* Professional Credentials */}
        <div className="border-b border-gray-200 pb-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            Professional Credentials
            {isComplete('credentials') ? (
              <Check className="h-5 w-5 text-green-500 ml-2" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500 ml-2" />
            )}
          </h4>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">CIDB Registration</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {data.credentials?.cidb?.registrationNumber || '-'}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">CIDB Level</dt>
              <dd className="mt-1 text-sm text-gray-900">
                Level {data.credentials?.cidb?.level || '-'}
              </dd>
            </div>
          </dl>
        </div>

        {/* Business Details */}
        <div className="border-b border-gray-200 pb-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            Business Details
            {isComplete('business') ? (
              <Check className="h-5 w-5 text-green-500 ml-2" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500 ml-2" />
            )}
          </h4>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Business Type</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.business?.type || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Registration Number</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {data.business?.registrationNumber || '-'}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="flex items-center justify-between pt-6">
        <div className="text-sm text-gray-500">
          * Please ensure all sections are complete before submitting
        </div>
        <button
          onClick={onSubmit}
          disabled={!Object.keys(data).every(key => isComplete(key as keyof ContractorProfile))}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Profile
        </button>
      </div>
    </div>
  );
}