import React, { useEffect, useState } from 'react';
import './Blog.css';

const LS_POSTS = 'blogPosts';
const LS_COMMENTS = 'blogComments';

function getPosts() {
  const saved = localStorage.getItem(LS_POSTS);
  if (saved) return JSON.parse(saved);
  return [
    {
      id: 1,
      title: '5 Ways to Reduce Household Waste',
      content: 'Simple tips to cut down on daily waste and help the environment.\n1. Use reusable bags.\n2. Compost food scraps.\n3. Avoid single-use plastics.\n4. Donate old clothes.\n5. Buy in bulk.',
      author: 'EcoTeam',
      date: '2024-06-01',
      tags: ['Tips', 'Household'],
      featured: true,
    },
    {
      id: 2,
      title: 'How CleanCity Improved My Neighborhood',
      content: "A resident shares their experience with CleanCity's waste pickup.\nIt made a huge difference!",
      author: 'Jane M.',
      date: '2024-05-28',
      tags: ['Community', 'Story'],
      featured: false,
    },
    {
      id: 3,
      title: 'Understanding Recycling Symbols',
      content: 'A quick guide to decoding recycling labels on packaging.\nLook for the triangle symbols and numbers!',
      author: 'Admin',
      date: '2024-05-20',
      tags: ['Recycling', 'Education'],
      featured: true,
    },
  ];
}

function getComments() {
  const saved = localStorage.getItem(LS_COMMENTS);
  if (saved) return JSON.parse(saved);
  return {
    1: [
      { id: 1, user: 'Sam', text: 'Great tips!', likes: 2, reported: false },
      { id: 2, user: 'Alex', text: 'I started composting last month.', likes: 1, reported: false },
    ],
    2: [
      { id: 1, user: 'EcoFan', text: 'Inspiring story!', likes: 1, reported: false },
    ],
    3: [],
  };
}

export default function BlogArticle({ match }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(getComments()[post?.id] || []);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const id = parseInt((match && match.params && match.params.id) || window.location.pathname.split('/').pop(), 10);
    const found = getPosts().find(p => p.id === id);
    setPost(found);
  }, [match]);

  useEffect(() => {
    const all = getComments();
    all[post?.id] = comments;
    localStorage.setItem(LS_COMMENTS, JSON.stringify(all));
  }, [comments, post?.id]);

  if (!post) return <div className="blog-page-root"><div className="blog-card-main"><p>Article not found.</p></div></div>;

  const handleAddComment = () => {
    if (commentText.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), user: 'You', text: commentText, likes: 0, reported: false },
      ]);
      setCommentText('');
    }
  };

  const handleLike = (cid) => {
    setComments(comments.map(c => c.id === cid ? { ...c, likes: c.likes + 1 } : c));
  };

  const handleReport = (cid) => {
    setComments(comments.map(c => c.id === cid ? { ...c, reported: true } : c));
  };

  return (
    <div className="blog-page-root">
      <article className="blog-card-main" role="article" aria-label={post.title} tabIndex={0}>
        <div className="blog-brand">🧹 <span>CleanCity</span></div>
        <h2>{post.title}</h2>
        <div className="blog-meta">
          <span>{post.author}</span> | <span>{post.date}</span>
        </div>
        <div className="blog-tags">
          {post.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <div className="blog-content" style={{textAlign:'left', margin:'1rem 0'}}>
          {post.content.split('\n').map((line, i) => <p key={i}>{line}</p>)}
        </div>
        <a href="/blog" className="blog-read-link" tabIndex={0}>← Back to Blog</a>
      </article>
      <section className="blog-comments">
        <h2>Comments</h2>
        <div className="blog-comments-list">
          {comments.length === 0 && <p>No comments yet. Be the first!</p>}
          {comments.map(c => (
            <div className={`blog-comment${c.reported ? ' reported' : ''}`} key={c.id}>
              <span className="blog-comment-user">{c.user}:</span>
              <span className="blog-comment-text">{c.text}</span>
              <div className="blog-comment-actions">
                <button onClick={() => handleLike(c.id)} disabled={c.reported}>👍 {c.likes}</button>
                <button onClick={() => handleReport(c.id)} disabled={c.reported}>{c.reported ? 'Reported' : 'Report'}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-add-comment">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            maxLength={200}
          />
          <button onClick={handleAddComment} disabled={!commentText.trim()}>Post</button>
        </div>
      </section>
    </div>
  );
} 