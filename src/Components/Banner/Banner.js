import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' bg-purple-300'>
            <div>
                <div>
                    <section className="container mx-auto text-left px-10 py-20">
                        <div className="flex items-center justify-between flex-col lg:flex-row">
                            <div>
                                <img className="lg:py-7 w-10/12 mx-auto" src="https://nieamulkabir.github.io/data-generate-file/Illustration.png" alt="" />
                            </div>
                            <div>
                                <p className='font-serif text-red-600'>Are you ready to learn?</p>
                                <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold mb-10 leading-normal"> Improve Your Skill 
                                    With <br /><span className='text-green-700 font-serif'>Our Best Course</span>
                                </h1>
                                <p className="font-serif">Make it work, make it right, make it fast.</p>
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