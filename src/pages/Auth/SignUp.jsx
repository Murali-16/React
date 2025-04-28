import React from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";

const SignUp = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      
      }}
    >

      <Box>
      <img

            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            style={{ width: 120, margin: 50 ,}}
          />


      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 6,
          marginTop:"40px"

        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.75)",
            width: "100%",
            maxWidth: 360,
            color: "white",
          }}
        >
         
          <Typography
            variant="h5"
            sx={{

              fontWeight: 700,
              fontFamily: "Poppins, sans-serif",
              color: "white",
              mb: 2,
              alignSelf: "flex-start",
             
            }}
          >
            Sign Up
          </Typography>

          <Box component="form" noValidate autoComplete="off" sx={{ width: "100%" }}>
            <TextField
              label="Name"
              variant="filled"
              fullWidth
              margin="normal"
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "lightgray" } }}
            />
            <TextField
              label="Email"
              variant="filled"
              fullWidth
              margin="normal"
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "lightgray" } }}
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              fullWidth
              margin="normal"
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "lightgray" } }}
            />
            <Button
              fullWidth
              sx={{
                mt: 2,
                backgroundColor:'#df2110',
                "&:hover": {
                  backgroundColor:"#f0695c",
                  transform: "scale(1.03)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                },
                color: "white",
                p:1.5,
                mt:3,
                fontWeight: 600,
              }}
            >
              Sign Up
            </Button>
            <Typography
              sx={{
                textAlign: "right",
                fontSize: 14,
                mt: 2,
                textDecoration: "underline",
                cursor: "pointer",
                color: "lightgray",
              }}
            >
              Forgot password?
            </Typography>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default SignUp;
