import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div>
                <div>
                    <section className="container bg-purple-300 mx-auto text-left px-10 py-20">
                        <div className="flex items-center justify-between flex-col lg:flex-row">
                            <div>
                                <img className="lg:py-7 w-10/12 mx-auto" src="https://nieamulkabir.github.io/data-generate-file/Illustration.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold my-10 leading-normal"> Improve Your Skill
                                    With Our Best Course
                                </h1>
                                <p className="">Make it work, make it right, make it fast.</p>
                                <button
                                    className="px-8 py-3 mt-10 font-bold bg-green-400 custom-bg-font rounded hover:bg-white text-gray-800 transition duration-300 ">
                                    <NavLink to="/services">
                                        Buy Our Courses <FontAwesomeIcon icon={faArrowRight} />
                                    </NavLink>
                                </button>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Banner;