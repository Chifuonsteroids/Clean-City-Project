import React, { useState, useRef, useEffect } from 'react';
import './Feedback.css';
import dataService from '../services/dataService';

export default function Feedback() {
  const [requestId, setRequestId] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const idRef = useRef();

  useEffect(() => {
    if (idRef.current) idRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!requestId || !feedback) {
      setError('Please fill in all fields.');
      return;
    }
    // Simulate feedback submission
    setSuccess('Thank you for your feedback!');
    setRequestId('');
    setFeedback('');
  };

  return (
    <div className="feedback-page-root">
      <div className="feedback-card" role="main" aria-label="Feedback form">
        <div className="feedback-brand">🧹 <span>CleanCity</span></div>
        <h2>Report Missed Pickup / Feedback</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="feedback-request-id">Request ID</label>
          <input
            id="feedback-request-id"
            type="text"
            placeholder="Enter your request ID"
            value={requestId}
            onChange={e => setRequestId(e.target.value)}
            ref={idRef}
            required
            aria-required="true"
          />
          <label htmlFor="feedback-text">Feedback</label>
          <textarea
            id="feedback-text"
            placeholder="Describe the issue or leave your feedback..."
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            rows={4}
            required
            aria-required="true"
          />
          {error && <div className="feedback-error" role="alert">{error}</div>}
          {success && <div className="feedback-success" role="status">{success}</div>}
          <button type="submit" className="feedback-btn">Submit</button>
        </form>
      </div>
    </div>
  );
} 