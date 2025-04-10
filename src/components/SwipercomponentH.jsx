"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";

export default function Scomponent() {
  const [isClient, setIsClient] = useState(false);
  const [swiperHeight, setSwiperHeight] = useState(0);

  useEffect(() => {
    setIsClient(true);

    // Calculate swiper height by subtracting header height from viewport height
    const calculateHeight = () => {
      const headerElement = document.querySelector("header");
      if (headerElement) {
        const headerHeight = headerElement.offsetHeight;
        const windowHeight = window.innerHeight;
        setSwiperHeight(windowHeight - headerHeight);
      }
    };

    // Initial calculation
    calculateHeight();

    // Recalculate on resize
    window.addEventListener("resize", calculateHeight);

    // Cleanup
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: swiperHeight
          ? `${swiperHeight}px`
          : "calc(100vh - var(--header-height))",
      }}
    >
      {/* Background Swiper */}
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          horizontalClass: "swiper-pagination-horizontal",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full pagination-visible"
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#aaa",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {["/assets/M1.jpg", "/assets/M2.jpg", "/assets/M3.jpg"].map(
          (image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                priority={index === 0}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>

      {/* White Overlay */}
      <div className="absolute top-0 left-0 h-full w-full bg-[#cfd5d3]/80 z-10"></div>

      {/* Content Overlay - Centered and Responsive */}
      <div className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl  md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            <span className="text-white ">Tweetalig Onderwijs</span>
            <br/><br className="lg:hidden" />
            <span className="text-[#b51310]">IVS Alliance</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-semibold py-4 sm:py-6 md:py-8 lg:py-6">
            Education is the best most powerful weapon we can use to change{" "}
            <br className="hidden md:block" /> the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <button className="bg-[#b51310] text-sm text-white items-center px-6 py-3 rounded-lg hover:bg-red-600 transition w-full sm:w-auto">
              FOR TEACHERS
              <span className="text-sm ps-[2px] font-bold">&gt;</span>
            </button>
            <button className="bg-[#b51310] text-sm text-white items-center px-6 py-3 rounded-lg hover:bg-red-600 transition w-full sm:w-auto">
              FOR STUDENTS <span className="text-sm ps-[2px] font-bold">&gt;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pagination styles */}
      <style jsx global>{`
        .pagination-visible .swiper-pagination {
          position: absolute;
          bottom: 10px !important;
          @media (min-width: 640px) {
            bottom: 20px !important;
          }
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 30;
        }
        .swiper-pagination-bullet {
          background: black !important;
          opacity: 100;
          margin: 0 4px;
          width: 10px;
          height: 10px;
          @media (min-width: 640px) {
            width: 16px;
            height: 16px;
          }
          display: inline-block;
          border-radius: 50%;
        }
        .swiper-pagination-bullet-active {
          opacity: 100;
          background: white !important;
        }
      `}</style>
    </div>
  );
}