import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { JobPostingForm, JobPostingStep } from '../../types/jobPosting';
import BasicInfo from './steps/BasicInfo';
import LocationInfo from './steps/LocationInfo';
import ScopeInfo from './steps/ScopeInfo';
import RequirementsInfo from './steps/RequirementsInfo';
import TimelineInfo from './steps/TimelineInfo';
import BudgetInfo from './steps/BudgetInfo';
import ContactInfo from './steps/ContactInfo';
import ReviewInfo from './steps/ReviewInfo';

const STEPS: JobPostingStep[] = [
  'basics',
  'location',
  'scope',
  'requirements',
  'timeline',
  'budget',
  'contact',
  'review'
];

const STEP_TITLES: Record<JobPostingStep, string> = {
  basics: 'Basic Information',
  location: 'Location Details',
  scope: 'Project Scope',
  requirements: 'Requirements',
  timeline: 'Timeline',
  budget: 'Budget',
  contact: 'Contact Information',
  review: 'Review & Submit'
};

export default function JobPostingWizard() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<Partial<JobPostingForm>>({});

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const renderStep = () => {
    const step = STEPS[currentStep];
    const props = {
      data: formData,
      onUpdate: (newData: Partial<JobPostingForm>) => 
        setFormData({ ...formData, ...newData })
    };

    switch (step) {
      case 'basics':
        return <BasicInfo {...props} />;
      case 'location':
        return <LocationInfo {...props} />;
      case 'scope':
        return <ScopeInfo {...props} />;
      case 'requirements':
        return <RequirementsInfo {...props} />;
      case 'timeline':
        return <TimelineInfo {...props} />;
      case 'budget':
        return <BudgetInfo {...props} />;
      case 'contact':
        return <ContactInfo {...props} />;
      case 'review':
        return <ReviewInfo {...props} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Post a New Job</h1>
        <p className="mt-2 text-gray-600">
          Step {currentStep + 1} of {STEPS.length}: {STEP_TITLES[STEPS[currentStep]]}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
        <div 
          className="h-full bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
        />
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-lg
                    hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>

        <button
          onClick={currentStep === STEPS.length - 1 ? handleSubmit : handleNext}
          className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg
                    hover:bg-blue-700"
        >
          {currentStep === STEPS.length - 1 ? 'Submit' : 'Next'}
          {currentStep !== STEPS.length - 1 && (
            <ChevronRight className="w-5 h-5 ml-2" />
          )}
        </button>
      </div>
    </div>
  );
}