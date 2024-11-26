import React from 'react';
import { MapPin } from 'lucide-react';
import { JobPostingForm } from '../../../types/jobPosting';

interface LocationInfoProps {
  data: Partial<JobPostingForm>;
  onUpdate: (data: Partial<JobPostingForm>) => void;
}

export default function LocationInfo({ data, onUpdate }: LocationInfoProps) {
  const handleLocationUpdate = (field: keyof JobPostingForm['location'], value: string | number) => {
    onUpdate({
      location: {
        ...data.location,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 text-blue-600 mb-4">
        <MapPin className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Project Location Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Street Address
          </label>
          <input
            type="text"
            value={data.location?.address || ''}
            onChange={(e) => handleLocationUpdate('address', e.target.value)}
            placeholder="Enter street address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Suburb
          </label>
          <input
            type="text"
            value={data.location?.suburb || ''}
            onChange={(e) => handleLocationUpdate('suburb', e.target.value)}
            placeholder="Enter suburb"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            value={data.location?.city || ''}
            onChange={(e) => handleLocationUpdate('city', e.target.value)}
            placeholder="Enter city"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Province
          </label>
          <select
            value={data.location?.province || ''}
            onChange={(e) => handleLocationUpdate('province', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Province</option>
            <option value="Gauteng">Gauteng</option>
            <option value="Western Cape">Western Cape</option>
            <option value="KwaZulu-Natal">KwaZulu-Natal</option>
            <option value="Eastern Cape">Eastern Cape</option>
            <option value="Free State">Free State</option>
            <option value="Limpopo">Limpopo</option>
            <option value="Mpumalanga">Mpumalanga</option>
            <option value="North West">North West</option>
            <option value="Northern Cape">Northern Cape</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code
          </label>
          <input
            type="text"
            value={data.location?.postalCode || ''}
            onChange={(e) => handleLocationUpdate('postalCode', e.target.value)}
            placeholder="Enter postal code"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
            maxLength={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Work Radius (km)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={data.location?.workRadius || ''}
            onChange={(e) => handleLocationUpdate('workRadius', parseInt(e.target.value))}
            placeholder="Enter work radius"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="mt-1 text-sm text-gray-500">
            Maximum distance contractors should be willing to travel
          </p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          Providing accurate location details helps match your project with nearby contractors
          and ensures more relevant applications.
        </p>
      </div>
    </div>
  );
}