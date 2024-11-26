import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { ContractorProfile } from '../../../types/contractor';

interface CredentialsInfoProps {
  data: Partial<ContractorProfile>;
  onUpdate: (data: Partial<ContractorProfile>) => void;
}

export default function CredentialsInfo({ data, onUpdate }: CredentialsInfoProps) {
  const handleCidbUpdate = (field: keyof ContractorProfile['credentials']['cidb'], value: any) => {
    onUpdate({
      credentials: {
        ...data.credentials,
        cidb: {
          ...data.credentials?.cidb,
          [field]: value
        }
      }
    });
  };

  const handleAddMembership = () => {
    const memberships = [
      ...(data.credentials?.memberships || []),
      { organization: '', membershipNumber: '', validUntil: '' }
    ];
    onUpdate({
      credentials: {
        ...data.credentials,
        memberships
      }
    });
  };

  const handleRemoveMembership = (index: number) => {
    const memberships = data.credentials?.memberships?.filter((_, i) => i !== index);
    onUpdate({
      credentials: {
        ...data.credentials,
        memberships
      }
    });
  };

  const handleAddCertification = () => {
    const certifications = [
      ...(data.credentials?.certifications || []),
      { name: '', issuedBy: '', issuedDate: '', expiryDate: '' }
    ];
    onUpdate({
      credentials: {
        ...data.credentials,
        certifications
      }
    });
  };

  const handleRemoveCertification = (index: number) => {
    const certifications = data.credentials?.certifications?.filter((_, i) => i !== index);
    onUpdate({
      credentials: {
        ...data.credentials,
        certifications
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* CIDB Registration */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-blue-900 mb-4">CIDB Registration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Registration Number
            </label>
            <input
              type="text"
              value={data.credentials?.cidb?.registrationNumber || ''}
              onChange={(e) => handleCidbUpdate('registrationNumber', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CIDB Level
            </label>
            <select
              value={data.credentials?.cidb?.level || ''}
              onChange={(e) => handleCidbUpdate('level', parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Level</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
                <option key={level} value={level}>Level {level}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="date"
              value={data.credentials?.cidb?.expiryDate || ''}
              onChange={(e) => handleCidbUpdate('expiryDate', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Professional Memberships */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Professional Memberships</h3>
          <button
            onClick={handleAddMembership}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <Plus className="h-5 w-5 mr-1" />
            Add Membership
          </button>
        </div>
        {data.credentials?.memberships?.map((membership, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              value={membership.organization}
              onChange={(e) => {
                const memberships = [...(data.credentials?.memberships || [])];
                memberships[index] = { ...membership, organization: e.target.value };
                onUpdate({
                  credentials: {
                    ...data.credentials,
                    memberships
                  }
                });
              }}
              placeholder="Organization"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              value={membership.membershipNumber}
              onChange={(e) => {
                const memberships = [...(data.credentials?.memberships || [])];
                memberships[index] = { ...membership, membershipNumber: e.target.value };
                onUpdate({
                  credentials: {
                    ...data.credentials,
                    memberships
                  }
                });
              }}
              placeholder="Membership Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex gap-2">
              <input
                type="date"
                value={membership.validUntil}
                onChange={(e) => {
                  const memberships = [...(data.credentials?.memberships || [])];
                  memberships[index] = { ...membership, validUntil: e.target.value };
                  onUpdate({
                    credentials: {
                      ...data.credentials,
                      memberships
                    }
                  });
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={() => handleRemoveMembership(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <Minus className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Certifications</h3>
          <button
            onClick={handleAddCertification}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <Plus className="h-5 w-5 mr-1" />
            Add Certification
          </button>
        </div>
        {data.credentials?.certifications?.map((cert, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value={cert.name}
              onChange={(e) => {
                const certifications = [...(data.credentials?.certifications || [])];
                certifications[index] = { ...cert, name: e.target.value };
                onUpdate({
                  credentials: {
                    ...data.credentials,
                    certifications
                  }
                });
              }}
              placeholder="Certification Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              value={cert.issuedBy}
              onChange={(e) => {
                const certifications = [...(data.credentials?.certifications || [])];
                certifications[index] = { ...cert, issuedBy: e.target.value };
                onUpdate({
                  credentials: {
                    ...data.credentials,
                    certifications
                  }
                });
              }}
              placeholder="Issuing Organization"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex gap-2">
              <input
                type="date"
                value={cert.issuedDate}
                onChange={(e) => {
                  const certifications = [...(data.credentials?.certifications || [])];
                  certifications[index] = { ...cert, issuedDate: e.target.value };
                  onUpdate({
                    credentials: {
                      ...data.credentials,
                      certifications
                    }
                  });
                }}
                placeholder="Issue Date"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="date"
                value={cert.expiryDate}
                onChange={(e) => {
                  const certifications = [...(data.credentials?.certifications || [])];
                  certifications[index] = { ...cert, expiryDate: e.target.value };
                  onUpdate({
                    credentials: {
                      ...data.credentials,
                      certifications
                    }
                  });
                }}
                placeholder="Expiry Date"
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
          </div>
        ))}
      </div>
    </div>
  );
}