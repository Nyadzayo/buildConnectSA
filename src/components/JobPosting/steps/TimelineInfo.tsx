import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { JobPostingForm } from '../../../types/jobPosting';

interface TimelineInfoProps {
  data: Partial<JobPostingForm>;
  onUpdate: (data: Partial<JobPostingForm>) => void;
}

export default function TimelineInfo({ data, onUpdate }: TimelineInfoProps) {
  const handleAddMilestone = () => {
    const milestones = [
      ...(data.timeline?.milestones || []),
      { date: '', description: '' }
    ];
    onUpdate({
      timeline: {
        ...data.timeline,
        milestones
      }
    });
  };

  const handleRemoveMilestone = (index: number) => {
    const milestones = data.timeline?.milestones?.filter((_, i) => i !== index);
    onUpdate({
      timeline: {
        ...data.timeline,
        milestones
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <input
            type="date"
            value={data.timeline?.startDate || ''}
            onChange={(e) => onUpdate({
              timeline: {
                ...data.timeline,
                startDate: e.target.value
              }
            })}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            value={data.timeline?.endDate || ''}
            onChange={(e) => onUpdate({
              timeline: {
                ...data.timeline,
                endDate: e.target.value
              }
            })}
            min={data.timeline?.startDate || new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Working Hours
        </label>
        <input
          type="text"
          value={data.timeline?.workingHours || ''}
          onChange={(e) => onUpdate({
            timeline: {
              ...data.timeline,
              workingHours: e.target.value
            }
          })}
          placeholder="e.g., Monday-Friday, 8:00 AM - 5:00 PM"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Timeline Flexibility
        </label>
        <div className="flex gap-4">
          {[1, 2, 3].map((level) => (
            <button
              key={level}
              onClick={() => onUpdate({
                timeline: {
                  ...data.timeline,
                  flexibility: level as JobPostingForm['timeline']['flexibility']
                }
              })}
              className={`flex-1 py-2 rounded-lg border ${
                data.timeline?.flexibility === level
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-300 hover:border-blue-600'
              }`}
            >
              {level === 1 ? 'Strict' : level === 2 ? 'Moderate' : 'Flexible'}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Milestones
        </label>
        {data.timeline?.milestones?.map((milestone, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="date"
              value={milestone.date}
              onChange={(e) => {
                const milestones = [...(data.timeline?.milestones || [])];
                milestones[index] = { ...milestone, date: e.target.value };
                onUpdate({
                  timeline: {
                    ...data.timeline,
                    milestones
                  }
                });
              }}
              className="w-40 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              value={milestone.description}
              onChange={(e) => {
                const milestones = [...(data.timeline?.milestones || [])];
                milestones[index] = { ...milestone, description: e.target.value };
                onUpdate({
                  timeline: {
                    ...data.timeline,
                    milestones
                  }
                });
              }}
              placeholder="Milestone description"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => handleRemoveMilestone(index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Minus className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button
          onClick={handleAddMilestone}
          className="flex items-center text-blue-600 hover:text-blue-700 mt-2"
        >
          <Plus className="h-5 w-5 mr-1" />
          Add Milestone
        </button>
      </div>
    </div>
  );
}