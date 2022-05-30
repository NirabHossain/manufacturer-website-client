import React from 'react';

const SingleReview = ({review}) => {
    const {name, image} = review;
    return (
        <div>
            <h2 className='text-2xl'>{name}</h2>
            <p>{image}</p>
        </div>
    );
};

export default SingleReview;