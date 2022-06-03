import React, { useEffect, useState } from 'react';
import Url from '../Shared/Url';
// import { useQuery } from 'react-query';
import Service from './Service';

const Services = () => {
    const [tools, setTools] = useState([]);
    // const { isLoading, error, data, refetch } = useQuery('tools', () =>
    //     fetch(Url+"/tools").then(res => res.json())
    // )
    useEffect(() => {
        fetch(Url+"tools").then(res => res.json()).then(data => setTools(data));
    }, [])
    if(tools.length>6) setTools(tools.slice(0,6));

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Tools</h3>
                <h2 className='text-4xl'>Take a look on the best sellers</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool => <Service key={tool._id} service={tool} />)
                }
            </div>
        </div>
    );
};

export default Services;