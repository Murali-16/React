import React, { useState } from 'react';
import {
  Box, Button, Card, CardContent, Divider, Stack, TextField, Typography, useMediaQuery
} from '@mui/material';
import { Google, Apple } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useFormik } from 'formik';
import './Sign.css'; // Optional styling

const SignUp = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      const newUser = {
        username: values.username,
        email: values.email,
        password: values.password,
        timestamp: new Date().toISOString()
      };

      setRegisteredUsers(prev => [...prev, newUser]);
      resetForm();
    }
  });

  return (
    <Box className="signup-wrapper">
      <Card className="signin-card">
        <CardContent>
          <Typography className="signin-title">Sign Up</Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Username"
                name="username"
                variant="outlined"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ bgcolor: '#007BFF', textTransform: 'none' }}
              >
                Sign up
              </Button>
            </Stack>
          </form>

          <div className="divider">Or continue with</div>

          <div className="social-buttons">
            <div className="social-button"><Google /></div>
            <div className="social-button"><FacebookIcon /></div>
            <div className="social-button"><Apple /></div>
          </div>
        </CardContent>
      </Card>

      {/* Display Registered Users */}
      {registeredUsers.length > 0 && (
        <Card sx={{ mt: 4, p: 2, maxWidth: 400 }}>
          <Button onClick={() => setRegisteredUsers([])} color="error" sx={{ mb: 2 }}>
            Clear registered users
          </Button>

          <Typography variant="h6">Registered Users</Typography>
          {registeredUsers.map((user, index) => (
            <Box key={index} sx={{ bgcolor: '#f0f0f0', p: 1, my: 1, borderRadius: 1 }}>
              <Typography fontWeight="bold">{user.username} ({user.email})</Typography>
              <Typography variant="caption">
                Registered on: {new Date(user.timestamp).toLocaleString()}
              </Typography>
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6">JSON Data Preview</Typography>
          <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '8px', overflowX: 'auto' }}>
            {JSON.stringify(registeredUsers, null, 2)}
          </pre>
        </Card>
      )}
    </Box>
  );
};

export default SignUp;
 