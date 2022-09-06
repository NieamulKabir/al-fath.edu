import React from 'react';

const Course = (props) => {
    const { img, sector, title, description, price } = props.course
    return (
        <div>
         

            <div className="transform hover:-translate-y-3 to-hover text-center secondary-bg transition duration-300 rounded w-full mx-auto ">
                <div className="card lg:card-side bg-base-100 shadow-xl h-fit">
                    <figure><img className='h-64' src={img} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title px-5 pt-5 text-xl font-bold text-green-400">{title.slice(0,20)}...</h2>
                        <p className="px-5 pt-5 text-gray-400">{description.slice(0,40)}...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary px-8 py-3 mt-10 mb-8 bg-green-400 custom-bg-font rounded hover:bg-white text-gray-800 transition duration-300">ENROLL NOW</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;