import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [newUser,setNewUser] = useState({});
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`https://dry-plateau-54628.herokuapp.com/users?email=${user.email}`, {
            method: 'GET',
            headers: { 'authorization': `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                localStorage.removeItem('accessToken');
            }
            return res.json()
        }).then(data => setNewUser(data));
    }, [user.email])

    console.log(newUser);
    return (
        <div>
            <h2 className="text-2xl">My profile</h2>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <p className='text-neutral '>I am sorry! I tried heart and soul after my BCS exam 27th may to complete this but couldn't finish due to JWT token related errors. I don't know if whether I pass. If I pass, I will make it best in sha Allah.</p>
        </div>
    );
};

export default MyProfile;