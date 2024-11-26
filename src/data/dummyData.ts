import { Job, Contractor, Client } from '../types';

export const dummyJobs: Job[] = [
  {
    id: '1',
    title: 'Modern House Renovation',
    description: 'Complete renovation of a 3-bedroom house including kitchen and bathrooms.',
    budget: 250000,
    location: 'Sandton, Johannesburg',
    type: 'Residential',
    urgency: 'Standard',
    skills: ['General Construction', 'Plumbing', 'Electrical'],
    postedDate: '2024-03-15',
    clientId: '1',
    featured: true,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        caption: 'Main house exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
        caption: 'Kitchen area'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
        caption: 'Master bathroom'
      }
    ],
    inspirationImages: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
        description: 'Desired kitchen style'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
        description: 'Bathroom inspiration'
      }
    ]
  },
  {
    id: '2',
    title: 'Office Space Fitout',
    description: 'Commercial office space fitout for a tech company. 500sqm space.',
    budget: 750000,
    location: 'Rosebank, Johannesburg',
    type: 'Commercial',
    urgency: 'Urgent',
    skills: ['Commercial Fitout', 'HVAC', 'Electrical'],
    postedDate: '2024-03-14',
    clientId: '2',
    featured: true,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        caption: 'Current office space'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
        caption: 'Meeting room area'
      }
    ],
    inspirationImages: [
      {
        url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
        description: 'Modern office layout'
      }
    ]
  },
  {
    id: '3',
    title: 'Warehouse Expansion',
    description: 'Industrial warehouse expansion project including new loading bays.',
    budget: 1500000,
    location: 'Midrand, Gauteng',
    type: 'Industrial',
    urgency: 'Standard',
    skills: ['Industrial Construction', 'Steel Work', 'Civil Engineering'],
    postedDate: '2024-03-13',
    clientId: '3',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
        caption: 'Current warehouse'
      },
      {
        url: 'https://images.unsplash.com/photo-1586528116493-ce42b3fbf620?w=800',
        caption: 'Loading bay area'
      }
    ]
  }
];

export const dummyContractors: Contractor[] = [
  {
    id: '1',
    name: 'John Builder',
    email: 'kelvin.nyadzayo16@gmail.com',
    phone: '+27 82 123 4567',
    skills: ['General Construction', 'Project Management', 'Renovation'],
    rating: 4.8,
    completedJobs: 45,
    verified: true,
    subscription: 'Pro',
    location: 'Johannesburg',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  {
    id: '2',
    name: 'Sarah Mason',
    email: 'kelvin.nyadzayo16@gmail.com',
    phone: '+27 83 234 5678',
    skills: ['Commercial Fitout', 'Interior Construction', 'HVAC'],
    rating: 4.9,
    completedJobs: 38,
    verified: true,
    subscription: 'Premium',
    location: 'Pretoria',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
  }
];

export const dummyClients: Client[] = [
  {
    id: '1',
    name: 'Property Developments Ltd',
    email: 'kelvin.nyadzayo16@gmail.com',
    company: 'Property Developments Ltd',
    location: 'Sandton',
    projectsPosted: 12,
    rating: 4.7,
    verified: true
  },
  {
    id: '2',
    name: 'Tech Spaces Inc',
    email: 'kelvin.nyadzayo16@gmail.com',
    company: 'Tech Spaces Inc',
    location: 'Rosebank',
    projectsPosted: 5,
    rating: 4.9,
    verified: true
  }
];