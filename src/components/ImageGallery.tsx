import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Image {
  url: string;
  caption?: string;
  description?: string;
}

interface ImageGalleryProps {
  images: Image[];
  onClose?: () => void;
  fullscreen?: boolean;
}

export default function ImageGallery({ images, onClose, fullscreen = false }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  return (
    <div className={`relative ${fullscreen ? 'fixed inset-0 z-50 bg-black bg-opacity-90' : ''}`}>
      {fullscreen && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
        >
          <X className="h-8 w-8" />
        </button>
      )}
      
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        loop={true}
        className={`${fullscreen ? 'h-screen' : 'h-64 md:h-80'}`}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={image.url}
                alt={image.caption || `Image ${index + 1}`}
                className={`w-full h-full object-cover ${
                  fullscreen ? 'object-contain' : 'object-cover'
                }`}
              />
              {(image.caption || image.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-sm">{image.caption || image.description}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
        
        <div className="swiper-button-prev !text-white after:!text-2xl">
          <ChevronLeft className="h-8 w-8" />
        </div>
        <div className="swiper-button-next !text-white after:!text-2xl">
          <ChevronRight className="h-8 w-8" />
        </div>
      </Swiper>
    </div>
  );
}