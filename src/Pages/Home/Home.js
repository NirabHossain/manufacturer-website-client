import React from 'react';
import Banner from './Banner';
import HireEngineer from './HireEngineer';
import Services from './Services';
import Review from './Review';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Services/>
            <HireEngineer/>
            <Review/>
        </div>
    );
};

export default Home;