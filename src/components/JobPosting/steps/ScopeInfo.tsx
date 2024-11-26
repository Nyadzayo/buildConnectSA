import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { JobPostingForm } from '../../../types/jobPosting';

interface ScopeInfoProps {
  data: Partial<JobPostingForm>;
  onUpdate: (data: Partial<JobPostingForm>) => void;
}

export default function ScopeInfo({ data, onUpdate }: ScopeInfoProps) {
  const handleAddRequirement = () => {
    const requirements = [...(data.requirements || []), ''];
    onUpdate({ requirements });
  };

  const handleRemoveRequirement = (index: number) => {
    const requirements = data.requirements?.filter((_, i) => i !== index);
    onUpdate({ requirements });
  };

  const handleAddMaterial = () => {
    const materials = [...(data.materials || []), ''];
    onUpdate({ materials });
  };

  const handleRemoveMaterial = (index: number) => {
    const materials = data.materials?.filter((_, i) => i !== index);
    onUpdate({ materials });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Description
        </label>
        <textarea
          value={data.description || ''}
          onChange={(e) => onUpdate({ description: e.target.value })}
          placeholder="Provide a detailed description of your project..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
        />
        <p className="mt-1 text-sm text-gray-500">
          Minimum 100 words recommended for better contractor matches
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Specific Requirements
        </label>
        {data.requirements?.map((req, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={req}
              onChange={(e) => {
                const requirements = [...(data.requirements || [])];
                requirements[index] = e.target.value;
                onUpdate({ requirements });
              }}
              placeholder="Enter requirement"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => handleRemoveRequirement(index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Minus className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button
          onClick={handleAddRequirement}
          className="flex items-center text-blue-600 hover:text-blue-700 mt-2"
        >
          <Plus className="h-5 w-5 mr-1" />
          Add Requirement
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Required Materials
        </label>
        {data.materials?.map((material, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={material}
              onChange={(e) => {
                const materials = [...(data.materials || [])];
                materials[index] = e.target.value;
                onUpdate({ materials });
              }}
              placeholder="Enter material"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => handleRemoveMaterial(index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Minus className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button
          onClick={handleAddMaterial}
          className="flex items-center text-blue-600 hover:text-blue-700 mt-2"
        >
          <Plus className="h-5 w-5 mr-1" />
          Add Material
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Complexity
        </label>
        <div className="flex gap-4">
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              onClick={() => onUpdate({ complexity: level as JobPostingForm['complexity'] })}
              className={`flex-1 py-2 rounded-lg border ${
                data.complexity === level
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-300 hover:border-blue-600'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
        <p className="mt-1 text-sm text-gray-500">
          1 = Simple, 5 = Highly Complex
        </p>
      </div>
    </div>
  );
}