import React from 'react';
import doctor  from './../../assets/images/doctor.png';
import appointment  from './../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const HireEngineer = () => {
    return (
        <section style={{background:`url(${appointment})`}} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Customize a Tool</h3>
                <h2 className='text-3xl text-white'>Make an appointment today</h2>
                <p className='text-white'>We have a very good bunch of engineers. If you want to customize a tool in your own way, </p>
                <PrimaryButton>Hire an Engineer</PrimaryButton>
            </div>
        </section>
    );
};

export default HireEngineer;