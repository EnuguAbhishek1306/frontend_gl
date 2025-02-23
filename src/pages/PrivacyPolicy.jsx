import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>Last updated: [Insert Date]</p>

      <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
      <p>Welcome to Gitam Legends! Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>

      <h2 className="text-xl font-semibold mt-4">2. Ezoic Privacy Disclosures</h2>
      <p>We use Ezoic for website analytics and advertising optimization. Ezoic and its partners may collect and process data as per their privacy policy.</p>
      <p>
        You can view the full Ezoic privacy policy here:  
        <a
          href="http://g.ezoic.net/privacy/gitamlegends.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Ezoic Privacy Policy
        </a>
      </p>

      {/* Ezoic Privacy Policy Embed */}
      <span id="ezoic-privacy-policy-embed"></span>

      <h2 className="text-xl font-semibold mt-4">3. Cookies and Data Collection</h2>
      <p>We and our partners use cookies to enhance user experience and analyze site performance.</p>

      <h2 className="text-xl font-semibold mt-4">4. Contact Us</h2>
      <p>If you have any questions, contact us at: support@gitamlegends.com</p>
    </div>
  );
};

export default PrivacyPolicy;
