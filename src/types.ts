export interface Job {
  id: string;
  title: string;
  description: string;
  budget: number;
  location: string;
  type: 'Residential' | 'Commercial' | 'Industrial';
  urgency: 'Urgent' | 'Standard';
  skills: string[];
  postedDate: string;
  clientId: string;
  images: {
    url: string;
    caption: string;
  }[];
  inspirationImages?: {
    url: string;
    description: string;
  }[];
  featured?: boolean;
}

export interface Contractor {
  id: string;
  name: string;
  email: string;
  phone: string;
  skills: string[];
  rating: number;
  completedJobs: number;
  verified: boolean;
  subscription: 'Basic' | 'Premium' | 'Pro';
  location: string;
  profileImage: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  company?: string;
  location: string;
  projectsPosted: number;
  rating: number;
  verified: boolean;
}