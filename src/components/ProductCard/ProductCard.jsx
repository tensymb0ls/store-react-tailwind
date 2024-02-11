import React from 'react';
import Star from '../icons/Star';

const ProductCard = ({ product }) => {
    return (
        <div className='flex flex-col justify-between mt-3 p-3 rounded-md cursor-pointer transition ease-in-out duration-200 border border-white hover:border-slate-300 hover:shadow-lg'>
            <div className='max-w-full aspect-square overflow-hidden rounded image' style={{ backgroundImage: `url(${product.image})` }}></div>
            <p className='line-clamp-2 my-3'>{product.title}</p>
            <div className='flex items-center gap-2'><Star /> {product.rating.rate} {product.rating.count ? `/ ${product.rating.count} bought` : ''} </div>
            <p className='text-amber-600 text-2xl font-bold'>{product.price} $</p>
        </div>
    );
};

export default ProductCard;