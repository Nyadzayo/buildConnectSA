import React from 'react';
import { JobPostingForm } from '../../../types/jobPosting';

interface BasicInfoProps {
  data: Partial<JobPostingForm>;
  onUpdate: (data: Partial<JobPostingForm>) => void;
}

export default function BasicInfo({ data, onUpdate }: BasicInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Title
        </label>
        <input
          type="text"
          maxLength={80}
          value={data.title || ''}
          onChange={(e) => onUpdate({ title: e.target.value })}
          placeholder="e.g., Residential Kitchen Renovation - Complete Remodel"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="mt-1 text-sm text-gray-500">
          {data.title?.length || 0}/80 characters
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Type
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={data.projectType?.category || ''}
            onChange={(e) => onUpdate({
              projectType: {
                ...data.projectType,
                category: e.target.value as JobPostingForm['projectType']['category']
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Specialized">Specialized</option>
          </select>

          <select
            value={data.projectType?.subCategory || ''}
            onChange={(e) => onUpdate({
              projectType: {
                ...data.projectType,
                subCategory: e.target.value
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Sub-Category</option>
            {data.projectType?.category === 'Residential' && (
              <>
                <option value="New Build">New Build</option>
                <option value="Renovation">Renovation</option>
                <option value="Extension">Extension</option>
                <option value="Maintenance">Maintenance</option>
              </>
            )}
            {/* Add other category options */}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Visibility
        </label>
        <select
          value={data.visibility?.type || ''}
          onChange={(e) => onUpdate({
            visibility: {
              type: e.target.value as JobPostingForm['visibility']['type']
            }
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="Standard">Standard Listing (Free)</option>
          <option value="Featured">Featured Listing (R99)</option>
          <option value="Urgent">Urgent Project (R149)</option>
          <option value="Private">Private Invitation Only</option>
        </select>
      </div>
    </div>
  );
}