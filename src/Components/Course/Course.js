import React from 'react';

const Course = (props) => {
    const { img, sector, title, description, price } = props.course
    return (
        <div>

            <div className="transform hover:-translate-y-3 to-hover text-center secondary-bg transition duration-300 w-full mx-auto bg-gray-200 rounded-2xl">
                <div className="card lg:card-side bg-base-100 shadow-xl rounded-2xl">
                    <figure><img className='h-64 rounded-2xl' src={img} alt="Album" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title px-5 pt-5 text-2xl font-bold  text-violet-700">{title.slice(0, 20)}...</h2>
                        <p className="text-sm  text-gray-600">{sector}</p>
                        <p className="px-5 pt-5 text-red-600">{description.slice(0, 40)}...</p>
                        <div className="card-actions justify-end">
                            <p className='text-black'>Fee : {price}</p>
                            <button className="btn btn-primary px-2 py-3 mt-6 mb-8 mr-2 bg-violet-500 custom-bg-font rounded hover:bg-white text-white hover:text-black fond-medium transition duration-300">ENROLL NOW</button>

                            <button className="btn btn-primary px-5 py-3 mt-6 mb-8 ml-2 bg-violet-500 custom-bg-font rounded hover:bg-white text-white hover:text-black fond-medium transition duration-300">DETAILS</button>
                        </div>
                    </div>
                </div>
            </div>

           

        </div>
    );
};

export default Course;