import React from 'react';
import { ArrowRight, Building2, Hammer, Shield, Users } from 'lucide-react';
import { dummyJobs, dummyContractors } from '../data/dummyData';
import JobCard from './JobCard';
import ContractorCard from './ContractorCard';

interface HomePageProps {
  onNavigate: (page: 'home' | 'jobs' | 'contractors' | 'post-job' | 'pricing') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                Find the Perfect Contractor for Your Construction Project
              </h1>
              <p className="mt-6 text-xl">
                Connect with qualified contractors in South Africa. Post your project and get matched with professionals who can bring your vision to life.
              </p>
              <div className="mt-10 flex gap-4">
                <button
                  onClick={() => onNavigate('post-job')}
                  className="btn-primary flex items-center text-lg"
                >
                  Post a Job
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate('contractors')}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center text-lg"
                >
                  Find Contractors
                </button>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-6">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                alt="Construction site"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose BuildConnect SA</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Contractors</h3>
            <p className="text-gray-600">All contractors are thoroughly vetted and verified</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Projects</h3>
            <p className="text-gray-600">From small repairs to large construction projects</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Hammer className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Skilled Professionals</h3>
            <p className="text-gray-600">Expert contractors for every type of job</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Matching</h3>
            <p className="text-gray-600">Quick and efficient contractor matching</p>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Jobs</h2>
          <button
            onClick={() => onNavigate('jobs')}
            className="text-blue-600 hover:text-blue-700 flex items-center"
          >
            View All Jobs
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyJobs.slice(0, 3).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Featured Contractors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Top Contractors</h2>
          <button
            onClick={() => onNavigate('contractors')}
            className="text-blue-600 hover:text-blue-700 flex items-center"
          >
            View All Contractors
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {dummyContractors.map((contractor) => (
            <ContractorCard key={contractor.id} contractor={contractor} />
          ))}
        </div>
      </section>
    </div>
  );
}