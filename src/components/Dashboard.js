import React from 'react';
import './Dashboard.css';

function getRequests() {
  const saved = localStorage.getItem('pickupRequests');
  return saved ? JSON.parse(saved) : [];
}

function getBlogPosts() {
  const saved = localStorage.getItem('blogPosts');
  return saved ? JSON.parse(saved) : [];
}

function getCommunityPosts() {
  const saved = localStorage.getItem('communityPosts');
  return saved ? JSON.parse(saved) : [];
}

function getRequestsPerMonth(requests) {
  const months = {};
  requests.forEach(r => {
    const m = (r.date || '').slice(0,7);
    months[m] = (months[m] || 0) + 1;
  });
  return months;
}

function getMissedPickups(requests) {
  return requests.filter(r => r.status && r.status.toLowerCase().includes('missed')).length;
}

function getUserActivity() {
  const users = {};
  getRequests().forEach(r => { if (r.name) users[r.name] = (users[r.name]||0)+1; });
  getBlogPosts().forEach(p => { if (p.author) users[p.author] = (users[p.author]||0)+1; });
  getCommunityPosts().forEach(p => { if (p.user) users[p.user] = (users[p.user]||0)+1; });
  return users;
}

export default function Dashboard() {
  const requests = getRequests();
  const blogPosts = getBlogPosts();
  const communityPosts = getCommunityPosts();
  const requestsPerMonth = getRequestsPerMonth(requests);
  const missedPickups = getMissedPickups(requests);
  const userActivity = getUserActivity();
  const topUsers = Object.entries(userActivity).sort((a,b)=>b[1]-a[1]).slice(0,5);

  return (
    <div className="dashboard-page-root">
      <div className="dashboard-card" role="main" aria-label="Dashboard Analytics">
        <div className="dashboard-brand">🧹 <span>CleanCity</span></div>
        <h2>Dashboard Analytics</h2>
        <div className="dashboard-stats">
          <div className="dashboard-stat">
            <span className="stat-label">Total Requests</span>
            <span className="stat-value">{requests.length}</span>
          </div>
          <div className="dashboard-stat">
            <span className="stat-label">Missed Pickups</span>
            <span className="stat-value">{missedPickups}</span>
          </div>
          <div className="dashboard-stat">
            <span className="stat-label">Blog Posts</span>
            <span className="stat-value">{blogPosts.length}</span>
          </div>
          <div className="dashboard-stat">
            <span className="stat-label">Community Posts</span>
            <span className="stat-value">{communityPosts.length}</span>
          </div>
        </div>
        <div className="dashboard-charts">
          <div className="dashboard-chart">
            <h3>Requests Per Month</h3>
            <BarChart data={requestsPerMonth} />
          </div>
          <div className="dashboard-chart">
            <h3>Top Users (Activity)</h3>
            <ul className="dashboard-leaderboard">
              {topUsers.map(([name, count]) => (
                <li key={name}><b>{name}</b> <span>{count} actions</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarChart({ data }) {
  const keys = Object.keys(data);
  const max = Math.max(...Object.values(data), 1);
  return (
    <svg width={Math.max(300, keys.length*60)} height={180} style={{background:'#fff',borderRadius:8}}>
      {keys.map((k,i) => (
        <g key={k}>
          <rect x={i*60+20} y={160-(data[k]/max)*120} width={30} height={(data[k]/max)*120} fill="#43cea2" />
          <text x={i*60+35} y={175} textAnchor="middle" fontSize={12}>{k.slice(5,7)}/{k.slice(2,4)}</text>
          <text x={i*60+35} y={150-(data[k]/max)*120} textAnchor="middle" fontSize={12} fill="#185a9d">{data[k]}</text>
        </g>
      ))}
    </svg>
  );
} 