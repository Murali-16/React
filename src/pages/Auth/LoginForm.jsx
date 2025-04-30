import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate(); // Initialize the navigator
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedLogins, setSavedLogins] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required';
    } else if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  // Validate password
  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    } else if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return '';
  };

  // Load saved logins from localStorage on component mount
  useEffect(() => {
    try {
      const storedLogins = localStorage.getItem('signupData');
      if (storedLogins) {
        setSavedLogins(JSON.parse(storedLogins));
      }
    } catch (error) {
      console.error('Error loading saved logins:', error);
    }
  }, []);

  // // Save login data to localStorage
  // const saveLoginData = (loginData) => {
  //   try {
  //     // Get existing logins or initialize empty array
  //     const existingLogins = JSON.parse(localStorage.getItem('signupData')) || [];
      
  //     // Check if this email already exists
  //     const emailExists = existingLogins.some(login => login.email === loginData.email);
      
  //     let updatedLogins;
  //     if (emailExists) {
  //       setStatusMessage('Login updated successfully');
  //     } else {
  //       // Add new login
  //       updatedLogins = [...existingLogins, loginData];
  //       setStatusMessage('Login saved successfully');
  //     }
      
  //     // Save to localStorage
  //     localStorage.setItem('loginData', JSON.stringify(updatedLogins));
  //     setSavedLogins(updatedLogins);
      
  //     // Auto-hide status message after 3 seconds
  //     setTimeout(() => setStatusMessage(''), 3000);
      
  //     return true;
  //   } catch (error) {
  //     console.error('Error saving login data:', error);
  //     setStatusMessage('Error saving login data');
  //     return false;
  //   }
  // };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({ email: true, password: true });

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      email: emailError,
      password: passwordError
    });

    if (!emailError && !passwordError) {
      const matchedUser = savedLogins.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        setIsLoggedIn(true);
        setStatusMessage('Login successful!');
        setTimeout(() => setStatusMessage(''), 3000);
        navigate('/dashboard'); // 👉 navigate to another page (change to your desired path)
      } else {
        setStatusMessage('Invalid email or password');
        setTimeout(() => setStatusMessage(''), 3000);
      }
    }
  };

  // Handle blur events to validate on focus loss
  const handleBlur = (field) => {
    setTouched({
      ...touched,
      [field]: true
    });
    
    // Validate the field that lost focus
    if (field === 'email') {
      setErrors({
        ...errors,
        email: validateEmail(email)
      });
    } else if (field === 'password') {
      setErrors({
        ...errors,
        password: validatePassword(password)
      });
    }
  };

  // Log out functionality
  const handleLogout = () => {
    setIsLoggedIn(false);
    setStatusMessage('Logged out successfully');
    setTimeout(() => setStatusMessage(''), 3000);
  };

  // View saved logins
  const renderSavedLogins = () => {
    if (savedLogins.length === 0) {
      return <p className="text-gray-600">No saved logins</p>;
    }

    return (
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Saved Logins</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {savedLogins.map((login, index) => (
            <div key={index} className="p-2 bg-gray-100 rounded-lg text-sm">
              <p className="font-medium">{login.email}</p>
              <p className="text-xs text-gray-500">
                Last login: {new Date(login.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        {statusMessage && (
          <div className="mb-4 p-2 bg-blue-100 text-blue-700 rounded-lg text-center">
            {statusMessage}
          </div>
        )}
        
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Sign In</h1>
          <p className="text-gray-600 mt-1">Choose one of the options to go</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur('email')}
              placeholder="get@ziontutorial.com"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handleBlur('password')}
              placeholder="Password"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched.password && errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {touched.password && errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Or continue with</p>
          
          <div className="flex justify-center gap-4 mt-4">
            {/* Google Button */}
            <button 
              type="button" 
              className="flex items-center justify-center w-16 h-12 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path 
                  fill="#EA4335" 
                  d="M12 5c1.6166 0 3.1012.55566 4.2638 1.47003v-.00012l3.2277-3.22766C17.4886 1.41 14.9796 0 12 0 7.3924 0 3.3948 2.75642 1.386 6.81997l3.7493 2.91L7.5 8.5c.8735-2.01113 2.8765-3.5 5.25-3.5z" 
                />
                <path 
                  fill="#4285F4" 
                  d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" 
                />
                <path 
                  fill="#34A853" 
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96l-3.98 3.09C3.74 21.3 7.48 24 12 24z" 
                />
                <path 
                  fill="#FBBC05" 
                  d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" 
                />
              </svg>
            </button>
            
            {/* Facebook/Meta Button */}
            <button 
              type="button"
              className="flex items-center justify-center w-16 h-12 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="#0866FF"
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </button>
            
            {/* Apple Button */}
            <button 
              type="button"
              className="flex items-center justify-center w-16 h-12 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path 
                  fill="#000000" 
                  d="M17.5827 12.2852C17.5467 9.34581 19.9472 7.97294 20.0552 7.91057C18.6097 5.79407 16.3357 5.51044 15.5407 5.48306C13.6597 5.28556 11.8527 6.63306 10.8967 6.63306C9.9197 6.63306 8.4607 5.50694 6.8702 5.53869C4.8162 5.57044 2.9062 6.72369 1.8747 8.48931C-0.2783 12.1033 1.3057 17.7678 3.3907 20.6578C4.4182 22.0743 5.6262 23.6551 7.2227 23.599C8.7782 23.5385 9.3757 22.6028 11.2327 22.6028C13.0702 22.6028 13.6337 23.599 15.2587 23.5638C16.9267 23.5385 17.9787 22.1418 18.9682 20.713C20.1577 19.0913 20.6342 17.5038 20.6552 17.4175C20.6097 17.4018 17.6232 16.2145 17.5827 12.2852Z"/>
                <path 
                  fill="#000000"
                  d="M14.5299 3.6908C15.3489 2.6876 15.9077 1.3548 15.7472 0C14.5752 0.0498 13.1309 0.7955 12.2779 1.7768C11.5209 2.6513 10.8444 4.0143 11.0259 5.3383C12.3444 5.4367 13.6812 4.6808 14.5299 3.6908Z"/>
              </svg>
            </button>
          </div>
        </div>
          <button 
            onClick={handleSubmit}
            className="w-full py-3 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Log in
          </button>
          <br />
          <br />
          <p>Don't have an account? <Button onClick={()=>{navigate('/signup')}}>Sign Up</Button></p>
      
      </div>
    </div>
  );
}