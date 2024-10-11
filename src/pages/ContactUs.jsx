import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-5">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Contact Us</h2>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-md shadow hover:bg-text-primary transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-600">Need assistance? Call us at:</p>
                    <p className="text-lg font-semibold text-secondary">+1 123 456 7890</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
