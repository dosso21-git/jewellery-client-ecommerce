import React, { useState } from "react";
import axios from 'axios';

const RegisterPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // To store any errors from the API
  const [loading, setLoading] = useState(false); // For loading state
  const [message,setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state
    setMessage(null); // Reset message state
  
    try {
      const response = await axios.post('/api/user/register', {
        email,
        firstname,
        lastname,
        mobile,
        password,
      });
  
      // Handle successful registration
      console.log(response.data);
      setMessage(response.data.message); // Set success message
      // Redirect or show a success message
    } catch (error) {
      // Handle error
      const errorMessage = error.response?.data?.error || 'An error occurred. Please try again.';
      setMessage(errorMessage); // Set error message
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
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
            <h3 className="text-red-500">{message}</h3>
            {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
            <form onSubmit={handleSubmit}>
              {/* First Name input */}
              <div className="mb-4">
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>

              {/* Last Name input */}
              <div className="mb-4">
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>

              {/* Email input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
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

              {/* Mobile input */}
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobile"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
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
                className={`w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register'}
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

            {/* Link to login */}
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
