
import React, { useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/user/login', {
        email,
        password,
      });
      
      // Assuming the API returns a token
      const  token  = response.data.token;
      
      // Store token in cookies
      Cookies.set('loginToken',token); // Expires in 7 days
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log("Logged in successfully:", response.data.token);
      // Redirect or perform other actions after successful login
      navigate('/')
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error(err);
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
              alt="Login Illustration"
            />
          </div>

          {/* Right Column with Form */}
          <div className="md:w-5/12 lg:ml-6">
            <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
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

              {/* Remember me checkbox */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-800">
                  Remember me
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Sign in
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

            {/* Optional: Forgot password link */}
            <div className="mt-4 text-center">
              <a href="/register" className="text-blue-600 hover:underline">
                Register
              </a>
            </div>
            <div className="mt-4 text-center">
              <a href="#!" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

