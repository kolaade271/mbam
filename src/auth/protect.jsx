// ProtectedRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthenticationContext } from './auth';
import { LoadDataStorage } from './connect';


const ProtectedRoute = ({ children }) => {
    const auth = LoadDataStorage('token');
  
    return auth ? children : <Navigate to="/login" />;
   
  };

  const PublicRoute = ({ children }) => {
    const auth = LoadDataStorage('token');
    console.log(auth)
  
    return auth ? <Navigate to="/dashboard" /> : children;
   
  };
export  {ProtectedRoute, PublicRoute};
