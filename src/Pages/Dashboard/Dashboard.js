import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Url from './../Shared/Url';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(Url + `admins?email=${email}`, {
                method: 'GET',
                headers: { 'content-type': 'application/json', authorization: `Bearer ${localStorage.getItem('accessToken')}` },
            }).then(res => res.json()).then(data => {
                setAdmin(data[0]?.role === 'admin');
            });
        }
    }, [user])


    return (
        <div className="drawer drawer-mobile">

            <input id="dashboard-button" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content ">
                <h2 className='text-2xl font-bold text-accent'>Dashboard</h2>
                <Outlet />
            </div>


            <div className="drawer-side">
                <label htmlFor="dashboard-button" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {!admin && <li><Link to="/dashboard/orders">My Orders</Link></li>}
                    {!admin && <li> <Link to="/dashboard/review">Reviews</Link></li>}
                    { admin && <li><Link to="/dashboard/users">All Users</Link></li>}
                    { admin && <li><Link to="/dashboard/allOrders">All Orders</Link></li>}
                    { admin && <li><Link to="/dashboard/addProduct">Add A Tool</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;