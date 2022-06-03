import React, {useState, useEffect} from 'react';
import Url from '../Shared/Url';
import SingleReview from './../Home/SingleReview';

const MyReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(Url+"reviews").then(res => res.json()).then(data => setReviews(data));
    }, [])
    return (
        <section className='my-28'>
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

export default MyReview;