import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const _id = service._id;
    const navigate = useNavigate();
    const navigateToSingleTool = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        // <div className="card lg:max-w-96 bg-base-100 shadow-xl">
        //     <figure className="px-10 pt-10">
        //         <img src={service?.img} alt="Shoes" className="rounded-xl" />
        //     </figure>

        // </div>
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <figure><img src={service?.img} alt="Shoes" className="rounded-xl" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {service?.name}
                    <div className="badge badge-secondary"> {service?.quantity} available</div>
                </h2>
                <p>{service?.description}</p>
                <div className="card-actions justify-between">
                    {
                        service?.quantity < 1000 && <div className='text-neutral'>Few left! Hurry up!!</div>
                    }
                    <div className="badge badge-outline"> Minimum Order: {service?.minimum_order}</div>
                    <div className="badge badge-outline">Per Unit Price ${service?.price}</div>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary px-20" onClick={() => navigateToSingleTool(_id)}>Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;