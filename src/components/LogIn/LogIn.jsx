import React from 'react';

const LogIn = () => {
    // ! API ERROR FOR SOME REASON 
    const handleClickLogIn = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.password.value);
        const userData = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        fetch('https://fakestoreapi.com/auth/login', {
            method: "POST",
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }

    return (
        <div className='flex items-center justify-center'>
            <form onSubmit={handleClickLogIn} className='flex flex-col gap-3 p-5 w-[max(320px,30vw)] bg-white border border-slate-300 rounded-lg *:p-2'>
                <p className='text-xl font-bold text-amber-600 py-3'>Log in</p>
                <input className='border placeholder:italic' placeholder='UserName' name='username' type='text' />
                <input className='border placeholder:italic' placeholder='Password' name='password' type='password' />
                <input type="submit" className='cursor-pointer p-2 px-5 bg-gradient-to-b from-slate-100 to-slate-200 shadow-md border rounded hover:from-slate-50 hover:to-slate-100' />
            </form>
        </div>
    );
};

export default LogIn;