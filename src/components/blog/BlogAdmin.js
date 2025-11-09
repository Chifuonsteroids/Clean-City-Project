import React, { useState, useEffect } from 'react';
import './Blog.css';
import BlogEditor from './BlogEditor';

const initialPosts = [
  {
    id: 1,
    title: '5 Ways to Reduce Household Waste',
    content: 'Here are five simple ways to reduce your household waste: 1. Compost food scraps. 2. Use reusable bags. 3. Avoid single-use plastics. 4. Recycle properly. 5. Donate items you no longer need.',
    author: 'EcoTeam',
    date: '2024-06-01',
    tags: ['Tips', 'Household'],
  },
  {
    id: 2,
    title: 'How CleanCity Improved My Neighborhood',
    content: "Our neighborhood used to struggle with waste management. After using CleanCity, pickups are timely and the streets are cleaner!",
    author: 'Jane M.',
    date: '2024-05-28',
    tags: ['Community', 'Story'],
  },
  {
    id: 3,
    title: 'Understanding Recycling Symbols',
    content: 'Recycling symbols can be confusing. This guide helps you understand what each symbol means and how to recycle correctly.',
    author: 'Admin',
    date: '2024-05-20',
    tags: ['Recycling', 'Education'],
  },
];

const initialComments = {
  1: [
    { id: 1, user: 'Sam', text: 'Great tips!', likes: 2, reported: false },
    { id: 2, user: 'Alex', text: 'I started composting last month.', likes: 1, reported: false },
  ],
  2: [
    { id: 1, user: 'EcoFan', text: 'Inspiring story!', likes: 1, reported: false },
  ],
  3: [],
};

const LS_POSTS = 'blogPosts';
const LS_COMMENTS = 'blogComments';

export default function BlogAdmin() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem(LS_POSTS);
    return saved ? JSON.parse(saved) : initialPosts;
  });
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem(LS_COMMENTS);
    return saved ? JSON.parse(saved) : initialComments;
  });
  const [editing, setEditing] = useState(null); // post id or null
  const [form, setForm] = useState({ title: '', content: '', tags: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem(LS_POSTS, JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem(LS_COMMENTS, JSON.stringify(comments));
  }, [comments]);

  const handleEdit = (post) => {
    setEditing(post.id);
    setForm({ title: post.title, content: post.content, tags: post.tags.join(', ') });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this post?')) {
      setPosts(posts.filter(p => p.id !== id));
      const newComments = { ...comments };
      delete newComments[id];
      setComments(newComments);
    }
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const tagsArr = form.tags.split(',').map(t => t.trim()).filter(Boolean);
    if (editing) {
      setPosts(posts.map(p => p.id === editing ? { ...p, title: form.title, content: form.content, tags: tagsArr } : p));
      setEditing(null);
    } else {
      setPosts([
        ...posts,
        {
          id: Date.now(),
          title: form.title,
          content: form.content,
          author: 'Admin',
          date: new Date().toISOString().slice(0, 10),
          tags: tagsArr,
        },
      ]);
    }
    setForm({ title: '', content: '', tags: '' });
    setShowForm(false);
  };

  const handleNew = () => {
    setEditing(null);
    setForm({ title: '', content: '', tags: '' });
    setShowForm(true);
  };

  const handleDeleteComment = (postId, cid) => {
    setComments({
      ...comments,
      [postId]: comments[postId].filter(c => c.id !== cid),
    });
  };

  const handleMarkInappropriate = (postId, cid) => {
    setComments({
      ...comments,
      [postId]: comments[postId].map(c => c.id === cid ? { ...c, reported: true } : c),
    });
  };

  return (
    <div className="blog-page-root">
      <div className="blog-card-main" role="main" aria-label="Blog Admin Panel">
        <div className="blog-brand">🧹 <span>CleanCity</span></div>
        <h2>Blog Admin Panel</h2>
        <form className="blog-admin-form" onSubmit={handleFormSubmit} aria-label="Add Blog Post">
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={handleFormChange}
            required
          />
          <BlogEditor
            value={form.content}
            onChange={val => setForm({ ...form, content: val })}
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={handleFormChange}
          />
          <button type="submit" className="blog-read-link">{editing ? 'Update' : 'Create'} Post</button>
          <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
        </form>
        <section className="blog-list">
          <h3>All Blog Posts</h3>
          <div className="blog-list-cards">
            {posts.length === 0 && <p>No posts yet.</p>}
            {posts.map(post => (
              <div className="blog-card" key={post.id}>
                <h4>{post.title}</h4>
                <div className="blog-meta">
                  <span>{post.author}</span> | <span>{post.date}</span>
                </div>
                <div className="blog-tags">
                  {post.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <button onClick={() => handleEdit(post)} aria-label={`Edit post ${post.title}`}>Edit</button>
                <button onClick={() => handleDelete(post.id)} aria-label={`Delete post ${post.title}`}>Delete</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 