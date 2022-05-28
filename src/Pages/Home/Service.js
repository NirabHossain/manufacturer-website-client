import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const _id = service._id;
    const navigate = useNavigate();
    const navigateToSingleTool = id =>{
        navigate(`/tools/${id}`)
    }
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service?.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service?.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary" onClick={()=>navigateToSingleTool(_id)}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;