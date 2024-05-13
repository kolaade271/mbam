import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import Fogotpw from './pages/Fogotpw';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/MainPage';
import NewProduct from './pages/NewProduct';
import Cart from './pages/Cart';
import { AuthenticationProvider } from './auth/auth';
import { ProtectedRoute, PublicRoute } from './auth/protect';
import TestAuthenticationProvider from './auth/test';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/forgot" element={<PublicRoute><Fogotpw /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /> </ProtectedRoute>} />
          <Route path="newprouct" element={<ProtectedRoute><NewProduct /></ProtectedRoute>} />
          <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
