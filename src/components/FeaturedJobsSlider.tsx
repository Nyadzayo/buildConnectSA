import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Job } from '../types';
import JobCard from './JobCard';
import 'swiper/css';
import 'swiper/css/navigation';

interface FeaturedJobsSliderProps {
  jobs: Job[];
}

export default function FeaturedJobsSlider({ jobs }: FeaturedJobsSliderProps) {
  const featuredJobs = jobs.filter(job => job.featured);

  if (featuredJobs.length === 0) return null;

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
      className="featured-jobs-slider"
    >
      {featuredJobs.map((job) => (
        <SwiperSlide key={job.id}>
          <JobCard job={job} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}