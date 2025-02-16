// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaUsers} from "react-icons/fa";
const ContactUs = () => {
  

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center h-screen md:h-96 bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-6">Feel free to reach out to us anytime!</p>

        <div className="space-y-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/gitam_legends"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-pink-500 text-lg font-semibold hover:underline"
          >
            <FaInstagram size={24} />
            @gitam_legends
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/7702408650"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-green-500 text-lg font-semibold hover:underline"
          >
            <FaWhatsapp size={24} />
            +91 7702408650
          </a>

          {/* Email */}
          <a
            href="mailto:gitamlegends@gmail.com"
            className="flex items-center justify-center gap-3 text-blue-500 text-lg font-semibold hover:underline"
          >
            <FaEnvelope size={24} />
            gitamlegends@gmail.com
          </a>
          <a
            href="https://chat.whatsapp.com/JbT1GyTK0GRFQj8N6Ymyjz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-green-600 text-lg font-semibold hover:underline"
          >
            <FaUsers size={24} />
            Join Our WhatsApp Group
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;