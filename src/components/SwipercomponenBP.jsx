'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import Image from 'next/image';

export default function BPcomponent() {
  const [isClient, setIsClient] = useState(false);

  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const schools = [
    {
      name: "ROC Nova College",
      image: "/assets/NP.jpg", // Replace with actual image path
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Zadkine",
      image: "/assets/NP.jpg", // Replace with actual image path
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "ROC Friese Port",
      image: "/assets/NP.jpg", // Replace with actual image path
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "ROC Friese Port",
        image: "/assets/NP.jpg", // Replace with actual image path
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
     
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative w-full bg-white py-6">
      
      <div className="container mx-auto px-4 mb-8">
      <p className="text-gray-500 uppercase text-sm font-medium text-center lg:text-start tracking-wider mb-2">
    OUR SCHOOLS
  </p>
        <h1 className="text-3xl font-bold mb-4">School Teaching <span className="inline-block  text-3xl font-bold  border-b-4 border-[#b51310] pb-1">
        B.TEC Programs
                      </span></h1>
        <p className="text-gray-600 mb-8">{loremText}</p>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {schools.map((school, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image
                  src={school.image}
                  alt={school.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{school.name}</h2>
                  <p className="text-gray-600 mb-4">{school.description}</p>
                  <a href="#" className="text-black hover:underline">Read More</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
