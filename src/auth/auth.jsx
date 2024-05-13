import React, { createContext, useState, useEffect } from 'react';
import { LoadDataStorage } from './connect';

export const AuthenticationContext = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      const isLog = true;
      setIsAuthenticated(isLog);
    }, []); 
  
    return isAuthenticated
  };
