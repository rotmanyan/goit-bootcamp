import React from 'react';
import PropTypes from 'prop-types';

const Post =
    ({
         title,
         text,
         likes,
         date
     }) => {
        return (
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
                <span>Likes: {likes} </span>
                <span>Date: {date}</span>
            </div>
        )
    };
Post.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    likes: PropTypes.number,
    date: PropTypes.string,
};
Post.defaultProps = {
    likes: 0,
    date: `${Date.now()/24/3600}`,
}

export default Post;