import React, { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Email:", email, "Password:", password);
    // Add your registration logic here
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-4xl w-full">
          {/* Left Column with Image */}
          <div className="mb-12 md:mb-0 md:w-6/12 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="max-w-xs md:max-w-full"
              alt="Registration Illustration"
            />
          </div>

          {/* Right Column with Form */}
          <div className="md:w-5/12 lg:ml-6">
            <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
            <form onSubmit={handleSubmit}>
              {/* Name input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name or 
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address or Mobile
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password input */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Register
              </button>
            </form>

            {/* Google OAuth Button */}
            <div className="mt-4 text-center">
              <button
                className="flex items-center justify-center w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => console.log("Google OAuth")}
              >
                <img
                  src="https://th.bing.com/th/id/OIP.N3cFVgAShuhUnvU-yBB12AHaEK?rs=1&pid=ImgDetMain"
                  alt="Google Logo"
                  className="mr-2 h-5"
                />
                Continue with Google
              </button>
            </div>

            {/* Optional: Link to login */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-blue-600 hover:underline">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
