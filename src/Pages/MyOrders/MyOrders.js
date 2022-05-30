import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Row from '../Shared/Row';

const MyOrders = () => {
    const [products, setProducts] = useState([]);
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://dry-plateau-54628.herokuapp.com/products?email=${user.email}`).then(res => res.json()).then(data => setProducts(data));
    }, [user.email])
    if (loading) return <Loading />

    console.log(products);

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
                            products.map(product=><Row product={product}></Row>)
                        }
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;