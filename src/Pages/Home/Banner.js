import React from 'react';
import chair from './../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 className="text-4xl font-bold">Tools & Supplies</h1>
                        <p className="py-6">We only use stainless still, gray iron to enhance processing quality. If you want to customize your tool, you have a look and come to us with your design. We have a bunch of very good qualitative engineers who can help.  </p>
                        <PrimaryButton>Contact Us</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;