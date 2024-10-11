import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">
        At [Your Brand Name], we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-4">Information We Collect</h2>
      <p className="text-lg mb-4">
        We may collect the following types of information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Personal information (e.g., name, email address, phone number)</li>
        <li>Payment information (e.g., credit card details)</li>
        <li>Order history and preferences</li>
        <li>Browsing information (e.g., IP address, cookies)</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
      <p className="text-lg mb-4">
        We use your information for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>To process and fulfill your orders</li>
        <li>To communicate with you about your account and orders</li>
        <li>To improve our website and services</li>
        <li>To send you promotional materials and newsletters (with your consent)</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-6 mb-4">Data Protection</h2>
      <p className="text-lg mb-4">
        We implement a variety of security measures to protect your personal information. These include encryption, firewalls, and secure server environments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee its absolute security.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-4">Sharing Your Information</h2>
      <p className="text-lg mb-4">
        We do not sell, trade, or otherwise transfer your personal information to outside parties, except to provide services you have requested or as required by law.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-4">Your Rights</h2>
      <p className="text-lg mb-4">
        You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at [email@example.com].
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
      <p className="text-lg mb-4">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically for any updates.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="text-lg mb-4">
        If you have any questions about this Privacy Policy, please contact us at [email@example.com]. Thank you for trusting [Your Brand Name] with your personal information.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
