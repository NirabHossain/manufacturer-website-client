import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { name, email, role } = user;
    const makeAdmin = () => {
        fetch(`https://dry-plateau-54628.herokuapp.com/users/admin/${email}`, {
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
            <td><button className="btn btn-accent">Remove Admin</button></td>
        </tr>
    );
};

export default UserRow;