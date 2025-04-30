import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [savedUsers, setSavedUsers] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    try {
      const storedUsers = localStorage.getItem('signupData');
      if (storedUsers) {
        setSavedUsers(JSON.parse(storedUsers));
      }
    } catch (error) {
      console.error('Error loading saved users:', error);
    }
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword) return 'Confirm password is required';
    if (confirmPassword !== password) return 'Passwords do not match';
    return '';
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });

    const updatedErrors = { ...errors };
    if (field === 'email') updatedErrors.email = validateEmail(email);
    if (field === 'password') updatedErrors.password = validatePassword(password);
    if (field === 'confirmPassword') updatedErrors.confirmPassword = validateConfirmPassword(confirmPassword);
    setErrors(updatedErrors);
  };

  const saveSignupData = (userData) => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem('signupData')) || [];

      const emailExists = existingUsers.some(user => user.email === userData.email);
      if (emailExists) {
        setStatusMessage('This email is already registered');
        setTimeout(() => setStatusMessage(''), 3000);
        return false;
      }

      const updatedUsers = [...existingUsers, userData];
      localStorage.setItem('signupData', JSON.stringify(updatedUsers));
      setSavedUsers(updatedUsers);
      setStatusMessage('Registration successful!');
      setTimeout(() => setStatusMessage(''), 3000);
      return true;
    } catch (error) {
      console.error('Error saving signup data:', error);
      setStatusMessage('Error saving data');
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      email: true,
      password: true,
      confirmPassword: true
    });

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    setErrors({
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError
    });

    if (!emailError && !passwordError && !confirmPasswordError) {
      const userData = {
        email,
        password, // Do not store plain text passwords in production
        registeredAt: new Date().toISOString()
      };
      const success = saveSignupData(userData);
      if (success) setIsRegistered(true);
    }
  };

  const renderSavedUsers = () => {
    if (savedUsers.length === 0) return <p className="text-gray-600">No registered users</p>;

    return (
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Registered Users</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {savedUsers.map((user, index) => (
            <div key={index} className="p-2 bg-gray-100 rounded-lg text-sm">
              <p className="font-medium">{user.email}</p>
              <p className="text-xs text-gray-500">
                Registered on: {new Date(user.registeredAt).toLocaleString()}
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
          <h1 className="text-2xl font-semibold text-gray-800">Sign Up</h1>
          <p className="text-gray-600 mt-1">Create your account below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder="Email"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
              touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {touched.email && errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => handleBlur('password')}
            placeholder="Password"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
              touched.password && errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {touched.password && errors.password && <p className="text-sm text-red-500">{errors.password}</p>}

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => handleBlur('confirmPassword')}
            placeholder="Confirm Password"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
              touched.confirmPassword && errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p className="text-sm text-red-500">{errors.confirmPassword}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <br />
        {/* <br /> */}
          <p>already have an account? <Button onClick={()=>{navigate('/')}}>Sign in</Button></p>
        {isRegistered && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
            <p className="text-green-700 font-medium">You are registered as {email}</p>
          </div>
        )}

      
      </div>
    </div>
  );
}
