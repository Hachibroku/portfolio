import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from './blog/posts.json'
import './Blog.css';

const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(data.blogPosts);
      }, []);

    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1>Murphey's Blog</h1>
            </div>
            <ul className="blog-list">
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.id}`}>
                            <div className="blog-card">
                                <h1>{post.title}</h1>
                                <h3>{post.date}</h3>
                                <p>{post.content.substring(0, 100)}...</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        )
}

export default BlogList