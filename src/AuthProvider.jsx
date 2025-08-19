import { useState, useEffect, createContext } from 'react';

// Create the context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const loggedIn = !!localStorage.getItem('accessToken');
    console.log('AuthProvider init, isLoggedIn:', loggedIn);
    return loggedIn;
  });

  // Synchroniser isLoggedIn avec les changements dans localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const loggedIn = !!localStorage.getItem('accessToken');
      console.log('Storage changed, isLoggedIn:', loggedIn);
      setIsLoggedIn(loggedIn);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;