import React from 'react';
import Image from 'next/image';

export default function StudentsPageFull() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Students and alumni of bilingual education</h1>
              <p className="text-lg text-gray-700 mb-6">
              Stories of our students and alumni (graduated from BTEC) in the Netherlands.
              </p>
              <div className="flex space-x-4">
                <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md font-medium">
                  Apply Now
                </button>
                <button className="border border-red-700 text-red-700 hover:bg-red-50 px-6 py-3 rounded-md font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/3">
              <Image
                src="/assets/M1.jpg" 
                alt="International students learning" 
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Schools teaching BTEC programs</h2>
            <p className="mt-4 text-lg text-gray-600">
            Here you can find an overview of schools (member of the IVS Alliance) that teaches different BTEC programs in different cities in the Netherlands. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Business", icon: "🏢" },
              { title: "Hospitality", icon: "🏨" },
              { title: "Fashion", icon: "👗" },
              { title: "Management", icon: "📊" },
              { title: "Wholesale", icon: "🛒" },
              { title: "Technology", icon: "💻" },
              { title: "Healthcare", icon: "🏥" },
              { title: "Creative Arts", icon: "🎨" }
            ].map((program, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{program.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600">Bilingual education leading to professional certification</p>
                <a href="#" className="text-red-700 font-medium mt-4 inline-block hover:text-red-800">
                  Explore program →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <Image
                src="/assets/M1.jpg" 
                alt="Students in classroom" 
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose IVS Alliance?</h2>
              <div className="space-y-6">
                {[
                  { title: "International Recognition", description: "Our diplomas are equivalent to A-level qualifications and recognized worldwide" },
                  { title: "Professional Network", description: "Connect with 168 companies across 24 countries in our global network" },
                  { title: "Language Proficiency", description: "Develop fluency in multiple languages with our bilingual curriculum" },
                  { title: "Practical Experience", description: "Gain hands-on experience through internships and industry projects" }
                ].map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                      <p className="mt-1 text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Student Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from our graduates about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Student Name</h3>
                    <p className="text-gray-600">Business Program, 2024</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The bilingual program at IVS Alliance opened doors for me internationally. I now work for a multinational company where I use both languages daily."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your International Journey?</h2>
            <p className="text-xl text-red-100 mb-8">
              Apply now and become part of our growing community of bilingual professionals
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-red-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium">
                Apply for Admission
              </button>
              <button className="border border-white text-white hover:bg-red-800 px-8 py-3 rounded-md font-medium">
                Request Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}