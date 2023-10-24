import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<LandingPage />} />
        <Route path="login"  element={<LoginPage />} />
        <Route path="register"  element={<RegisterPage />} />
        <Route path="dashboard"  element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
