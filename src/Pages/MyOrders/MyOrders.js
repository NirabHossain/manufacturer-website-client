import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Row from '../Shared/Row';

const MyOrders = () => {
    const [products, setProducts] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://dry-plateau-54628.herokuapp.com/products?email=${user.email}`, {
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
            <h2 className='text-2xl'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        products.map(product => <Row key={product.cartId} product={product}></Row>)
                    }
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;