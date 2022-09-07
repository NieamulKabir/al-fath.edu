import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className="pt-4 text-white text-lg lg:text-3xl font-semibold">Oh ho !</h1>
            <h2 className="py-2 text-white text-2xl lg:text-5xl font-bold">Page not found</h2>
            <img className="py-3 mx-auto" src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg" alt="" />
            <button className="font-bold mt-7 py-3 px-8 mb-20 bg-violet-600 text-white rounded hover:text-gray-800 hover:bg-white transition duration-300"><NavLink to="/home">BACK TO HOME</NavLink></button>
        </div>
    );
};

export default NotFound;