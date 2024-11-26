export interface ContractorProfile {
  // Personal Information
  personal: {
    legalName: string;
    tradingName?: string;
    idNumber: string;
    dateOfBirth: string;
    nationality: string;
    languages: string[];
    profilePhoto: string;
    videoIntro?: string;
    contact: {
      mobile: string;
      whatsapp?: string;
      email: string;
      address: {
        street: string;
        city: string;
        province: string;
        postalCode: string;
        coordinates?: {
          lat: number;
          lng: number;
        };
      };
    };
    website?: string;
    socialMedia?: {
      facebook?: string;
      linkedin?: string;
      instagram?: string;
    };
  };

  // Professional Credentials
  credentials: {
    cidb: {
      registrationNumber: string;
      level: number;
      expiryDate: string;
      specializations: string[];
    };
    taxCompliance: {
      number: string;
      expiryDate: string;
      status: 'Valid' | 'Expired' | 'Pending';
    };
    memberships: Array<{
      organization: string;
      membershipNumber: string;
      validUntil: string;
    }>;
    certifications: Array<{
      name: string;
      issuedBy: string;
      issuedDate: string;
      expiryDate: string;
      documentUrl?: string;
    }>;
    qualifications: Array<{
      degree: string;
      institution: string;
      year: number;
      documentUrl?: string;
    }>;
  };

  // Expertise
  expertise: {
    primaryTrade: string;
    secondaryTrades: string[];
    technicalSkills: string[];
    equipment: string[];
    software: string[];
    experienceYears: number;
    complexityLevel: 1 | 2 | 3 | 4 | 5;
  };

  // Business Details
  business: {
    type: 'SoleProprietor' | 'Partnership' | 'PrivateCompany' | 'Other';
    registrationNumber: string;
    vatNumber?: string;
    yearEstablished: number;
    employeeCount: number;
    annualTurnover: 'Less1M' | '1M-5M' | '5M-10M' | 'More10M';
    serviceAreas: string[];
    workRadius: number;
  };

  // Compliance & Insurance
  compliance: {
    professionalIndemnity?: {
      provider: string;
      policyNumber: string;
      coverage: number;
      expiryDate: string;
    };
    publicLiability?: {
      provider: string;
      policyNumber: string;
      coverage: number;
      expiryDate: string;
    };
    workersCompensation: {
      provider: string;
      policyNumber: string;
      expiryDate: string;
    };
    legalHistory?: {
      incidents: Array<{
        date: string;
        description: string;
        resolution: string;
      }>;
    };
  };

  // Portfolio
  portfolio: {
    projects: Array<{
      title: string;
      description: string;
      value: number;
      completionDate: string;
      duration: number;
      images: Array<{
        url: string;
        caption: string;
      }>;
      videos?: Array<{
        url: string;
        description: string;
      }>;
      testimonial?: {
        clientName: string;
        rating: number;
        comment: string;
        date: string;
      };
    }>;
    metrics: {
      completedProjects: number;
      averageRating: number;
      onTimeCompletion: number;
      repeatClients: number;
    };
  };

  // Operations
  operations: {
    workingHours: {
      weekdays: string;
      weekends?: string;
      holidays?: string;
    };
    responseTime: number; // in hours
    projectValues: {
      minimum: number;
      maximum: number;
    };
    ownedEquipment: string[];
    technology: string[];
  };

  // Commercial
  commercial: {
    pricing: {
      rateType: 'Hourly' | 'Daily' | 'ProjectBased';
      standardRate: number;
      specializedRate?: number;
      callOutFee?: number;
    };
    payment: {
      terms: string;
      methods: string[];
      depositRequired: boolean;
      depositPercentage?: number;
    };
    serviceTiers: Array<{
      name: string;
      description: string;
      price: number;
      features: string[];
    }>;
    cancellation: {
      policy: string;
      charges: string;
      notice: number; // in hours
    };
  };

  // Platform Settings
  settings: {
    profileVisibility: 'Public' | 'Private' | 'Verified';
    notificationPreferences: {
      email: boolean;
      sms: boolean;
      whatsapp: boolean;
      pushNotifications: boolean;
    };
    availability: 'Available' | 'Busy' | 'Unavailable';
    searchTags: string[];
  };
}</content>