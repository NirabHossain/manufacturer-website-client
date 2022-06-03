import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Url from '../Pages/Shared/Url';
import auth from '../firebase.init';

const UpdateProfile = ({setModalInfo, newUser, setNewUser, handleSubmit}) => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <input type="checkbox" id="user-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="user-modal" className="btn btn-secondary bg-gradient-to-r from-secondary to-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Update Profile</h3>

                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input name='name' type="text" placeholder="Name" disabled value={user?.displayName || user?.name} className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="text" placeholder="Name" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />

                        <input name='address' type="text" defaultValue="Dhaka" placeholder="Your address" className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Your Phone Number" defaultValue="017********" className="input input-bordered w-full max-w-xs" />

                        <input name='submit' type="submit" value="Submit"  className={`cursor-pointer bg-gradient-to-r from-secondary to-primary w-full max-w-xs btn-md btn-circle `}/>
                    </form>

                </div>
            </div>
        </div >
    );
};

export default UpdateProfile;