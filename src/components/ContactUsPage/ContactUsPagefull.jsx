"use client";

import { useState } from "react";

export default function ContactUsPageFull() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600">
            Get in touch with the IVS Alliance team
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-red-700 text-white font-medium rounded hover:bg-red-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Head Office</h3>
                <p className="text-gray-700 mb-1">Rijswijkseweg 60</p>
                <p className="text-gray-700 mb-1">2516 EH The Hague</p>
                <p className="text-gray-700">The Netherlands</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-gray-700 mb-1">General Inquiries:</p>
                <p className="text-red-700 mb-3">info@ivsalliance.org</p>

                <p className="text-gray-700 mb-1">Student Applications:</p>
                <p className="text-red-700 mb-3">students@ivsalliance.org</p>

                <p className="text-gray-700 mb-1">Teacher Opportunities:</p>
                <p className="text-red-700">teachers@ivsalliance.org</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-gray-700 mb-1">Phone: +31 (0) 70 123 4567</p>
                <p className="text-gray-700">
                  Mon - Fri: 9:00 AM - 5:00 PM CET
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-red-700">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">in</span>
                  </div>
                </a>
                <a href="#" className="text-gray-700 hover:text-red-700">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">ig</span>
                  </div>
                </a>
                <a href="#" className="text-gray-700 hover:text-red-700">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">tw</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
          <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">
              Map placeholder - Integration with Google Maps would go here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
