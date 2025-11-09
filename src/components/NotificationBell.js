import React, { useState, useEffect } from 'react';
import './NotificationBell.css';

const LS_NOTIFICATIONS = 'ccNotifications';

function getNotifications() {
  const saved = localStorage.getItem(LS_NOTIFICATIONS);
  return saved ? JSON.parse(saved) : [];
}

function saveNotifications(notifications) {
  localStorage.setItem(LS_NOTIFICATIONS, JSON.stringify(notifications));
}

export default function NotificationBell() {
  const [notifications, setNotifications] = useState(getNotifications());
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    saveNotifications(notifications);
  }, [notifications]);

  const clearAll = () => {
    setNotifications([]);
    setShowDropdown(false);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notification-bell">
      <button 
        className="notification-button"
        onClick={() => setShowDropdown(!showDropdown)}
        aria-label={`${unreadCount} unread notifications`}
      >
        🔔
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </button>
      {showDropdown && (
        <div className="notification-dropdown">
          <div className="notification-header">
            <h3>Notifications</h3>
            {notifications.length > 0 && (
              <button onClick={clearAll}>Clear All</button>
            )}
          </div>
          <div className="notification-list">
            {notifications.length === 0 ? (
              <div className="notification-empty">No notifications</div>
            ) : (
              notifications.map((n, i) => (
                <div key={i} className={`notification-item ${!n.read ? 'unread' : ''}`}>
                  <div className="notification-text">{n.text}</div>
                  <div className="notification-time">{n.time}</div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
} 