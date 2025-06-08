"use client";

import { Mail, Copy, Facebook, Twitter, Instagram, Github } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { handleCopyEmail } from "../lib/copyClipBoard";

const Footer = () => {

  return (
    <footer className="bg-gray-900 py-8 sm:py-12 px-4 text-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-10">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 w-full md:w-auto mb-6 md:mb-0">
            <div className="flex flex-grow sm:flex-grow-0 max-w-full">
              <div className="flex items-center px-2 sm:px-4 py-2 border border-gray-600 rounded-l truncate">
                <Mail className="w-5 h-5 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-base truncate">narayan324mishra@gmail.com</span>
              </div>
              <button
                className="flex items-center justify-center px-2 sm:px-4 border border-l-0 border-gray-600 rounded-r"
                onClick={handleCopyEmail}
              >
                <Copy className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-base">copy</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8 text-center md:text-left">
          <div className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-100 mb-0 sm:mb-2 leading-tight">
            I'M
          </div>
          <div className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-100 relative leading-tight">
            BANDHAN MAJUMDER
            <div className="absolute right-0 md:-right-4 top-full md:top-0 md:bottom-0 flex flex-col justify-center pt-2 md:pt-0">
              <div className="space-y-1">
                <div className="h-1 w-full md:w-64 bg-red-500"></div>
                <div className="h-1 w-full md:w-64 bg-yellow-500"></div>
                <div className="h-1 w-full md:w-64 bg-blue-600"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-4 gap-3">
          <div className="flex gap-4 mb-2 sm:mb-0 order-1 sm:order-1">
            <Link target="_blank" href="https://x.com" className="hover:text-gray-300 text-sm sm:text-base">
              <Twitter />
            </Link>
            <Link target="_blank" href="https://github.com/bandhan-majumder/" className="hover:text-gray-300 text-sm sm:text-base">
              <Github />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center sm:justify-end w-full sm:w-auto order-4 sm:order-4">
            <Link href={"/about"} target="_blank">
              <div className="text-xs sm:text-sm text-gray-400 order-2 sm:order-3 hover:text-gray-200 cursor-pointer">
                About Us
              </div>
            </Link>
            <div className="text-xs sm:text-sm text-gray-400 order-2 sm:order-3">
              BANDHAN MAJUMDER © 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;