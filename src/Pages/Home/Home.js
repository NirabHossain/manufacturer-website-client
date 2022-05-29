import React from 'react';
import Banner from './Banner';
import HireEngineer from './HireEngineer';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Services/>
            <HireEngineer/>
            <Testimonials/>
        </div>
    );
};

export default Home;