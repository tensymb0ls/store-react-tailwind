import React from 'react';

const Modal = ({ hideModal }) => {

    const handleClickCancel = (bool, e) => {
        e.preventDefault();
        hideModal(bool);
    }

    const handleClickSave = (e) => {
        e.preventDefault();
        const reqBody = {
            title: e.target.title.value,
            price: e.target.price.value,
            description: e.target.description.value,
            image: e.target.image.value,
            category: e.target.category.value,
        }
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(reqBody)
        })
            .then(res => res.json())
        // .then(json => console.log(json))
    }
    return (
        <div className='flex items-center justify-center bg-white fixed bg-opacity-80 top-0 right-0 bottom-0 left-0'>
            <form onSubmit={handleClickSave} className='flex flex-col gap-3 p-5 w-[max(320px,30vw)] bg-white border border-slate-200 rounded-lg shadow-lg'>
                <p className='text-xl font-bold text-amber-600 py-3'>Add new product</p>
                <input className='border p-2 placeholder:italic rounded-md' placeholder='category' name='category' type="text" />
                <input className='border p-2 placeholder:italic rounded-md' placeholder='title' name='title' type="text" />
                <input className='border p-2 placeholder:italic rounded-md' placeholder='price' name='price' type="text" />
                <textarea className='border p-2 placeholder:italic rounded-md' placeholder='description' name="description" id="" cols="30" rows="10">

                </textarea>
                <label htmlFor='image'>Product photo:</label>
                <input placeholder='image' name='image' type="file" class="mb-3 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-amber-600 hover:file:bg-violet-100" />
                <div className='flex justify-around'>
                    <button onClick={(e) => handleClickCancel(false, e)} className='p-2 px-5 bg-gradient-to-b from-slate-100 to-slate-200 shadow-md border rounded hover:from-slate-50 hover:to-slate-100'>Cancel</button>
                    <input type="submit" className='cursor-pointer p-2 px-5 bg-gradient-to-b from-slate-100 to-slate-200 shadow-md border rounded hover:from-slate-50 hover:to-slate-100' />
                </div>
            </form>
        </div>
    );
};

export default Modal;