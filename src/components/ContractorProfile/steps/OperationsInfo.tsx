import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { ContractorProfile } from '../../../types/contractor';

interface OperationsInfoProps {
  data: Partial<ContractorProfile>;
  onUpdate: (data: Partial<ContractorProfile>) => void;
}

export default function OperationsInfo({ data, onUpdate }: OperationsInfoProps) {
  const handleOperationsUpdate = (field: keyof ContractorProfile['operations'], value: any) => {
    onUpdate({
      operations: {
        ...data.operations,
        [field]: value
      }
    });
  };

  const handleAddEquipment = () => {
    const ownedEquipment = [...(data.operations?.ownedEquipment || []), ''];
    handleOperationsUpdate('ownedEquipment', ownedEquipment);
  };

  const handleRemoveEquipment = (index: number) => {
    const ownedEquipment = data.operations?.ownedEquipment?.filter((_, i) => i !== index);
    handleOperationsUpdate('ownedEquipment', ownedEquipment);
  };

  return (
    <div className="space-y-6">
      {/* Working Hours */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Working Hours</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weekdays
            </label>
            <input
              type="text"
              value={data.operations?.workingHours?.weekdays || ''}
              onChange={(e) => onUpdate({
                operations: {
                  ...data.operations,
                  workingHours: {
                    ...data.operations?.workingHours,
                    weekdays: e.target.value
                  }
                }
              })}
              placeholder="e.g., 8:00 AM - 5:00 PM"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weekends (Optional)
            </label>
            <input
              type="text"
              value={data.operations?.workingHours?.weekends || ''}
              onChange={(e) => onUpdate({
                operations: {
                  ...data.operations,
                  workingHours: {
                    ...data.operations?.workingHours,
                    weekends: e.target.value
                  }
                }
              })}
              placeholder="e.g., 9:00 AM - 2:00 PM"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Response Time */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Average Response Time (hours)
        </label>
        <input
          type="number"
          min="1"
          max="72"
          value={data.operations?.responseTime || ''}
          onChange={(e) => handleOperationsUpdate('responseTime', parseInt(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="mt-1 text-sm text-gray-500">
          Maximum time you typically take to respond to new job inquiries
        </p>
      </div>

      {/* Project Values */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Project Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Minimum Project Value (R)
            </label>
            <input
              type="number"
              min="0"
              value={data.operations?.projectValues?.minimum || ''}
              onChange={(e) => onUpdate({
                operations: {
                  ...data.operations,
                  projectValues: {
                    ...data.operations?.projectValues,
                    minimum: parseInt(e.target.value)
                  }
                }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Maximum Project Value (R)
            </label>
            <input
              type="number"
              min="0"
              value={data.operations?.projectValues?.maximum || ''}
              onChange={(e) => onUpdate({
                operations: {
                  ...data.operations,
                  projectValues: {
                    ...data.operations?.projectValues,
                    maximum: parseInt(e.target.value)
                  }
                }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Owned Equipment */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Owned Equipment</h3>
          <button
            onClick={handleAddEquipment}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <Plus className="h-5 w-5 mr-1" />
            Add Equipment
          </button>
        </div>
        {data.operations?.ownedEquipment?.map((equipment, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={equipment}
              onChange={(e) => {
                const ownedEquipment = [...(data.operations?.ownedEquipment || [])];
                ownedEquipment[index] = e.target.value;
                handleOperationsUpdate('ownedEquipment', ownedEquipment);
              }}
              placeholder="Enter equipment name"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => handleRemoveEquipment(index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Minus className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Technology Stack */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Technology & Software Used
        </label>
        <select
          multiple
          value={data.operations?.technology || []}
          onChange={(e) => {
            const technology = Array.from(e.target.selectedOptions, option => option.value);
            handleOperationsUpdate('technology', technology);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="AutoCAD">AutoCAD</option>
          <option value="SketchUp">SketchUp</option>
          <option value="Revit">Revit</option>
          <option value="ProjectManagement">Project Management Software</option>
          <option value="Accounting">Accounting Software</option>
          <option value="Estimating">Estimating Software</option>
        </select>
        <p className="mt-1 text-sm text-gray-500">
          Hold Ctrl/Cmd to select multiple options
        </p>
      </div>
    </div>
  );
}