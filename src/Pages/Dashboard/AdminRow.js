import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Url from '../Shared/Url';

const AdminRow = ({ product }) => {
    const [status, setStatus] = useState(product?.status || "Unpaid");
    const { toolName, quantity, email } = product;

    const id = product?._id;
    const shipProduct = () => {
        const flag = window.confirm("Are you sure?");
        if (flag) {
            const newProduct = { ...product, status: 'Shipped' };
            delete newProduct._id;
            fetch(Url + `products/${id}`, {
                method: 'PUT',
                body: JSON.stringify(newProduct),
                headers: { 'content-type': 'application/json', authorization: `Bearer ${localStorage.getItem('accessToken')}` },
            }).then(res => {
                if (res.status === 403) toast.error("Failed")
                return res.json()
            }).then(data => {
                if (data.modifiedCount) {
                    setStatus('Shipped');
                    toast.success("Product Shipped");
                }
            });

        }
    }
    return (
        <tr>
            <th>{toolName}</th>
            <td>{quantity}</td>
            <td>{email}</td>
            <td>{status}</td>
            <td>{(status === "Pending" && <button onClick={shipProduct} className="btn btn-accent">Update Shipping</button>) || (status === "Shipped" && <button disabled className="btn btn-accent">Request Feedback</button>) || (status === "Unpaid" && <button disabled className="btn btn-accent">Request Payment</button>)}</td>
        </tr>
    );
};

export default AdminRow;