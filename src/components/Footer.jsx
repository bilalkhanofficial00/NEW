import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaLinkedinIn, FaInstagram, FaTwitter, } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#0c2745] text-white">
      {/* Top Section with Contact Info */}
      <div className="container mx-auto py-6 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-xl font-light mb-1">Have a any questions?</h3>
            <h2 className="text-2xl my-2 font-semibold">Contact Us</h2>
            <div>
              <p>MON - FRI: 10:00 - 19:00﻿</p>
              <p>SAT 09:00 - 20:00</p>
              <p>SUN 09:00 - 14:00</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-0">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0c2745] flex items-center justify-center border border-gray-500">
                <FaPhone className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-300">Phone Number</p>
                <p className="text-sm">+0(850) 544 7514</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0c2745] flex items-center justify-center border border-gray-500">
                <MdEmail className="text-white text-lg" />
              </div>
             
              <div>
                <p className="text-xs text-gray-300">E-Mail Address</p>
                <p className="text-sm">hello@crosson.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0c2745] flex items-center justify-center border border-gray-500">
                <MdLocationOn className="text-white text-lg" />
              </div>
              <div>
                <p className="text-xs text-gray-300">Headquarters</p>
                <p className="text-sm">One Apple Park Way, Cupertino</p>
                <p className="text-sm">CA 95014, U.S.A.</p>
                <Link
                  href="#"
                  className="text-xs text-gray-300 hover:text-white underline"
                >
                  Get Direction
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation */}
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-Us" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Students" className="text-gray-300 hover:text-white">
                  Student
                </Link>
              </li>
              <li>
                <Link href="/Teachers" className="text-gray-300 hover:text-white">
                  Teacher
                </Link>
              </li>
              <li>
                <Link href="/contact-Us" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/Member" className="text-gray-300 hover:text-white">
                Members
                </Link>
              </li>
            </ul>
          </div>

          {/* Members */}
          <div>
            <h3 className="text-xl mb-4">Members</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  ROC Nova College
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  ROC Friese Port
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  ROC Amsterdam
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Mbomjland
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Zadkine
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Curio
                </Link>
              </li>
            </ul>
          </div>
         <div className="flex-row md:space-y-8 space-y-4">
          <div  className="flex gap-x-8">
          <FaLinkedinIn className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            </div>
            <div>
            Follow us on social media to see more about the IVS Alliance. Don't hesitate to contact us!
            </div>
            </div>

          {/* Career Opportunities */}
          <div className="md:col-span-3 lg:col-span-1">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <Image
                  src="/assets/FI.png"
                  alt="Cloud Icon"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h3 className="text-xl mb-2">Career Opportunities</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Cake pudding lollipop pastry cupcake chocolate. Gummi bears
                  halvah sesame snaps.
                </p>

                <button className="bg-[#b51310] text-sm  text-white items-center px-6 py-3 mt-8 rounded-md hover:bg-red-600 transition">
                  Opening Positions{" "}
                  <span className="text-sm ps-[2px] font-bold">&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto py-4 px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>Copyright by Erkan Giris | All rights reserved</p>
            <div className="flex gap-4 mt-3 md:mt-0">
              <Link href="#" className="hover:text-white">
                Our Privacy and Personal Data Protection Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white">
                Terms and Conditions of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
