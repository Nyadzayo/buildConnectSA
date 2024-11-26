export interface JobPostingForm {
  // Basic Information
  title: string;
  location: {
    address: string;
    coordinates?: { lat: number; lng: number };
    suburb: string;
    city: string;
    province: string;
    postalCode: string;
    workRadius: number;
  };
  projectType: {
    category: 'Residential' | 'Commercial' | 'Infrastructure' | 'Specialized';
    subCategory: string;
  };
  
  // Scope & Budget
  description: string;
  requirements: string[];
  materials: string[];
  complexity: 1 | 2 | 3 | 4 | 5;
  budget: {
    minimum: number;
    maximum: number;
    type: 'Fixed' | 'Hourly' | 'TimeAndMaterials';
    paymentSchedule: string[];
  };
  
  // Timeline
  timeline: {
    startDate: string;
    endDate: string;
    flexibility: 1 | 2 | 3;
    workingHours: string;
    milestones: { date: string; description: string }[];
  };
  
  // Requirements
  skills: string[];
  qualifications: {
    minimumYears: number;
    certifications: string[];
    equipment: string[];
  };
  
  // Additional Details
  safety: {
    requirements: string[];
    ppe: string[];
    siteInduction: boolean;
  };
  
  // Contact
  contact: {
    name: string;
    methods: ('Phone' | 'Email' | 'WhatsApp')[];
    preferredTimes: string[];
    languages: string[];
  };
  
  // Visibility
  visibility: {
    type: 'Standard' | 'Featured' | 'Urgent' | 'Private';
    invitedContractors?: string[];
  };
  
  // Compliance
  compliance: {
    cidbRequired: boolean;
    insuranceRequired: boolean;
    taxComplianceRequired: boolean;
  };
}

export type JobPostingStep = 
  | 'basics'
  | 'location'
  | 'scope'
  | 'requirements'
  | 'timeline'
  | 'budget'
  | 'contact'
  | 'review';