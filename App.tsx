import React from 'react';
import { LoadingProvider } from './src/context/LoaderStateManagement/LoadingContext';
import LoaderComponent from './src/components/Loader/LoaderComponent';

const App = () => {
  return (
    <LoadingProvider>
      //Navigation of all pages
      
      <LoaderComponent />
    </LoadingProvider>
  );
};

export default App;


