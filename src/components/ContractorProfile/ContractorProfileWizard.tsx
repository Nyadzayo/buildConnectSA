import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ContractorProfile } from '../../types/contractor';
import PersonalInfo from './steps/PersonalInfo';
import CredentialsInfo from './steps/CredentialsInfo';
import ExpertiseInfo from './steps/ExpertiseInfo';
import BusinessInfo from './steps/BusinessInfo';
import ComplianceInfo from './steps/ComplianceInfo';
import PortfolioInfo from './steps/PortfolioInfo';
import OperationsInfo from './steps/OperationsInfo';
import CommercialInfo from './steps/CommercialInfo';
import ReviewProfile from './steps/ReviewProfile';

type ProfileStep = 
  | 'personal'
  | 'credentials'
  | 'expertise'
  | 'business'
  | 'compliance'
  | 'portfolio'
  | 'operations'
  | 'commercial'
  | 'review';

const STEPS: ProfileStep[] = [
  'personal',
  'credentials',
  'expertise',
  'business',
  'compliance',
  'portfolio',
  'operations',
  'commercial',
  'review'
];

const STEP_TITLES: Record<ProfileStep, string> = {
  personal: 'Personal Information',
  credentials: 'Professional Credentials',
  expertise: 'Expertise & Skills',
  business: 'Business Details',
  compliance: 'Compliance & Insurance',
  portfolio: 'Portfolio & Projects',
  operations: 'Operations',
  commercial: 'Commercial Terms',
  review: 'Review Profile'
};

export default function ContractorProfileWizard() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [profile, setProfile] = useState<Partial<ContractorProfile>>({});

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
    // TODO: Implement profile submission
    console.log('Profile submitted:', profile);
  };

  const renderStep = () => {
    const step = STEPS[currentStep];
    const props = {
      data: profile,
      onUpdate: (newData: Partial<ContractorProfile>) => 
        setProfile({ ...profile, ...newData })
    };

    switch (step) {
      case 'personal':
        return <PersonalInfo {...props} />;
      case 'credentials':
        return <CredentialsInfo {...props} />;
      case 'expertise':
        return <ExpertiseInfo {...props} />;
      case 'business':
        return <BusinessInfo {...props} />;
      case 'compliance':
        return <ComplianceInfo {...props} />;
      case 'portfolio':
        return <PortfolioInfo {...props} />;
      case 'operations':
        return <OperationsInfo {...props} />;
      case 'commercial':
        return <CommercialInfo {...props} />;
      case 'review':
        return <ReviewProfile {...props} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create Your Contractor Profile</h1>
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
          {currentStep === STEPS.length - 1 ? 'Submit Profile' : 'Next'}
          {currentStep !== STEPS.length - 1 && (
            <ChevronRight className="w-5 h-5 ml-2" />
          )}
        </button>
      </div>
    </div>
  );
}