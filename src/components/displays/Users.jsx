import React from 'react';
import User from '../User/User';


const Users = ({ data }) => {
    return (
        <div className='container mx-auto my-5 text-slate-600 gridCustom '>
            {data.map((item) => <User user={item} key={item.id} />)}
        </div>
    );
};

export default Users;