import React from 'react';
import './LandingPage.css';

const testimonials = [
  { name: 'Jane M.', text: 'CleanCity made waste pickup so easy and reliable!' },
  { name: 'Eco Warriors', text: 'Our neighborhood is cleaner and greener thanks to CleanCity.' },
  { name: 'Sam K.', text: 'Love the dashboard and the community features!' },
];

export default function LandingPage() {
  return (
    <div className="landing-root">
      <header className="landing-hero">
        <div className="landing-logo">🧹<span>CleanCity</span></div>
        <h1 className="landing-title">Waste Pickup Scheduler</h1>
        <p className="landing-tagline">Cleaner streets, greener future. Schedule, track, and join the movement!</p>
        <div className="landing-cta">
          <a href="/register" className="cta-btn">Sign Up</a>
          <a href="/home" className="cta-btn secondary">Schedule Pickup</a>
          <a href="/blog" className="cta-btn tertiary">Read Blog</a>
        </div>
        <div className="landing-hero-animation"></div>
      </header>
      <section className="landing-features">
        <h2>Features</h2>
        <div className="features-list">
          <div className="feature-card">
            <span role="img" aria-label="schedule">📅</span>
            <h3>Easy Scheduling</h3>
            <p>Book waste pickups in seconds, track status, and get reminders.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="dashboard">📊</span>
            <h3>Dashboard</h3>
            <p>View, filter, and manage all your requests in one place.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="blog">📝</span>
            <h3>Blog & Community</h3>
            <p>Read tips, share stories, and connect with eco-friendly neighbors.</p>
          </div>
        </div>
      </section>
      <section className="landing-testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-list">
          {testimonials.map((t, i) => (
            <div className="testimonial" key={i}>
              <p>"{t.text}"</p>
              <span>- {t.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 