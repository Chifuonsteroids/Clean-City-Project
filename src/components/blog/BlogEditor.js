import React, { useState } from 'react';
import './Blog.css';

export default function BlogEditor({ onSave, initial = {} }) {
  const [title, setTitle] = useState(initial.title || '');
  const [summary, setSummary] = useState(initial.summary || '');
  const [content, setContent] = useState(initial.content || '');
  const [tags, setTags] = useState((initial.tags || []).join(', '));

  function handleSubmit(e) {
    e.preventDefault();
    onSave({
      ...initial,
      title,
      summary,
      content,
      tags: tags.split(',').map(t => t.trim()),
    });
  }

  return (
    <div className="blog-page-root">
      <div className="blog-card-main" role="main" aria-label="Blog Editor">
        <div className="blog-brand">🧹 <span>CleanCity</span></div>
        <h2>{initial.id ? 'Edit Post' : 'New Blog Post'}</h2>
        <form className="blog-admin-form" onSubmit={handleSubmit} aria-label="Blog Editor Form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Summary"
            value={summary}
            onChange={e => setSummary(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={e => setTags(e.target.value)}
          />
          <button type="submit" className="blog-read-link">{initial.id ? 'Update' : 'Publish'}</button>
        </form>
      </div>
    </div>
  );
} 