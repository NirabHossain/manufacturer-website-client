import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
// import btnClass from "./../Shared/ButtonClass";

const CartModal = ({ tool, setModalInfo }) => {

    const [user] = useAuthState(auth);
    const [userProduct, setUserProduct] = useState({});
    const handleSubmit= e =>{
        e.preventDefault();
        const url = `https://dry-plateau-54628.herokuapp.com/products`;

        const cartId = tool._id;
        const toolName = tool?.name;
        const name = e.target.name?.value;
        const email = e.target.email.value;
        const address = e.target.address.value;
        const quantity = parseInt(e.target.quantity.value);
        const phone = e.target.phone.value;

        const newProduct = {cartId, name, toolName, email, address, quantity, phone};
        setUserProduct(newProduct, userProduct);

        fetch(url,{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(newProduct)
        }).then(res=>res.json()).then(inf=>{
            console.log(inf);
            if(inf.success){
                toast("Successfully Added the product");
            }
            else{
                toast("Already added to the product")
            }
            setModalInfo(null);
        })
    }
    return (
        <div>
            <input type="checkbox" id="cart-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="cart-modal" className="btn btn-secondary bg-gradient-to-r from-secondary to-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Add {tool?.name} to your cart</h3>
                    <p className="py-4">{tool?.description}</p>



                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input name='name' type="text" placeholder="Name" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="text" placeholder="Name" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />

                        <input name='quantity' type="number" placeholder="Quantity" className="input input-bordered w-full max-w-xs" defaultValue={tool?.minimum_order}/>
                        <input name='address' type="text" placeholder="Your address" className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input name='submit' type="submit" value="Submit"  className={`bg-gradient-to-r from-secondary to-primary w-full max-w-xs btn-md btn-circle `}/>
                    </form>

                </div>
            </div>
        </div >
    );
};

export default CartModal;