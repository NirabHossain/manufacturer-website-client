import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import UpdateProfile from '../../UpdateProfile/UpdateProfile';
import Url from '../Shared/Url';

const MyProfile = () => {
    const [newUser,setNewUser] = useState({});
    const [user] = useAuthState(auth);
    const [modalInfo, setModalInfo] = useState(null);
    const [userToUpdate, setUserToUpdate] = useState({});

    useEffect(() => {
        fetch(Url+`users?email=${user.email}`, {
            method: 'GET',
            headers: { 'authorization': `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                localStorage.removeItem('accessToken');
            }
            return res.json()
        }).then(data => setNewUser(data[0]));
    }, [user.email])

    const handleSubmit= e =>{
        e.preventDefault();

        const name = e.target.name?.value;
        const email = e.target.email.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const url = Url+`users/${email}`;

        const newUserToUpdate = {name, email, address, phone};
        setUserToUpdate(newUserToUpdate, userToUpdate);
        
        const newNewUser = {...newUser, newUserToUpdate}
        setNewUser(newNewUser);

        fetch(url,{
            method:'PUT',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(newUserToUpdate)
        }).then(res=>res.json()).then(inf=>{
            if(inf){
                toast.success("User Successfully Updated");
            }
            setNewUser(newNewUser);
            setModalInfo(null);
        })
    }

    const name = userToUpdate?.displayName|| userToUpdate?.name || newUser?.name || newUser?.displayName;
    const email=userToUpdate?.email || newUser?.email;
    const phone = userToUpdate?.phone || newUser?.phone;
    const address = userToUpdate?.address || newUser?.address;

    return (
        
        <div className='w-7/12'>
            <h2 className="text-2xl text-white font-bold bg-gradient-to-r from-secondary to-primary my-3">My profile</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone number: {phone}</p>
            <p>Address: {address}</p>
            <p className='text-neutral '>To secure your information, please update your profile so that we can unify you.</p>
            <div className='flex justify-center'>
            <label htmlFor="user-modal" className="btn  btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary my-3 modal-button" onClick={()=>setModalInfo(user) }>Update Profile</label>
            </div>
            {modalInfo && <UpdateProfile setModalInfo={setModalInfo} newUser={newUser} setNewUser={setNewUser} handleSubmit={handleSubmit}/>}
        </div>
    );
};

export default MyProfile;