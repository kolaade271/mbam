// TestAuthenticationProvider.js
import React, { useContext } from 'react';
import { AuthenticationContext } from './auth';

const TestAuthenticationProvider = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  console.log("isAuthenticated:", isAuthenticated);

  return (
    <div>
      <p>Is Authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default TestAuthenticationProvider;
