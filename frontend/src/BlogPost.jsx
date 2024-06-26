import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './blog/posts.json';
import './Blog.css';

const BlogPost = () => {
    let { id } = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        const post = data.blogPosts.find(post => post.id === parseInt(id));

        if (post) {
            setContent(post);
        }
    }, [id]);

    if (!content) return <div>Loading...</div>;

    return (
        <div className="blog-container">
            <div className="blog-card">
                <h1>{content.title}</h1>
                <h3>{content.date}</h3>
                <p>{content.content}</p>
            </div>
        </div>
    );
}

export default BlogPost;
