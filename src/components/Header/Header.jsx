import React from 'react';

const Header = ({ changeState, changeDisplayNoFetch }) => {
    return (
        <header className='p-4 border drop-shadow w-full'>
            <nav className='container mx-auto'>
                <ul className='flex justify-around *:hover:cursor-pointer *:transition *:p-3 font-bold text-gray-700'>
                    <li onClick={() => changeState('products')} className='hover:underline hover:-translate-y-1 active:text-amber-600'>Products</li>
                    <li onClick={() => changeState('users')} className='hover:underline hover:-translate-y-1 active:text-amber-600'>User</li>
                    <li onClick={() => changeDisplayNoFetch('logIn')} className='hover:underline hover:-translate-y-1 active:text-amber-600'>Login</li>
                    <li className='hover:underline hover:-translate-y-1 active:text-amber-600'>Cart</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;