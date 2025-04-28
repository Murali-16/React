import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation for demo purposes
    if (email && password && password.length >= 6) {
      setShowSuccess(true);
      setShowError(false);
      
      // Simulate redirect after login
      setTimeout(() => {
        alert('Login successful! (This is just a demo - no actual authentication is happening)');
      }, 2000);
    } else {
      setShowError(true);
      setShowSuccess(false);
      setIsShaking(true);
      
      // Remove shake animation after it completes
      setTimeout(() => {
        setIsShaking(false);
      }, 500);
    }
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} login clicked (demo only)`);
  };

  return (
    // Centered full page container
    <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-br from-indigo-500 to-purple-700">
      {/* Card container with fixed width and centered positioning */}
      <div className={`relative w-96 max-w-md mx-auto bg-white bg-opacity-95 rounded-2xl p-10 shadow-xl overflow-hidden ${isShaking ? 'animate-[shake_0.5s]' : ''}`}>
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-full flex justify-center items-center text-white text-2xl font-bold">
            e
          </div>
        </div>
        
        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">Welcome Back</h2>
        
        {/* Success/Error Messages */}
        {showSuccess && (
          <div className="p-3 mb-5 bg-green-100 text-green-700 rounded-md text-center text-sm">
            Login successful! Redirecting...
          </div>
        )}
        
        {showError && (
          <div className="p-3 mb-5 bg-red-100 text-red-700 rounded-md text-center text-sm">
            Invalid email or password. Please try again.
          </div>
        )}
        
        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-gray-100 border-none rounded-lg text-base outline-none focus:bg-white focus:ring-2 focus:ring-purple-600 transition-all"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className={`absolute text-gray-500 left-4 transition-all duration-300 pointer-events-none ${
                email ? 'text-sm -top-2 bg-white px-1 text-purple-600' : 'top-4'
              }`}
            >
              Email
            </label>
          </div>
          
          <div className="mb-6 relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-gray-100 border-none rounded-lg text-base outline-none focus:bg-white focus:ring-2 focus:ring-purple-600 transition-all"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className={`absolute text-gray-500 left-4 transition-all duration-300 pointer-events-none ${
                password ? 'text-sm -top-2 bg-white px-1 text-purple-600' : 'top-4'
              }`}
            >
              Password
            </label>
          </div>
          
          <div className="text-right mb-5">
            <a href="#" className="text-purple-700 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
          
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-medium rounded-lg hover:opacity-90 transition-all transform hover:-translate-y-1 hover:shadow-lg"
          >
            Sign In
          </button>
        </form>
        
        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">or continue with</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        
        {/* Social Login */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => handleSocialLogin('Google')}
            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all"
          >
            G
          </button>
          <button
            onClick={() => handleSocialLogin('Facebook')}
            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all"
          >
            f
          </button>
          <button
            onClick={() => handleSocialLogin('Apple')}
            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all"
          >
            a
          </button>
        </div>
        
        {/* Sign Up Link */}
        <div className="text-center text-gray-600 text-sm">
          Don't have an account?{' '}
          <a href="#" className="text-purple-700 font-semibold hover:underline">
            Sign up
          </a>
        </div>
        
        {/* Background Element */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white bg-opacity-10 transform rotate-45 z-0"></div>
      </div>
    </div>
  );
}