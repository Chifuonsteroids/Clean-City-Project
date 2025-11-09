import React, { useState, useRef, useEffect } from 'react';
import { login as authLogin, getCurrentUser, logout as authLogout } from '../services/authService';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const user = getCurrentUser();
  const emailRef = useRef();

  // Focus first input on mount
  useEffect(() => {
    if (emailRef.current) emailRef.current.focus();
  }, []);

  // If already logged in, redirect to profile
  useEffect(() => {
    if (user) navigate('/profile', { replace: true });
  }, [user, navigate]);

  // After login, redirect to intended page or profile
  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }
    const user = authLogin(email, password);
    if (onLogin) onLogin(user);
    const from = location.state?.from || '/profile';
    navigate(from, { replace: true });
  };

  return (
    <div className="login-page-root">
      <div className="login-card" role="main" aria-label="Login form">
        <div className="login-brand">🧹 <span>CleanCity</span></div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            ref={emailRef}
            autoComplete="username"
            required
            aria-required="true"
          />
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            aria-required="true"
          />
          {error && <div className="login-error" role="alert">{error}</div>}
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
} 