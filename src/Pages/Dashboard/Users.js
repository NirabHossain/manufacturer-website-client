import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Url from '../Shared/Url';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(Url + "users").then(res => res.json()))
    if (isLoading) return <Loading />

    return (
        <div>
            <h2 className='text-2xl text-white font-bold bg-gradient-to-r from-secondary to-primary my-3'>All Users</h2>
            <h2 className='text-xl my-2'>Total users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>User type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow key={user.email} user={user} refetch={refetch} />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;