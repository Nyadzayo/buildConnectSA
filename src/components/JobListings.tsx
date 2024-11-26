import React from 'react';
import { dummyJobs } from '../data/dummyData';
import JobCard from './JobCard';

export default function JobListings() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Jobs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}