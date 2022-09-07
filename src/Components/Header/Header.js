import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [displayMenu, setDisplayMenu] = useState(false);
    let navBar;
    if (displayMenu) {
        navBar = <div className="fixed bg-gray-900 top-0 left-0 w-4/5 h-full transition duration-500 shadow z-50">
            <h1 className="pt-10">
                <NavLink to="/home" activeStyle={{
                    color: "#34D399"
                }}>
                    <button className="py-3">HOME</button>
                </NavLink>
            </h1>

            <h1 className="pt-10">
                <NavLink to="/about" activeStyle={{
                    color: "#34D399"
                }}>
                    <button className="py-3 ">ABOUT</button>
                </NavLink>
            </h1>

            <h1 className="pt-10">
                <NavLink to="/services" activeStyle={{
                    color: "#34D399"
                }}>
                    <button className="py-3 ">SERVICES</button>
                </NavLink>
            </h1>

            <h1 className="pt-10">
                <NavLink to="/contact" activeStyle={{
                    color: "#34D399"
                }}>
                    <button className="py-3 ">CONTACT</button>
                </NavLink>
            </h1>
        </div>
    }
    return (
        <div className='font-serif'>
            <nav className="bg-gray-400 text-white mx-auto overflow-x-hidden">
                <ul className="flex justify-between my-5 items-center">

                    <li className="px-10 lg:pl-20 py-3 text-2xl font-bold">
                        <a href="/home"><img className='w-60 h-10' src="https://nieamulkabir.github.io/data-generate-file/logo.png" alt="" /></a>
                    </li>

                    <li onClick={() => setDisplayMenu(!displayMenu)} className="md:hidden text-2xl px-5">
                        <FontAwesomeIcon icon={faBarsProgress} />
                        {navBar}
                    </li>

                    <div className="hidden md:flex">

                        <li className="mx-5 font-bold">
                            <NavLink to="/home" activeStyle={{
                                fontWeight: "bold",
                                color: "#34D399"
                            }}>
                                <button className="py-3 px-4 bg-green-400 custom-bg-font rounded text-white hover:bg-white hover:text-gray-700 transition duration-300">HOME</button>
                            </NavLink>
                        </li>


                        <li className="font-bold mx-5">
                            <NavLink to="/about" activeStyle={{
                                fontWeight: "bold",
                                color: "rgb(244 63 94)"
                            }}>
                                <button className="py-3 px-4 bg-green-400 custom-bg-font rounded text-white hover:bg-white hover:text-gray-700 transition duration-300">ABOUT</button>
                            </NavLink>
                        </li>


                        <li className="font-bold mx-5">
                            <NavLink to="/services" activeStyle={{
                                fontWeight: "bold",
                                color: "#34D399"
                            }}><button className="py-3 px-4 bg-green-400 custom-bg-font rounded text-white hover:bg-white hover:text-gray-700 transition duration-300">SERVICES</button>
                            </NavLink>
                        </li>

                        <li className="font-bold mx-5 mr-10 pr-10 hidden md:flex">
                            <NavLink to="/contact">
                                <button className="px-4 py-3 bg-green-400 custom-bg-font rounded text-white hover:bg-white hover:text-gray-700 transition duration-300">CONTACT</button>
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