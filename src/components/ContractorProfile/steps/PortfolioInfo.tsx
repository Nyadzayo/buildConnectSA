import React from 'react';
import { Plus, Minus, Upload } from 'lucide-react';
import { ContractorProfile } from '../../../types/contractor';

interface PortfolioInfoProps {
  data: Partial<ContractorProfile>;
  onUpdate: (data: Partial<ContractorProfile>) => void;
}

export default function PortfolioInfo({ data, onUpdate }: PortfolioInfoProps) {
  const handleAddProject = () => {
    const projects = [
      ...(data.portfolio?.projects || []),
      {
        title: '',
        description: '',
        value: 0,
        completionDate: '',
        duration: 0,
        images: []
      }
    ];
    onUpdate({
      portfolio: {
        ...data.portfolio,
        projects
      }
    });
  };

  const handleRemoveProject = (index: number) => {
    const projects = data.portfolio?.projects?.filter((_, i) => i !== index);
    onUpdate({
      portfolio: {
        ...data.portfolio,
        projects
      }
    });
  };

  const handleProjectUpdate = (index: number, field: string, value: any) => {
    const projects = [...(data.portfolio?.projects || [])];
    projects[index] = {
      ...projects[index],
      [field]: value
    };
    onUpdate({
      portfolio: {
        ...data.portfolio,
        projects
      }
    });
  };

  const handleMetricsUpdate = (field: keyof ContractorProfile['portfolio']['metrics'], value: number) => {
    onUpdate({
      portfolio: {
        ...data.portfolio,
        metrics: {
          ...data.portfolio?.metrics,
          [field]: value
        }
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Project List */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Portfolio Projects</h3>
          <button
            onClick={handleAddProject}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <Plus className="h-5 w-5 mr-1" />
            Add Project
          </button>
        </div>

        {data.portfolio?.projects?.map((project, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => handleProjectUpdate(index, 'title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Value (R)
                </label>
                <input
                  type="number"
                  min="0"
                  value={project.value}
                  onChange={(e) => handleProjectUpdate(index, 'value', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Completion Date
                </label>
                <input
                  type="date"
                  value={project.completionDate}
                  onChange={(e) => handleProjectUpdate(index, 'completionDate', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (months)
                </label>
                <input
                  type="number"
                  min="0"
                  value={project.duration}
                  onChange={(e) => handleProjectUpdate(index, 'duration', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Description
              </label>
              <textarea
                value={project.description}
                onChange={(e) => handleProjectUpdate(index, 'description', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Images
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 
                               border-2 border-gray-300 border-dashed rounded-lg 
                               cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                  <input type="file" className="hidden" accept="image/*" multiple />
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => handleRemoveProject(index)}
                className="flex items-center text-red-600 hover:text-red-700"
              >
                <Minus className="h-5 w-5 mr-1" />
                Remove Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Metrics */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-blue-900 mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Completed Projects
            </label>
            <input
              type="number"
              min="0"
              value={data.portfolio?.metrics?.completedProjects || ''}
              onChange={(e) => handleMetricsUpdate('completedProjects', parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Average Rating (out of 5)
            </label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={data.portfolio?.metrics?.averageRating || ''}
              onChange={(e) => handleMetricsUpdate('averageRating', parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              On-Time Completion Rate (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={data.portfolio?.metrics?.onTimeCompletion || ''}
              onChange={(e) => handleMetricsUpdate('onTimeCompletion', parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Repeat Clients
            </label>
            <input
              type="number"
              min="0"
              value={data.portfolio?.metrics?.repeatClients || ''}
              onChange={(e) => handleMetricsUpdate('repeatClients', parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}