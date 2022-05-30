import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartModal from './CartModal';
// import PrimaryButton from '../Shared/PrimaryButton';

const SingleTool = () => {
    const {id} = useParams();
    const [tool, setTool] = useState({});
    const [modalInfo, setModalInfo] = useState(null);

    useEffect(()=>{
        fetch(`https://dry-plateau-54628.herokuapp.com/tools/${id}`).then(res=>res.json()).then(data=>setTool(data));
    },[id])

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={tool?.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {tool?.name}
                    <div className="badge badge-secondary"> Minimum Order Quantity: {tool?.minimum_order}</div>
                </h2>
                <p>{tool?.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Quantity: {tool?.quantity}</div>
                    <div className="badge badge-outline">Price per unit: {tool?.price}</div>
                    <label htmlFor="cart-modal" className="btn  btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary my-3 modal-button" onClick={()=>setModalInfo(tool) }>Add to Cart</label>
                </div>
                {modalInfo && <CartModal tool={modalInfo} setModalInfo={setModalInfo}/>}
            </div>
        </div>
    );
};

export default SingleTool;