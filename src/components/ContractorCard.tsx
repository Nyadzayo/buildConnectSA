import React from 'react';
import { Star, MapPin, CheckCircle } from 'lucide-react';
import { Contractor } from '../types';

interface ContractorCardProps {
  contractor: Contractor;
}

export default function ContractorCard({ contractor }: ContractorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <img 
          src={contractor.profileImage} 
          alt={contractor.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {contractor.name}
                {contractor.verified && (
                  <CheckCircle className="h-5 w-5 text-blue-500 inline ml-2" />
                )}
              </h3>
              <div className="flex items-center mt-1 text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{contractor.location}</span>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              contractor.subscription === 'Pro' 
                ? 'bg-purple-100 text-purple-800'
                : contractor.subscription === 'Premium'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {contractor.subscription}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {contractor.skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span className="font-semibold">{contractor.rating}</span>
              <span className="text-gray-500 ml-2">({contractor.completedJobs} jobs)</span>
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}