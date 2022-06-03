import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Row from '../Shared/Row';
import Url from '../Shared/Url';

const MyOrders = () => {
    const [products, setProducts] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(Url + `products?email=${user.email}`, {
            method: 'GET',
            headers: { 'authorization': `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/login');
            }
            return res.json()
        }).then(data => setProducts(data));
    }, [user.email, navigate])

    const cancelPayment = (product) => {
        const flag = window.confirm("Are you sure?");
        if (flag) {
            const newProducts = products.filter(pd => pd._id !== product._id);
            setProducts(newProducts);
            fetch(Url + `products/${product._id}`, {
                method: 'DELETE'
            }).then(res => res.json()).then(data => {
                toast.success("Payment Canceled Successfully")
            });
        }
    }



    if (loading) return <Loading />


    return (
        <div>
            <h2 className='text-2xl text-white font-bold bg-gradient-to-r from-secondary to-primary my-3'>My Orders</h2>
            <p className='text-neutral text-bold text-xl my-2'>{(products.length === 0) && "You didn't order yet"}</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Make Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <Row key={product._id} product={product} user={user} cancelPayment={cancelPayment}></Row>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;