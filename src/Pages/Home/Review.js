import React, { useEffect, useState } from 'react';
import Url from '../Shared/Url';
import quote from './../../assets/icons/quote.svg';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(Url+"reviews").then(res => res.json()).then(data => setReviews(data));
    }, [])
    // if(reviews.length>6)setReviews(reviews.slice(0,3));

    return (
        <section className='my-28'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Reviews</h4>
                    <h2 className="text-3xl">Check out the customer's reviews!!!</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48' />
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
                    {
                        reviews.map(review => <SingleReview key={review._id} review={review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;