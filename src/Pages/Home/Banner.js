import React, { useState } from 'react';
// import chair from './../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Banner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <DayPicker mode="single" selected={date} onSelect={setDate}/>
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