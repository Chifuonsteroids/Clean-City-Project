import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Feedback from './components/Feedback';
import Awareness from './components/Awareness';
import Admin from './components/Admin';
import Login from './components/Login';
import Register from './components/Register';
import dataService from './services/dataService';
import LandingPage from './components/LandingPage';
import BlogHome from './components/blog/BlogHome';
import BlogArticle from './components/blog/BlogArticle';
import BlogAdmin from './components/blog/BlogAdmin';
import Profile from './components/profile/Profile';
import CommunityFeed from './components/community/CommunityFeed';
import NotificationBell from './components/NotificationBell';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { getCurrentUser, isAdmin, logout as authLogout } from './services/authService';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [user, setUser] = useState(getCurrentUser());
  const navigate = useNavigate();

  const handleLogin = (user) => setUser(user);
  const handleLogout = () => { authLogout(); setUser(null); navigate('/'); };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            🧹 CleanCity
          </Link>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/home">Schedule Pickup</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/community">Community</Link>
            <Link to="/awareness">Awareness</Link>
            <Link to="/feedback">Feedback</Link>
            {user && isAdmin() && <Link to="/admin">Admin</Link>}
            {user && <Link to="/profile">Profile</Link>}
            {user && <NotificationBell />}
            {!user && <Link to="/login">Login</Link>}
            {!user && <Link to="/register">Register</Link>}
            {user && <button onClick={handleLogout} className="nav-logout">Logout</button>}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Login onLogin={handleLogin} />} />
        <Route path="/blog" element={<BlogHome user={user} />} />
        <Route path="/blog/admin" element={isAdmin() ? <BlogAdmin user={user} /> : <Login onLogin={handleLogin} />} />
        <Route path="/blog/:id" element={<BlogArticle user={user} />} />
        <Route path="/community" element={<CommunityFeed user={user} />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/feedback" element={user ? <Feedback user={user} /> : <Login onLogin={handleLogin} />} />
        <Route path="/admin" element={isAdmin() ? <Admin user={user} /> : <Login onLogin={handleLogin} />} />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Login onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={() => navigate('/login')} />} />
      </Routes>
    </div>
  );
}

export default App; 