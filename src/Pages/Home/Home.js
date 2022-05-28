import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import HireEngineer from './HireEngineer';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Services/>
            <HireEngineer/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;