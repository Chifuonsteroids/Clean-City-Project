import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import dataService from '../services/dataService';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [wasteType, setWasteType] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const nameRef = useRef();

  useEffect(() => {
    if (nameRef.current) nameRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!name || !email || !location || !wasteType || !preferredDate) {
      setError('Please fill in all required fields.');
      return;
    }
    // Simulate request submission
    setSuccess('Your waste pickup request has been submitted!');
    setName('');
    setEmail('');
    setLocation('');
    setWasteType('');
    setPreferredDate('');
    setDescription('');
  };

  return (
    <div className="home-page-root">
      <div className="home-card" role="main" aria-label="Waste pickup request form">
        <div className="home-brand">🧹 <span>CleanCity</span></div>
        <h2>Schedule a Waste Pickup</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="home-name">Full Name</label>
          <input
            id="home-name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            ref={nameRef}
            required
            aria-required="true"
          />
          <label htmlFor="home-email">Email</label>
          <input
            id="home-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            aria-required="true"
          />
          <label htmlFor="home-location">Pickup Location</label>
          <select
            id="home-location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            required
            aria-required="true"
          >
            <option value="">Select a location</option>
            {dataService.getLocations().map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
          <label htmlFor="home-waste">Waste Type</label>
          <select
            id="home-waste"
            value={wasteType}
            onChange={e => setWasteType(e.target.value)}
            required
            aria-required="true"
          >
            <option value="">Select waste type</option>
            {dataService.getWasteTypes().map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <label htmlFor="home-date">Preferred Pickup Date</label>
          <input
            id="home-date"
            type="date"
            value={preferredDate}
            onChange={e => setPreferredDate(e.target.value)}
            required
            aria-required="true"
          />
          <label htmlFor="home-desc">Additional Description</label>
          <textarea
            id="home-desc"
            placeholder="Any additional details about your waste pickup request..."
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={3}
          />
          {error && <div className="home-error" role="alert">{error}</div>}
          {success && <div className="home-success" role="status">{success}</div>}
          <button type="submit" className="home-btn">Submit Request</button>
        </form>
      </div>
    </div>
  );
} 