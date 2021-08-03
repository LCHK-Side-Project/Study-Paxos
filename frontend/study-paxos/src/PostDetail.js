import React from 'react';
import './index.css';

//Header of the Post
//Currently only displays the title of the post
let PostDetail = (props) => {

    return (
        <div>
            <h2>{props.question}</h2>            
        </div>
    );
}

export default PostDetail;
