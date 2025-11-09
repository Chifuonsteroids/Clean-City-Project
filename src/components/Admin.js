import React, { useState } from 'react';
import './Admin.css';

function getRequests() {
  const saved = localStorage.getItem('pickupRequests');
  return saved ? JSON.parse(saved) : [];
}
function saveRequests(requests) {
  localStorage.setItem('pickupRequests', JSON.stringify(requests));
}

export default function Admin() {
  const [requests, setRequests] = useState(getRequests());

  const handleStatus = (id, status) => {
    const updated = requests.map(r => r.id === id ? { ...r, status } : r);
    setRequests(updated);
    saveRequests(updated);
  };
  const handleDelete = (id) => {
    if (window.confirm('Delete this request?')) {
      const updated = requests.filter(r => r.id !== id);
      setRequests(updated);
      saveRequests(updated);
    }
  };
  const missedCount = requests.filter(r => r.status && r.status.toLowerCase().includes('missed')).length;

  return (
    <div className="admin-page-root">
      <div className="admin-card" role="main" aria-label="Admin: Manage Requests">
        <div className="admin-brand">🧹 <span>CleanCity</span></div>
        <h2>Admin: Manage Requests</h2>
        <div className="admin-summary">
          <span>Total Requests: {requests.length}</span>
          <span>Missed Pickups: {missedCount}</span>
        </div>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(r => (
                <tr key={r.id}>
                  <td>{r.date}</td>
                  <td>{r.name}</td>
                  <td>{r.location}</td>
                  <td>{r.status || 'Pending'}</td>
                  <td>
                    <button onClick={() => handleStatus(r.id, 'Completed')}>Complete</button>
                    <button onClick={() => handleStatus(r.id, 'Missed')}>Missed</button>
                    <button onClick={() => handleDelete(r.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 