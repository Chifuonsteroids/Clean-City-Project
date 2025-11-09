import React, { useState, useEffect } from 'react';
import './CommunityFeed.css';

const LS_POSTS = 'communityPosts';
const LS_LIKES = 'communityLikes';
const LS_COMMENTS = 'communityComments';

function getPosts() {
  const saved = localStorage.getItem(LS_POSTS);
  if (saved) return JSON.parse(saved);
  return [
    {
      id: 1,
      content: 'Just scheduled my weekly pickup! CleanCity makes it so easy to keep our neighborhood clean.',
      author: 'Sarah J.',
      date: '2024-06-01',
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      content: 'Found a great recycling tip: rinse containers before recycling to avoid contamination.',
      author: 'Mike R.',
      date: '2024-05-30',
      likes: 8,
      comments: 1,
    },
    {
      id: 3,
      content: 'Our street looks amazing after the cleanup event! Thanks everyone for participating.',
      author: 'Admin',
      date: '2024-05-28',
      likes: 15,
      comments: 5,
    },
  ];
}

function getLikes() {
  const saved = localStorage.getItem(LS_LIKES);
  return saved ? JSON.parse(saved) : {};
}

function getComments() {
  const saved = localStorage.getItem(LS_COMMENTS);
  return saved ? JSON.parse(saved) : {};
}

export default function CommunityFeed() {
  const [posts, setPosts] = useState(getPosts());
  const [newPost, setNewPost] = useState('');
  const [likes, setLikes] = useState(getLikes());
  const [comments, setComments] = useState(getComments());
  const [showComments, setShowComments] = useState({});
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    localStorage.setItem(LS_POSTS, JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem(LS_LIKES, JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem(LS_COMMENTS, JSON.stringify(comments));
  }, [comments]);

  function addPost(e) {
    e.preventDefault();
    if (!newPost.trim()) return;
    
    const post = {
      id: Date.now(),
      content: newPost,
      author: 'You',
      date: new Date().toISOString().slice(0, 10),
      likes: 0,
      comments: 0,
    };
    setPosts([post, ...posts]);
    setNewPost('');
  }

  function toggleLike(postId) {
    setLikes(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  }

  function addComment(postId) {
    const commentText = newComment[postId];
    if (!commentText?.trim()) return;
    
    const comment = {
      id: Date.now(),
      content: commentText,
      author: 'You',
      date: new Date().toISOString().slice(0, 10),
    };
    
    setComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment]
    }));
    
    setNewComment(prev => ({ ...prev, [postId]: '' }));
  }

  return (
    <div className="community-page-root">
      <div className="community-card-main" role="main" aria-label="Community Feed">
        <div className="community-brand">🧹 <span>CleanCity</span></div>
        <h2>Community Feed</h2>
        <form className="community-post-form" onSubmit={addPost} aria-label="Create New Post">
          <textarea
            placeholder="Share something with the community..."
            value={newPost}
            onChange={e => setNewPost(e.target.value)}
            required
          />
          <button type="submit" className="community-action-btn">Post</button>
        </form>
        <section className="community-feed">
          <h3>Recent Posts</h3>
          <div className="community-posts">
            {posts.map(post => (
              <article className="community-post-card" key={post.id} role="article">
                <div className="post-header">
                  <span className="post-author">{post.author}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <p className="post-content">{post.content}</p>
                <div className="post-actions">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`like-btn ${likes[post.id] ? 'liked' : ''}`}
                    aria-label={`${likes[post.id] ? 'Unlike' : 'Like'} this post`}
                  >
                    ❤️ {post.likes + (likes[post.id] ? 1 : 0)}
                  </button>
                  <button
                    onClick={() => setShowComments(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                    className="comment-btn"
                    aria-label="Show comments"
                  >
                    💬 {comments[post.id]?.length || 0}
                  </button>
                </div>
                {showComments[post.id] && (
                  <div className="comments-section">
                    <div className="comments-list">
                      {comments[post.id]?.map(comment => (
                        <div key={comment.id} className="comment">
                          <strong>{comment.author}</strong>: {comment.content}
                        </div>
                      ))}
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); addComment(post.id); }} className="comment-form">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        value={newComment[post.id] || ''}
                        onChange={e => setNewComment(prev => ({ ...prev, [post.id]: e.target.value }))}
                      />
                      <button type="submit" className="community-action-btn">Comment</button>
                    </form>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 