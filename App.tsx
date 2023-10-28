import React from 'react';
import Navigation from './components/Navigation';
import AuthProvider from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
