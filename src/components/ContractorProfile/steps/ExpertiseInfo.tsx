import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { ContractorProfile } from '../../../types/contractor';

interface ExpertiseInfoProps {
  data: Partial<ContractorProfile>;
  onUpdate: (data: Partial<ContractorProfile>) => void;
}

export default function ExpertiseInfo({ data, onUpdate }: ExpertiseInfoProps) {
  const handleExpertiseUpdate = (field: keyof ContractorProfile['expertise'], value: any) => {
    onUpdate({
      expertise: {
        ...data.expertise,
        [field]: value
      }
    });
  };

  const handleArrayUpdate = (field: keyof ContractorProfile['expertise'], value: string) => {
    const currentArray = data.expertise?.[field] as string[] || [];
    if (!currentArray.includes(value)) {
      handleExpertiseUpdate(field, [...currentArray, value]);
    }
  };

  const handleArrayRemove = (field: keyof ContractorProfile['expertise'], index: number) => {
    const currentArray = data.expertise?.[field] as string[] || [];
    handleExpertiseUpdate(
      field,
      currentArray.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Primary Trade
        </label>
        <select
          value={data.expertise?.primaryTrade || ''}
          onChange={(e) => handleExpertiseUpdate('primaryTrade', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Primary Trade</option>
          <option value="General Construction">General Construction</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="HVAC">HVAC</option>
          <option value="Carpentry">Carpentry</option>
          <option value="Masonry">Masonry</option>
          <option value="Painting">Painting</option>
          <option value="Roofing">Roofing</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Secondary Trades
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {data.expertise?.secondaryTrades?.map((trade, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
            >
              {trade}
              <button
                onClick={() => handleArrayRemove('secondaryTrades', index)}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                <Minus className="h-4 w-4" />
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <select
            onChange={(e) => {
              if (e.target.value) {
                handleArrayUpdate('secondaryTrades', e.target.value);
                e.target.value = '';
              }
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Add Secondary Trade</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="HVAC">HVAC</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Masonry">Masonry</option>
            <option value="Painting">Painting</option>
            <option value="Roofing">Roofing</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Years of Experience
        </label>
        <input
          type="number"
          min="0"
          max="50"
          value={data.expertise?.experienceYears || ''}
          onChange={(e) => handleExpertiseUpdate('experienceYears', parseInt(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Complexity Level
        </label>
        <div className="flex gap-4">
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              onClick={() => handleExpertiseUpdate('complexityLevel', level)}
              className={`flex-1 py-2 rounded-lg border ${
                data.expertise?.complexityLevel === level
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-300 hover:border-blue-600'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
        <p className="mt-1 text-sm text-gray-500">
          1 = Basic projects, 5 = Highly complex projects
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Technical Skills
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {data.expertise?.technicalSkills?.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center"
            >
              {skill}
              <button
                onClick={() => handleArrayRemove('technicalSkills', index)}
                className="ml-2 text-gray-600 hover:text-gray-800"
              >
                <Minus className="h-4 w-4" />
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add technical skill"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                const input = e.target as HTMLInputElement;
                if (input.value.trim()) {
                  handleArrayUpdate('technicalSkills', input.value.trim());
                  input.value = '';
                }
              }
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={() => {
              const input = document.querySelector('input[placeholder="Add technical skill"]') as HTMLInputElement;
              if (input.value.trim()) {
                handleArrayUpdate('technicalSkills', input.value.trim());
                input.value = '';
              }
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Equipment Expertise
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {data.expertise?.equipment?.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center"
            >
              {item}
              <button
                onClick={() => handleArrayRemove('equipment', index)}
                className="ml-2 text-gray-600 hover:text-gray-800"
              >
                <Minus className="h-4 w-4" />
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add equipment"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                const input = e.target as HTMLInputElement;
                if (input.value.trim()) {
                  handleArrayUpdate('equipment', input.value.trim());
                  input.value = '';
                }
              }
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={() => {
              const input = document.querySelector('input[placeholder="Add equipment"]') as HTMLInputElement;
              if (input.value.trim()) {
                handleArrayUpdate('equipment', input.value.trim());
                input.value = '';
              }
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}