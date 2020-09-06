import React, { useState } from 'react';
import './Comment.css'
import FakeData from '../../FakeData/FakeImg'

const Comment = (props) => {
    const { name } = props.comment

    let images = FakeData;
    const [image, setImage] = useState(images)
    console.log(image)

    return (
        <div className="comment-container">

            <div className="comment-image">
                <img src={image[0].image} alt="" />

            </div>
            <div> <h4>{name}</h4></div>
        </div>
    );
};

export default Comment;