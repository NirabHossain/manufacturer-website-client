import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    // const [admin] = useAdmin();
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
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                    <li><Link to="/dashboard/review">Reviews</Link></li>
                    <li>{<Link to="/dashboard/users">All Users</Link>}</li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;