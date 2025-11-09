import React, { useState } from 'react';
import './Blog.css';

const LS_POSTS = 'blogPosts';
function getPosts() {
  const saved = localStorage.getItem(LS_POSTS);
  if (saved) return JSON.parse(saved);
  return [
    {
      id: 1,
      title: '5 Ways to Reduce Household Waste',
      summary: 'Simple tips to cut down on daily waste and help the environment.',
      author: 'EcoTeam',
      date: '2024-06-01',
      tags: ['Tips', 'Household'],
      featured: true,
    },
    {
      id: 2,
      title: 'How CleanCity Improved My Neighborhood',
      summary: "A resident shares their experience with CleanCity's waste pickup.",
      author: 'Jane M.',
      date: '2024-05-28',
      tags: ['Community', 'Story'],
      featured: false,
    },
    {
      id: 3,
      title: 'Understanding Recycling Symbols',
      summary: 'A quick guide to decoding recycling labels on packaging.',
      author: 'Admin',
      date: '2024-05-20',
      tags: ['Recycling', 'Education'],
      featured: true,
    },
  ];
}
const samplePosts = getPosts();
const allTags = Array.from(new Set(samplePosts.flatMap(post => post.tags)));

export default function BlogHome() {
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');

  const filtered = samplePosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.summary.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !tag || post.tags.includes(tag);
    return matchesSearch && matchesTag;
  });

  const featured = samplePosts.filter(post => post.featured);

  return (
    <div className="blog-page-root">
      <div className="blog-card-main" role="main" aria-label="CleanCity Blog">
        <div className="blog-brand">🧹 <span>CleanCity</span></div>
        <h2>CleanCity Blog</h2>
        <div className="blog-search-filter">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select value={tag} onChange={e => setTag(e.target.value)}>
            <option value="">All Tags</option>
            {allTags.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <section className="blog-featured">
          <h3>Featured Posts</h3>
          <div className="blog-featured-list">
            {featured.map(post => (
              <div className="blog-card featured" key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.summary}</p>
                <div className="blog-meta">
                  <span>{post.author}</span> | <span>{post.date}</span>
                </div>
                <div className="blog-tags">
                  {post.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <a href={`/blog/${post.id}`} className="blog-read-link">Read More</a>
              </div>
            ))}
          </div>
        </section>
        <section className="blog-list">
          <h3>All Articles</h3>
          <div className="blog-list-cards">
            {filtered.map(post => (
              <div className="blog-card" key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.summary}</p>
                <div className="blog-meta">
                  <span>{post.author}</span> | <span>{post.date}</span>
                </div>
                <div className="blog-tags">
                  {post.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <a href={`/blog/${post.id}`} className="blog-read-link">Read More</a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 