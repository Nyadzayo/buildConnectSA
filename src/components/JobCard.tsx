import React, { useState } from 'react';
import { MapPin, Calendar, DollarSign, Clock, Image as ImageIcon } from 'lucide-react';
import { Job } from '../types';
import ImageGallery from './ImageGallery';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [galleryType, setGalleryType] = useState<'project' | 'inspiration'>('project');

  const openGallery = (type: 'project' | 'inspiration') => {
    setGalleryType(type);
    setShowFullGallery(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Preview Gallery */}
      <div className="relative h-48">
        <ImageGallery images={job.images} />
        {job.images.length > 0 && (
          <button
            onClick={() => openGallery('project')}
            className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 
                     rounded-full text-sm flex items-center hover:bg-opacity-70"
          >
            <ImageIcon className="h-4 w-4 mr-1" />
            {job.images.length} photos
          </button>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{job.location}</span>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            job.urgency === 'Urgent' 
              ? 'bg-red-100 text-red-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {job.urgency}
          </span>
        </div>

        <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {job.inspirationImages && job.inspirationImages.length > 0 && (
          <button
            onClick={() => openGallery('inspiration')}
            className="mt-4 w-full flex items-center justify-center gap-2 text-blue-600 
                     hover:text-blue-700 border border-blue-600 rounded-lg px-4 py-2"
          >
            <ImageIcon className="h-4 w-4" />
            View Inspiration Gallery ({job.inspirationImages.length} photos)
          </button>
        )}

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center text-gray-700">
            <DollarSign className="h-5 w-5 mr-1" />
            <span className="font-semibold">R{job.budget.toLocaleString()}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
          </div>
        </div>

        <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg 
                       hover:bg-blue-700 transition-colors">
          Apply Now
        </button>
      </div>

      {/* Fullscreen Gallery */}
      {showFullGallery && (
        <ImageGallery
          images={galleryType === 'project' ? job.images : (job.inspirationImages || [])}
          onClose={() => setShowFullGallery(false)}
          fullscreen
        />
      )}
    </div>
  );
}