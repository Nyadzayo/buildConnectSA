import React from 'react';
import { dummyContractors } from '../data/dummyData';
import ContractorCard from './ContractorCard';

export default function ContractorList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Contractors</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {dummyContractors.map((contractor) => (
          <ContractorCard key={contractor.id} contractor={contractor} />
        ))}
      </div>
    </div>
  );
}