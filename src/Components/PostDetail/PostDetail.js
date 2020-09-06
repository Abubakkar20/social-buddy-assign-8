import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const { postId } = useParams();

    const [post, setPost] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId} `
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);

    const [comment, setComment] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComment(data))
    }, []);

    const totalComment = comment.splice(0, 5)

    return (
        <div>
            <div className="postdetail-container">
                <h3>UserId: 0{post.userId}</h3>
                <h3>Id: {post.id}</h3>
                <h2>Title: {post.title}</h2>
                <p> {post.body}</p>

            </div>
            <div>
                <h2 style={{ textAlign: "center", color: "blue", marginTop: "30px", marginBottom: "50px",borderBottom:"1px solid lightgray" }}>COMMENT HERE</h2>

                {
                    totalComment.map(comment => <Comment comment={comment}></Comment>)
                }


            </div>
        </div>
    );
};

export default PostDetail;