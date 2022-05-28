import React from 'react';
import InfoCard from './InfoCard';
import clock from './../../assets/icons/people1.png'
import marker from './../../assets/icons/people1.png'
import phone from './../../assets/icons/people1.png'



const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgclassName="bg-primary bg-gradient-to-r from-secondary to-primary" img={clock}/>
            <InfoCard bgclassName="bg-accent" img={marker}/>
            <InfoCard bgclassName="bg-secondary bg-gradient-to-r from-primary to-secondary" img={phone}/>
        </div>
    );
};

export default Info;