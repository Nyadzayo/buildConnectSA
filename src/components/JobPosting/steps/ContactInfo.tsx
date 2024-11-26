import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { JobPostingForm } from '../../../types/jobPosting';

interface ContactInfoProps {
  data: Partial<JobPostingForm>;
  onUpdate: (data: Partial<JobPostingForm>) => void;
}

export default function ContactInfo({ data, onUpdate }: ContactInfoProps) {
  const handleMethodToggle = (method: 'Phone' | 'Email' | 'WhatsApp') => {
    const currentMethods = data.contact?.methods || [];
    const newMethods = currentMethods.includes(method)
      ? currentMethods.filter(m => m !== method)
      : [...currentMethods, method];
    
    onUpdate({
      contact: {
        ...data.contact,
        methods: newMethods
      }
    });
  };

  const handlePreferredTimeAdd = () => {
    const preferredTimes = [...(data.contact?.preferredTimes || []), ''];
    onUpdate({
      contact: {
        ...data.contact,
        preferredTimes
      }
    });
  };

  const handlePreferredTimeRemove = (index: number) => {
    const preferredTimes = data.contact?.preferredTimes?.filter((_, i) => i !== index);
    onUpdate({
      contact: {
        ...data.contact,
        preferredTimes
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Contact Name
        </label>
        <input
          type="text"
          value={data.contact?.name || ''}
          onChange={(e) => onUpdate({
            contact: {
              ...data.contact,
              name: e.target.value
            }
          })}
          placeholder="Enter contact person's name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Contact Methods
        </label>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleMethodToggle('Phone')}
            className={`flex items-center px-4 py-2 rounded-lg border ${
              data.contact?.methods?.includes('Phone')
                ? 'border-blue-600 bg-blue-50 text-blue-600'
                : 'border-gray-300 hover:border-blue-600'
            }`}
          >
            <Phone className="h-5 w-5 mr-2" />
            Phone
          </button>
          <button
            onClick={() => handleMethodToggle('Email')}
            className={`flex items-center px-4 py-2 rounded-lg border ${
              data.contact?.methods?.includes('Email')
                ? 'border-blue-600 bg-blue-50 text-blue-600'
                : 'border-gray-300 hover:border-blue-600'
            }`}
          >
            <Mail className="h-5 w-5 mr-2" />
            Email
          </button>
          <button
            onClick={() => handleMethodToggle('WhatsApp')}
            className={`flex items-center px-4 py-2 rounded-lg border ${
              data.contact?.methods?.includes('WhatsApp')
                ? 'border-blue-600 bg-blue-50 text-blue-600'
                : 'border-gray-300 hover:border-blue-600'
            }`}
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            WhatsApp
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Contact Times
        </label>
        {data.contact?.preferredTimes?.map((time, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={time}
              onChange={(e) => {
                const preferredTimes = [...(data.contact?.preferredTimes || [])];
                preferredTimes[index] = e.target.value;
                onUpdate({
                  contact: {
                    ...data.contact,
                    preferredTimes
                  }
                });
              }}
              placeholder="e.g., Weekdays 9 AM - 5 PM"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => handlePreferredTimeRemove(index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <span className="sr-only">Remove</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
        <button
          onClick={handlePreferredTimeAdd}
          className="flex items-center text-blue-600 hover:text-blue-700 mt-2"
        >
          <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Preferred Time
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Languages
        </label>
        <select
          multiple
          value={data.contact?.languages || []}
          onChange={(e) => {
            const languages = Array.from(e.target.selectedOptions, option => option.value);
            onUpdate({
              contact: {
                ...data.contact,
                languages
              }
            });
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
    </div>
  );
}