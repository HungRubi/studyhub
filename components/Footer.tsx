"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-3 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-orange-600">StudyHub</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              The best place to find, upload and purchase high-quality study materials. 
              Empower your learning with trusted documents from the community.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-orange-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/documents"
                  className="hover:text-orange-600 transition"
                >
                  Documents
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-orange-600 transition"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/upload"
                  className="hover:text-orange-600 transition"
                >
                  Upload Documents
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  href="/help"
                  className="hover:text-orange-600 transition"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-orange-600 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-orange-600 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-600 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>
            <div className="flex items-center space-x-5">
              <Link
                href="#"
                className="text-gray-600 text-2xl hover:text-orange-600 transition"
              >
                <FaFacebook />
              </Link>

              <Link
                href="#"
                className="text-gray-600 text-2xl hover:text-orange-600 transition"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="text-gray-600 text-2xl hover:text-orange-600 transition"
              >
                <FaYoutube />
              </Link>
            </div>

            <p className="text-gray-600 mt-4">
              Email: huyhung18042002@gmail.com
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-200 mt-10 py-6 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} StudyHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
