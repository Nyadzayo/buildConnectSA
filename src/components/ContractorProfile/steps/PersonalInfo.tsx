import React from 'react';
import { ContractorProfile } from '../../../types/contractor';
import { Upload, MapPin } from 'lucide-react';

interface PersonalInfoProps {
  data: Partial<ContractorProfile>;
  onUpdate: (data: Partial<ContractorProfile>) => void;
}

export default function PersonalInfo({ data, onUpdate }: PersonalInfoProps) {
  const handlePersonalUpdate = (field: keyof ContractorProfile['personal'], value: any) => {
    onUpdate({
      personal: {
        ...data.personal,
        [field]: value
      }
    });
  };

  const handleContactUpdate = (field: keyof ContractorProfile['personal']['contact'], value: any) => {
    onUpdate({
      personal: {
        ...data.personal,
        contact: {
          ...data.personal?.contact,
          [field]: value
        }
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Legal Name
          </label>
          <input
            type="text"
            value={data.personal?.legalName || ''}
            onChange={(e) => handlePersonalUpdate('legalName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Trading Name (if different)
          </label>
          <input
            type="text"
            value={data.personal?.tradingName || ''}
            onChange={(e) => handlePersonalUpdate('tradingName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ID Number
          </label>
          <input
            type="text"
            value={data.personal?.idNumber || ''}
            onChange={(e) => handlePersonalUpdate('idNumber', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            value={data.personal?.dateOfBirth || ''}
            onChange={(e) => handlePersonalUpdate('dateOfBirth', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Profile Photo
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 
                     border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer bg-white rounded-md font-medium 
                            text-blue-600 hover:text-blue-500 focus-within:outline-none 
                            focus-within:ring-2 focus-within:ring-offset-2 
                            focus-within:ring-blue-500">
                <span>Upload a file</span>
                <input
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      // TODO: Implement file upload
                      console.log('File selected:', e.target.files[0]);
                    }
                  }}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            value={data.personal?.contact?.mobile || ''}
            onChange={(e) => handleContactUpdate('mobile', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp Number
          </label>
          <input
            type="tel"
            value={data.personal?.contact?.whatsapp || ''}
            onChange={(e) => handleContactUpdate('whatsapp', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={data.personal?.contact?.email || ''}
            onChange={(e) => handleContactUpdate('email', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Website (optional)
          </label>
          <input
            type="url"
            value={data.personal?.website || ''}
            onChange={(e) => handlePersonalUpdate('website', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Languages
        </label>
        <select
          multiple
          value={data.personal?.languages || []}
          onChange={(e) => {
            const languages = Array.from(e.target.selectedOptions, option => option.value);
            handlePersonalUpdate('languages', languages);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="English">English</option>
          <option value="Afrikaans">Afrikaans</option>
          <option value="Zulu">Zulu</option>
          <option value="Xhosa">Xhosa</option>
          <option value="Sotho">Sotho</option>
          <option value="Tswana">Tswana</option>
        </select>
        <p className="mt-1 text-sm text-gray-500">
          Hold Ctrl/Cmd to select multiple languages
        </p>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Social Media Links (Optional)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="url"
            placeholder="Facebook URL"
            value={data.personal?.socialMedia?.facebook || ''}
            onChange={(e) => onUpdate({
              personal: {
                ...data.personal,
                socialMedia: {
                  ...data.personal?.socialMedia,
                  facebook: e.target.value
                }
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="url"
            placeholder="LinkedIn URL"
            value={data.personal?.socialMedia?.linkedin || ''}
            onChange={(e) => onUpdate({
              personal: {
                ...data.personal,
                socialMedia: {
                  ...data.personal?.socialMedia,
                  linkedin: e.target.value
                }
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="url"
            placeholder="Instagram URL"
            value={data.personal?.socialMedia?.instagram || ''}
            onChange={(e) => onUpdate({
              personal: {
                ...data.personal,
                socialMedia: {
                  ...data.personal?.socialMedia,
                  instagram: e.target.value
                }
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}