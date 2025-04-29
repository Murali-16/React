import React from 'react';
import {
  Box, Button, Card, CardContent, Divider, Stack, TextField, Typography, useMediaQuery
} from '@mui/material';
import { Google, Apple } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useFormik } from 'formik';
import './Sign.css'

const SignIn = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <Box className="signin-wrapper">
    <Card className="signin-card">
      <CardContent>
        <Typography className="signin-title">Sign In</Typography>
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
  </Box>
  
  );
};

export default SignIn;
