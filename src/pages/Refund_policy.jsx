import React from 'react';

const Refund_policy = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
       Refund Policy
                </h1>
                <p className="text-gray-600 mb-4 text-sm text-center">
                    Last updated: October 11, 2024
                </p>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Welcome to our website! By accessing this site, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Intellectual Property</h2>
                    <p className="text-gray-600 leading-relaxed">
                        All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and hyperlinks are the property of the company or its licensors.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. User Responsibilities</h2>
                    <p className="text-gray-600 leading-relaxed">
                        You agree not to use this site in a way that may impair its performance, corrupt its content, or otherwise reduce its overall functionality. You also agree not to compromise the security of the website or attempt to gain access to secured areas or sensitive information.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Limitation of Liability</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The company will not be liable for any direct, indirect, or consequential loss or damage arising from the use of this website or the information on it.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Governing Law</h2>
                    <p className="text-gray-600 leading-relaxed">
                        These terms and conditions are governed by the laws of your country or region. By using this website, you agree to submit to the exclusive jurisdiction of the courts in your area.
                    </p>
                </section>

                <div className="text-center mt-8">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 focus:outline-none">
                        Accept Terms
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Refund_policy;
