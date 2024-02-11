import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({ data }) => {
    if (!data || data.length === 0) return null;

    return (
        <div className='container mx-auto my-5 text-slate-600 gridCustom '>
            {data.map((item) => <ProductCard product={item} key={item.id} />)}
        </div>
    );
};

export default Products;