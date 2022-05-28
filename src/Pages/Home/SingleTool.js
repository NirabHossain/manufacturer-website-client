import React from 'react';
import { useParams } from 'react-router-dom';

const SingleTool = () => {
    const {id} = useParams();
    
    // এইখানে ফেচ করে রেখে দিবো সব

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary"> {id}</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default SingleTool;