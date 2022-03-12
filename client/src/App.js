import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/user/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import MyProfile from "./pages/user/MyProfile";
import OtpSignup from './pages/auth/OtpSignup';
import UserDetails from './pages/auth/UserDetails';
import {Box} from "@mui/material"
import NavbarLoggedOut from "./components/NavbarLoggedOut";

const theme = createTheme( {
  palette: {
    type: 'dark',
    primary: {
      main: '#8080FF',
    },
    secondary: {
      main: '#8E8E8E',
    },
    text: {
      primary: '#8080FF',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
    },
    h2: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
    },
  }})

function App() {
  const token = localStorage.getItem('token')
  return (
    <ThemeProvider theme={theme}>
     
      <BrowserRouter>
        {token ? <Navbar/> :  <NavbarLoggedOut />}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/otpverification" element={<OtpSignup />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/userdetails" element={<UserDetails />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
 
  </ThemeProvider>
  );
}

export default App;
