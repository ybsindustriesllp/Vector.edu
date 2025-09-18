// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI, storeTokens } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is logged in on app load
    const token = localStorage.getItem('access_token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      setError('');
      const response = await authAPI.register(userData);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.detail || 'Registration failed';
      setError(message);
      throw new Error(message);
    }
  };

  const verifyOTP = async (email, code) => {
    try {
      setError('');
      const response = await authAPI.verifyOTP(email, code);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.detail || 'OTP verification failed';
      setError(message);
      throw new Error(message);
    }
  };

  const login = async (email, password) => {
    try {
      setError('');
      const response = await authAPI.login(email, password);
      const { access, refresh, user: userData } = response.data;
      
      storeTokens(access, refresh, userData);
      setUser(userData);
      
      return userData;
    } catch (error) {
      const message = error.response?.data?.detail || 'Login failed';
      setError(message);
      throw new Error(message);
    }
  };

  // src/contexts/AuthContext.js - Update the googleLogin function
    const googleLogin = async (accessToken) => {
    try {
        setError('');
        console.log('Sending Google access token to backend:', accessToken.substring(0, 20) + '...');
        
        const response = await authAPI.googleLogin(accessToken);
        const { access, refresh, user: userData } = response.data;
        
        storeTokens(access, refresh, userData);
        setUser(userData);
        
        // Redirect to dashboard
        window.location.href = '/dashboard';
        
        return userData;
    } catch (error) {
        console.error('Google login error details:', error);
        
        let message = 'Google login failed';
        if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        
        if (error.response.status === 400) {
            message = 'Invalid Google token. Please try logging in again.';
        } else if (error.response.status === 500) {
            message = 'Server error. Please try again later.';
        } else {
            message = error.response.data?.detail || error.response.data?.error || message;
        }
        } else if (error.request) {
        message = 'No response from server. Please check your connection.';
        }
        
        setError(message);
        throw new Error(message);
    }
    };

  const logout = () => {
    authAPI.logout();
    setUser(null);
  };

  const value = {
    user,
    loading,
    error,
    register,
    verifyOTP,
    login,
    googleLogin,
    logout,
    clearError: () => setError(''),
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};