"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function GridCarouselComponent() {
  const [isClient, setIsClient] = useState(false);

  // Generate 3 slides with 6 cards each = 18 cards total
  const slides = [1, 2, 3]; // Simplified to just track slide numbers

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative w-full bg-white py-6">
      {/* Checkered background pattern */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 75%, #f5f5f5 75%, #f5f5f5), linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 75%, #f5f5f5 75%, #f5f5f5)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
          opacity: 0.5,
        }}
      ></div>

      {/* Title section - with explicit z-index higher than background */}
      <div className="relative container mx-auto px-4 mb-4 z-10">
        <h2 className="text-3xl lg:py-8 md:py-4 py-2 font-bold">
          News from IVS Alliance
        </h2>
        <p className="text-md text-gray-800">
          Here you can read our latest news about students following the BTEC
          program in the Netherlands, about our partner schools<br></br>
          teaching different kind of BTEC programs and about our acitivities
          with the IVS Alliance
        </p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="grid-swiper"
        >
          {slides.map((slideNum, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="grid grid-cols-1 gap-4">
                {/* First row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[0, 1, 2].map((index) => (
                    <div key={`row1-${index}`} className="flex flex-col">
                      {/* Card header */}
                      <div className="bg-[#ecf4f6] rounded-t-md p-3 border border-gray-200 border-b-0">
                        <div className="text-left">
                          <p className="text-xs text-gray-600 mb-0.5">
                            Lorem ipsum dolor sit amet | {index + 1}
                          </p>
                          <p className="text-xs text-gray-400">
                            Contains elements for design projects or
                            presentations for card {index + 1}.
                          </p>
                        </div>
                      </div>

                      {/* Main card with image background */}
                      <div className="text-white overflow-hidden relative p-4 h-64 flex flex-col justify-between">
                        {/* Image background */}
                        <div className="absolute inset-0 w-full h-full">
                          <Image
                            src="/assets/NP.jpg"
                            alt="Background"
                            fill
                            objectFit="cover"
                            className="opacity-90"
                          />
                        </div>
                      </div>

                      {/* White footer card */}
                      <div className="bg-[#ecf4f6] rounded-b-md border border-gray-200 p-3 flex justify-between items-center">
                        <div className="text-left">
                          <p className="text-xs text-gray-600 mb-0.5">
                            holding.goal is made simple | figma.com
                          </p>
                          <p className="text-xs text-gray-400">
                            Contains elements for design projects or on your
                            website somewhere here.
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          <button className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 p-1 rounded transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                            </svg>
                          </button>
                          <button className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 p-1 rounded transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="18" cy="5" r="3"></circle>
                              <circle cx="6" cy="12" r="3"></circle>
                              <circle cx="18" cy="19" r="3"></circle>
                              <line
                                x1="8.59"
                                y1="13.51"
                                x2="15.42"
                                y2="17.49"
                              ></line>
                              <line
                                x1="15.41"
                                y1="6.51"
                                x2="8.59"
                                y2="10.49"
                              ></line>
                            </svg>
                          </button>
                          <button className="text-xs whitespace-nowrap bg-[#ecf4f6] text-gray-800 shadow-md bg-opacity-10 hover:bg-opacity-30 px-2 py-1 rounded transition">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[0, 1, 2].map((index) => (
                    <div key={`row2-${index}`} className="flex flex-col">
                      {/* Card header */}
                      <div className="bg-[#ecf4f6] rounded-t-md p-3 border border-gray-200 border-b-0">
                        <div className="text-left">
                          <p className="text-xs text-gray-600 mb-0.5">
                            Lorem ipsum dolor sit amet | {index + 4}
                          </p>
                          <p className="text-xs text-gray-400">
                            Contains elements for design projects or
                            presentations for card {index + 4}.
                          </p>
                        </div>
                      </div>

                      {/* Main card with image background */}
                      <div className="text-white overflow-hidden relative p-4 h-64 flex flex-col justify-between">
                        {/* Image background */}
                        <div className="absolute inset-0 w-full h-full">
                          <Image
                            src="/assets/NP.jpg"
                            alt="Background"
                            fill
                            objectFit="cover"
                            className="opacity-90"
                          />
                        </div>
                      </div>

                      {/* White footer card */}
                      <div className="bg-white rounded-b-md border border-gray-200 p-3 flex justify-between items-center">
                        <div className="text-left">
                          <p className="text-xs text-gray-600 mb-0.5">
                            holding.goal is made simple | figma.com
                          </p>
                          <p className="text-xs text-gray-400">
                            Contains elements for design projects or on your
                            website somewhere here.
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          <button className="text-xs whitespace-nowrap bg-white bg-opacity-20 hover:bg-opacity-30 px-2 py-1 rounded transition">
                            Learn More
                          </button>
                          <button className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 p-1 rounded transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                            </svg>
                          </button>
                          <button className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 p-1 rounded transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="18" cy="5" r="3"></circle>
                              <circle cx="6" cy="12" r="3"></circle>
                              <circle cx="18" cy="19" r="3"></circle>
                              <line
                                x1="8.59"
                                y1="13.51"
                                x2="15.42"
                                y2="17.49"
                              ></line>
                              <line
                                x1="15.41"
                                y1="6.51"
                                x2="8.59"
                                y2="10.49"
                              ></line>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered pagination */}
        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>

      {/* Add any custom styles needed for pagination */}
      <style jsx>{`
        :global(.custom-pagination) {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        :global(.swiper-pagination-bullet) {
          margin: 0 4px;
        }
      `}</style>
    </div>
  );
}
