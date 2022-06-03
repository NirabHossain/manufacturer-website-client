import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Url from '../Shared/Url';

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({});
    const handleSubmit = e => {
        e.preventDefault();
        const url = Url + `tools`;
        const name = e.target.name?.value;
        const description = e.target.description?.value;
        const img = e.target.img?.value;
        const quantity = parseInt(e.target.quantity.value);
        const minimum_order = parseInt(e.target.minimum_order?.value);
        const price = parseInt(e.target.price?.value);

        const newProduct = { name, description, img, quantity, minimum_order, price };
        setAddProduct(newProduct, addProduct);


        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: { "content-type": "application/json" },
        }).then(res => res.json()).then(inf => {
            if (inf.success) {
                toast.success("Product Successfully Added");
            }
            else {
                toast.warning("Product already added");
            }
            e.target.reset();
        })
    }
    return (
        <div className=''>
            <h2 className='text-2xl text-primary'>Add a Product</h2>
            <div className="modal-box">

                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>
                    <input name='name' type="text" placeholder="Name" required className="input input-bordered w-full max-w-xs" />
                    <input name='description' type="text" placeholder="Short Description" required className="input input-bordered w-full max-w-xs" />
                    <input name='img' type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />

                    <input name='quantity' type="number" placeholder="Quantity" className="input input-bordered w-full max-w-xs" step="10" />
                    <input name='minimum_order' type="number" placeholder="Minimum Order Quantity" className="input input-bordered w-full max-w-xs" step="10" />
                    <input name='price' type="number" placeholder="Per Unit Price" className="input input-bordered w-full max-w-xs" step="10" />
                    <input name='submit' type="submit" value="Submit" className={`cursor-pointer bg-gradient-to-r from-secondary to-primary w-full max-w-xs btn-md btn-circle `} />
                </form>

            </div>
        </div>
    );
};

export default AddProduct;