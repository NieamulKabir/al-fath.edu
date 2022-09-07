import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

let activeStyle = {
    textDecoration: "underline",
    color:'red'
    
};

const Header = () => {
    const [displayMenu, setDisplayMenu] = useState(false);
    let navBar;
    if (displayMenu) {
        navBar = <div className="text-base fixed top-0 left-0 w-4/5 h-full transition ease-in-out delay-150 -translate-y-1 duration-700  bg-violet-900 shadow z-50">
            <h1 className="pt-10">
                <NavLink to="/home"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    <button className="py-3">HOME</button>
                </NavLink>
            </h1>

            <h1 className="">
                <NavLink to="/about"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    <button className="py-3">ABOUT</button>
                </NavLink>
            </h1>

            <h1 className="">
                <NavLink to="/services"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                    <button className="py-3">SERVICES</button>
                </NavLink>
            </h1>

            <h1 className="">
                <NavLink to="/contact"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                    <button className="py-3">CONTACT</button>
                </NavLink>
            </h1>
        </div>
    }
    return (
        <div className='font-serif'>
            <nav className="bg-gray-400 text-white mx-auto overflow-x-hidden">
                <ul className="flex justify-between my-5 items-center">

                    <li className="px-10 lg:pl-20 py-3 text-2xl font-bold">
                        <a href="/home">
                            <img className='w-60 h-10' src="https://nieamulkabir.github.io/data-generate-file/logo.png" alt="" />
                        </a>
                    </li>

                    <li onClick={() => setDisplayMenu(!displayMenu)} className="md:hidden text-xl px-5">
                        <FontAwesomeIcon className='w-10 h-16' icon={faBarsProgress} />
                        {navBar}
                    </li>

                    <div className="hidden md:flex">

                        <li className="mx-5 py-3 px-4 font-bold bg-green-400 rounded text-white hover:bg-white hover:text-gray-700 transition duration-300">
                            <NavLink to="/home"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>HOME
                            </NavLink>
                        </li>


                        <li className="mx-5 py-3 px-4 font-bold bg-green-400 rounded text-white hover:bg-white hover:text-gray-700 transition duration-300">
                            <NavLink to="/about"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>ABOUT
                            </NavLink>
                        </li>


                        <li className="mx-5 py-3 px-4 font-bold bg-green-400 rounded text-white hover:bg-white hover:text-gray-700 transition duration-300">
                            <NavLink to="/services"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>SERVICES    
                            </NavLink>
                        </li>

                        <li className="mx-5 py-3 px-4 font-bold bg-green-400 rounded text-white hover:bg-white hover:text-gray-700 transition duration-300 mr-14">
                            <NavLink to="/contact"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                            <p>CONTACT</p>
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
            <hr />


        </div>
    );
};

export default Header;