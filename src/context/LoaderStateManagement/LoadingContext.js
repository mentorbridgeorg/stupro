import React, { createContext, useState, useContext } from 'react';

// Create the context
const LoadingContext = createContext();

// Provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Hook to use the context
export const useLoading = () => useContext(LoadingContext);
