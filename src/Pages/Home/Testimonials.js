import React from 'react';
import quote from './../../assets/icons/quote.svg';
const Testimonials = () => {
    return (
        <section className='my-28'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Reviews</h4>
                    <h2 className="text-3xl">Check out the customer's reviews</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48'/>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;