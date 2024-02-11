import React from 'react';
import UserIcon from '../icons/UserIcon';

const User = ({ user }) => {
    return (
        <div className='flex flex-col justify-between mt-3 p-3 rounded-md cursor-pointer transition ease-in-out duration-200 border border-white hover:border-slate-300 hover:shadow-lg'>
            <div className='self-center flex justify-center items-end rounded-full border-8 shadow-sm w-24 h-24 mb-6 overflow-hidden'><UserIcon /></div>
            <p className='my-1'>Name: {user.name.firstname} {user.name.lastname}</p>
            <p className='my-1'>Username: {user.username}</p>
            <p className='my-1'>Email: {user.email}</p>
            <p className='my-1'>Phone: {user.phone}</p>
        </div>
    );
};

export default User;