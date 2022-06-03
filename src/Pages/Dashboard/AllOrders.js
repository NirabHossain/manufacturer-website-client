import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Url from '../Shared/Url';
import AdminRow from './AdminRow';

const AllOrders = () => {
    const [products, setProducts] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(Url + `products`, {
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
    if (loading) return <Loading />


    return (
        <div>
            <h2 className='text-2xl text-white font-bold bg-gradient-to-r from-secondary to-primary my-3'>All Orders</h2>
            <h6 className='text-xl'>Total orders:{products.length}</h6>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>User Email</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <AdminRow key={product._id} product={product}></AdminRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;