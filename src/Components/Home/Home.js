import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import Header from '../Header/Header';

const Home = () => {
    const [post, setpost] = useState([])
    useEffect(() => {

        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then(res => res.json())
            .then(data => setpost(data))
    }, [])

    return (
        <div>
            <div> <Header></Header> </div> 

            <div>
                {/* <h1 style={{ textAlign: "center", color: "blue" }}>Total Post: {post.length}</h1> */}

                {
                    post.map(post => <Post post={post}> </Post>)
                }

            </div>
        </div>

    );
};

export default Home;