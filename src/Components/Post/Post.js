import React from 'react';
import './Post.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Post = (props) => {

    const { id, title, body } = props.post;


    return (
        <div className="post-container">
            <h3>Id No: {id}</h3>
            <h3>Title: {title}</h3>
            <h5>{body}</h5>
            <Link to={`/post/${id}`}><Button variant="contained" color="primary">see post </Button></Link>

        </div>

    );
};

export default Post;