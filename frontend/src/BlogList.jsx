import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from './blog/posts.json'

const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(data.blogPosts);
      }, []);

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.id}`}><h1>{post.title}</h1></Link>
                        <p>{post.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogList