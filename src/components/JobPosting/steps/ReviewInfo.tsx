import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { JobPostingForm } from '../../../types/jobPosting';

interface ReviewInfoProps {
  data: Partial<JobPostingForm>;
  onUpdate: (data: Partial<JobPostingForm>) => void;
  onSubmit: () => void;
}

export default function ReviewInfo({ data, onSubmit }: ReviewInfoProps) {
  const isComplete = (section: keyof JobPostingForm): boolean => {
    if (!data[section]) return false;
    
    switch (section) {
      case 'title':
        return Boolean(data.title?.length);
      case 'location':
        return Boolean(data.location?.address && data.location?.city);
      case 'description':
        return Boolean(data.description?.length);
      case 'budget':
        return Boolean(data.budget?.minimum && data.budget?.maximum);
      case 'timeline':
        return Boolean(data.timeline?.startDate && data.timeline?.endDate);
      case 'contact':
        return Boolean(data.contact?.name && data.contact?.methods?.length);
      default:
        return true;
    }
  };

  const formatCurrency = (amount?: number) => {
    if (!amount) return '-';
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR'
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-medium text-blue-900 mb-2">Review Your Job Posting</h3>
        <p className="text-blue-700">
          Please review all the information below before submitting your job posting.
          Make sure everything is accurate and complete.
        </p>
      </div>

      <section className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            Basic Information
            {isComplete('title') ? (
              <Check className="h-5 w-5 text-green-500 ml-2" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500 ml-2" />
            )}
          </h4>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Project Title</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.title || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Project Type</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {data.projectType?.category} - {data.projectType?.subCategory}
              </dd>
            </div>
          </dl>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            Location Details
            {isComplete('location') ? (
              <Check className="h-5 w-5 text-green-500 ml-2" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500 ml-2" />
            )}
          </h4>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.location?.address || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Area</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {data.location?.suburb}, {data.location?.city}
              </dd>
            </div>
          </dl>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            Budget Information
            {isComplete('budget') ? (
              <Check className="h-5 w-5 text-green-500 ml-2" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500 ml-2" />
            )}
          </h4>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Budget Range</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {formatCurrency(data.budget?.minimum)} - {formatCurrency(data.budget?.maximum)}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Payment Type</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.budget?.type || '-'}</dd>
            </div>
          </dl>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            Timeline
            {isComplete('timeline') ? (
              <Check className="h-5 w-5 text-green-500 ml-2" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500 ml-2" />
            )}
          </h4>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Project Duration</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {data.timeline?.startDate} to {data.timeline?.endDate}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Working Hours</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.timeline?.workingHours || '-'}</dd>
            </div>
          </dl>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            Contact Information
            {isComplete('contact') ? (
              <Check className="h-5 w-5 text-green-500 ml-2" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500 ml-2" />
            )}
          </h4>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Contact Person</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.contact?.name || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Preferred Contact Methods</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {data.contact?.methods?.join(', ') || '-'}
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
          disabled={!Object.keys(data).every(key => isComplete(key as keyof JobPostingForm))}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Job Posting
        </button>
      </div>
    </div>
  );
}