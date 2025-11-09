import React, { useState, useEffect } from 'react';
import './Profile.css';

const LS_USER = 'ccUser';
const LS_POSTS = 'blogPosts';
const LS_COMMENTS = 'blogComments';
const LS_REQUESTS = 'pickupRequests';
const defaultUser = {
  name: 'QA Student',
  email: 'qa.student@example.com',
  avatar: 'https://i.pravatar.cc/100?img=12',
};

export default function Profile() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(LS_USER);
    return saved ? JSON.parse(saved) : defaultUser;
  });
  const [tab, setTab] = useState('posts');
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(user);

  useEffect(() => {
    localStorage.setItem(LS_USER, JSON.stringify(user));
  }, [user]);

  const handleEdit = () => {
    setEdit(true);
    setForm(user);
  };
  const handleCancel = () => setEdit(false);
  const handleSave = () => {
    setUser(form);
    setEdit(false);
  };
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const getPosts = () => {
    const saved = localStorage.getItem(LS_POSTS);
    return saved ? JSON.parse(saved) : [];
  };
  const getComments = () => {
    const saved = localStorage.getItem(LS_COMMENTS);
    return saved ? JSON.parse(saved) : {};
  };

  const userPosts = getPosts().filter(
    p => (p.author && (p.author === user.name || p.author === user.email))
  );
  const allComments = getComments();
  const userComments = [];
  Object.entries(allComments).forEach(([postId, comments]) => {
    comments.forEach(c => {
      if (c.user === user.name || c.user === user.email) {
        userComments.push({ ...c, postId });
      }
    });
  });
  const postsById = Object.fromEntries(getPosts().map(p => [String(p.id), p]));

  function getRequests() {
    const saved = localStorage.getItem(LS_REQUESTS);
    return saved ? JSON.parse(saved) : [];
  }

  const userRequests = getRequests().filter(
    r => (r.name && (r.name === user.name || r.email === user.email))
  );

  // BADGES
  const badges = [];
  if (userPosts.length > 0) {
    badges.push({
      key: 'author',
      icon: '📝',
      label: 'Blog Author',
      desc: 'Created a blog post',
    });
  }
  if (userComments.length > 0) {
    badges.push({
      key: 'commenter',
      icon: '💬',
      label: 'Commenter',
      desc: 'Commented on a blog post',
    });
  }
  if (userRequests.length > 0) {
    badges.push({
      key: 'eco',
      icon: '🌱',
      label: 'Eco Starter',
      desc: 'Requested a waste pickup',
    });
  }
  // Streak: 3+ requests in any 7-day window
  const dates = userRequests.map(r => new Date(r.date)).sort((a,b)=>a-b);
  let streak = false;
  for (let i = 0; i < dates.length - 2; i++) {
    if ((dates[i+2] - dates[i])/(1000*60*60*24) <= 7) {
      streak = true;
      break;
    }
  }
  if (streak) {
    badges.push({
      key: 'streak',
      icon: '🔥',
      label: 'Streak',
      desc: '3+ pickups in 7 days',
    });
  }

  return (
    <div className="profile-root">
      <h1>My Profile</h1>
      <div className="profile-badges">
        {badges.length === 0 ? (
          <span className="profile-badge-none">No badges yet. Start participating!</span>
        ) : (
          badges.map(b => (
            <span className="profile-badge" key={b.key} title={b.desc}>
              <span className="profile-badge-icon">{b.icon}</span>
              <span className="profile-badge-label">{b.label}</span>
            </span>
          ))
        )}
      </div>
      <div className="profile-card">
        <img src={user.avatar} alt="avatar" className="profile-avatar" />
        {edit ? (
          <div className="profile-form">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <input name="avatar" value={form.avatar} onChange={handleChange} placeholder="Avatar URL" />
            <div className="profile-form-actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={handleEdit}>Edit Profile</button>
          </>
        )}
      </div>
      <div className="profile-tabs">
        <button className={tab==='posts' ? 'active' : ''} onClick={()=>setTab('posts')}>My Blog Posts</button>
        <button className={tab==='comments' ? 'active' : ''} onClick={()=>setTab('comments')}>My Comments</button>
        <button className={tab==='requests' ? 'active' : ''} onClick={()=>setTab('requests')}>My Requests</button>
      </div>
      <div className="profile-tab-content">
        {tab==='posts' && (
          <div className="profile-tab-panel">
            {userPosts.length === 0 ? (
              <div>No blog posts yet.</div>
            ) : (
              <ul className="profile-list">
                {userPosts.map(post => (
                  <li key={post.id}>
                    <b>{post.title}</b> <span style={{color:'#43cea2'}}>{post.date}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {tab==='comments' && (
          <div className="profile-tab-panel">
            {userComments.length === 0 ? (
              <div>No comments yet.</div>
            ) : (
              <ul className="profile-list">
                {userComments.map(c => (
                  <li key={c.id}>
                    <span>On <b>{postsById[c.postId]?.title || 'Unknown Post'}</b>: </span>
                    <span>{c.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {tab==='requests' && (
          <div className="profile-tab-panel">
            {userRequests.length === 0 ? (
              <div>No waste pickup requests yet.</div>
            ) : (
              <ul className="profile-list">
                {userRequests.map((req, i) => (
                  <li key={req.id || i}>
                    <b>{req.date || 'No Date'}</b> - {req.location || 'No Location'}
                    <span style={{marginLeft:8, color:'#43cea2'}}>{req.status || 'Pending'}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 