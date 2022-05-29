import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [tools, setTools] = useState([]);
    useEffect(()=>{
        fetch("https://dry-plateau-54628.herokuapp.com/tools").then(res=>res.json()).then(data=>setTools(data));
    },[])
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Tools</h3>
                <h2 className='text-4xl'>Take a look on the best sellers</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool=><Service key={tool._id} service={tool}/>)
                }
            </div>
        </div>
    );
};

export default Services;