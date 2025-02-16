// src/pages/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Gitam Legends</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting talented individuals with outstanding career opportunities 
          through a platform that simplifies the job search process.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-blue-50 rounded-xl p-8 mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Gitam Legends, we're dedicated to bridging the gap between talented 
            job seekers and outstanding opportunities. Our platform serves as a 
            comprehensive resource for off-campus placements, providing not just job 
            listings, but also valuable interview preparation materials and industry insights.
          </p>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Job Opportunities</h3>
            <p className="text-gray-600">
              Curated job listings from top companies with detailed information about 
              roles, requirements, and application processes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Learning Resources</h3>
            <p className="text-gray-600">
              Access to interview preparation materials, programming tutorials, and 
              industry-specific guidance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Career Support</h3>
            <p className="text-gray-600">
              Comprehensive support through the job search process, from application 
              to interview preparation.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;