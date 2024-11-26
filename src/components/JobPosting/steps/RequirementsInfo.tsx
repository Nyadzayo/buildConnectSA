import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { JobPostingForm } from '../../../types/jobPosting';

interface RequirementsInfoProps {
  data: Partial<JobPostingForm>;
  onUpdate: (data: Partial<JobPostingForm>) => void;
}

export default function RequirementsInfo({ data, onUpdate }: RequirementsInfoProps) {
  const handleAddSkill = () => {
    const skills = [...(data.skills || []), ''];
    onUpdate({ skills });
  };

  const handleRemoveSkill = (index: number) => {
    const skills = data.skills?.filter((_, i) => i !== index);
    onUpdate({ skills });
  };

  const handleAddCertification = () => {
    const certifications = [...(data.qualifications?.certifications || []), ''];
    onUpdate({
      qualifications: {
        ...data.qualifications,
        certifications
      }
    });
  };

  const handleRemoveCertification = (index: number) => {
    const certifications = data.qualifications?.certifications?.filter((_, i) => i !== index);
    onUpdate({
      qualifications: {
        ...data.qualifications,
        certifications
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Required Skills
        </label>
        {data.skills?.map((skill, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => {
                const skills = [...(data.skills || [])];
                skills[index] = e.target.value;
                onUpdate({ skills });
              }}
              placeholder="Enter required skill"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => handleRemoveSkill(index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Minus className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button
          onClick={handleAddSkill}
          className="flex items-center text-blue-600 hover:text-blue-700 mt-2"
        >
          <Plus className="h-5 w-5 mr-1" />
          Add Skill
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Minimum Years of Experience
        </label>
        <input
          type="number"
          min="0"
          max="50"
          value={data.qualifications?.minimumYears || ''}
          onChange={(e) => onUpdate({
            qualifications: {
              ...data.qualifications,
              minimumYears: parseInt(e.target.value)
            }
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Required Certifications
        </label>
        {data.qualifications?.certifications?.map((cert, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={cert}
              onChange={(e) => {
                const certifications = [...(data.qualifications?.certifications || [])];
                certifications[index] = e.target.value;
                onUpdate({
                  qualifications: {
                    ...data.qualifications,
                    certifications
                  }
                });
              }}
              placeholder="Enter required certification"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => handleRemoveCertification(index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Minus className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button
          onClick={handleAddCertification}
          className="flex items-center text-blue-600 hover:text-blue-700 mt-2"
        >
          <Plus className="h-5 w-5 mr-1" />
          Add Certification
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Compliance Requirements
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={data.compliance?.cidbRequired}
              onChange={(e) => onUpdate({
                compliance: {
                  ...data.compliance,
                  cidbRequired: e.target.checked
                }
              })}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2">CIDB Registration Required</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={data.compliance?.insuranceRequired}
              onChange={(e) => onUpdate({
                compliance: {
                  ...data.compliance,
                  insuranceRequired: e.target.checked
                }
              })}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2">Insurance Required</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={data.compliance?.taxComplianceRequired}
              onChange={(e) => onUpdate({
                compliance: {
                  ...data.compliance,
                  taxComplianceRequired: e.target.checked
                }
              })}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2">Tax Compliance Required</span>
          </label>
        </div>
      </div>
    </div>
  );
}