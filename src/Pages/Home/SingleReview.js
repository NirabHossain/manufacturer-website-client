import React from 'react';

const SingleReview = ({ review }) => {
    const name = review?.name;
    const description = review?.image || review?.review;
    const rating = review?.rating;
    return (
        <div>
            <h2 className='text-2xl'>{name}</h2>
            <p>{description}</p>
            {rating && <p className="text-white font-bold bg-gradient-to-r from-secondary to-primary">Rating: {rating}</p>}
        </div>
    );
};

export default SingleReview;