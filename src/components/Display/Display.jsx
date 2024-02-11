import React from 'react';
import Products from '../displays/Products';
import Users from '../displays/Users';
import './Display.css';

const Display = ({ displayType, data }) => {
    const components = {
        products: <Products data={data} />,
        users: <Users data={data} />,
        logIn: null,
        cart: null,
    };

    return (
        <main>
            {components[displayType]}
        </main>
    );
};

export default Display;

