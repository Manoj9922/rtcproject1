import React, { createContext, useState } from 'react';

// createContext एक नया Context बनाता है
export const AuthContext = createContext();

// AuthProvider कॉम्पोनेंट जो स्टेट को मैनेज करेगा
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // यूजर का स्टेट (null अगर लॉग आउट है)

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};