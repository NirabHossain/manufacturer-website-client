import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data:users, isLoading, refetch} = useQuery('users',()=>fetch("https://dry-plateau-54628.herokuapp.com/users").then(res => res.json()))
    if(isLoading) return <Loading/>

    return (
        <div>
            <h2>Total users: {users.length}</h2>
            <h2 className='text-2xl'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Administration</th>
                            <th>Administration</th>
                        </tr>
                    </thead>
                    {
                        users.map(user => <UserRow id={user.email} user={user} refetch={refetch}/>)
                    }
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;