import React, { useState, useRef, useEffect } from 'react';
import './Register.css';
import dataService from '../services/dataService';

export default function Register({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const nameRef = useRef();

  useEffect(() => {
    if (nameRef.current) nameRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    // Simulate registration (could add to localStorage users array)
    if (onRegister) onRegister({ name, email });
  };

  return (
    <div className="register-page-root">
      <div className="register-card" role="main" aria-label="Register form">
        <div className="register-brand">🧹 <span>CleanCity</span></div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="register-name">Name</label>
          <input
            id="register-name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            ref={nameRef}
            required
            aria-required="true"
          />
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            aria-required="true"
          />
          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            aria-required="true"
          />
          {error && <div className="register-error" role="alert">{error}</div>}
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
} 