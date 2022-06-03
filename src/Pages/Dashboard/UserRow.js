import React from 'react';
import { toast } from 'react-toastify';
import Url from '../Shared/Url';

const UserRow = ({ user, refetch }) => {
    const { name, email, role } = user;

    const makeAdmin = () => {
        // Admin role put method
        fetch(Url+`admins/${email}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json', authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        }).then(res => {
            if(res.status===403)toast.error("Failed")
            return res.json()
        }).then(data => {
            if (data.modifiedCount) {
                toast.success("Admin created successfully");
                refetch();
            }
        });

    }
    return (
        <tr>
            <th>{name}</th>
            <td>{email}</td>
            <td>{role || <button onClick={makeAdmin} className="btn btn-accent">Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;
