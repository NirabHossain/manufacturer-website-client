import React from 'react';
import Service from './Service';
import fluoride from './../../assets/images/fluoride.png'
import cavity from './../../assets/images/cavity.png'
import whitening from './../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img:fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "",
            img:cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "",
            img: whitening
        }
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Tools</h3>
                <h2 className='text-4xl'>Take a look on the best sellers</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service=><Service key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;