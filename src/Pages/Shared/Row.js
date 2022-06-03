import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Url from './Url';

const Row = ({product, user, cancelPayment }) => {
    const [status, setStatus] = useState(product?.status||"Unpaid");
    const {toolName, quantity} = product;
    const _id = product?._id;
    const makePayment = () =>{
        const newProduct = {...product, status:'Pending'};
        delete newProduct._id;

        console.log(_id);
        fetch(Url+`products/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(newProduct),
            headers: { 'content-type': 'application/json', authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        }).then(res => {
            if(res.status===403)toast.error("Failed")
            return res.json()
        }).then(data => {
            if (data.modifiedCount) {
                setStatus('Pending');
                toast.success("Payment successful");
            }
        });

    }
    return (
        <tr>
            <th>{toolName}</th>
            <td>{quantity}</td>
            <td>{status}</td>            
            <td>{
                (status==='Pending' && <button onClick={()=>cancelPayment(product)} className="btn btn-accent">Cancel</button>)||
                (status==='Unpaid' && <button onClick={makePayment} className="btn btn-accent">Pay Now</button>)|| 
                (status==='Shipped' && <span className='text-primary'>Payment Complete</span>) 
            }</td>
        </tr>
    );
};

export default Row;