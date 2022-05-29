import React from 'react';
import engineer  from './../../assets/images/engineer.png';
import worldMap  from './../../assets/images/world-map1.jpg';
import PrimaryButton from '../Shared/PrimaryButton';


const HireEngineer = () => {
    return (
        <section style={{background:`url(${worldMap})`}} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={engineer} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Customize a Tool</h3>
                <h2 className='text-3xl text-white'>Make an appointment today</h2>
                <p className='text-white'>We have a very good bunch of engineers <strong className='text-accent'>all over the world.</strong> If you want to customize a tool in your own way, </p>
                <PrimaryButton>Hire an Engineer</PrimaryButton>
            </div>
        </section>
    );
};

export default HireEngineer;