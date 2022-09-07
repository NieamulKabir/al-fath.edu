import React, { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    fetch(`https://nieamulkabir.github.io/data-generate-file/alfath.json`)
        .then(res => res.json())
        .then(data => setServices(data))
    return (
        <div>
        <div className='bg-violet-200 pt-10'>
            <h1 className="text-center text-4xl font-bold text-violet-700 font-serif">Boost Your Skill With Our Courses</h1>
            <p className="text-red-400 pt-5 font-serif">Our Goals is to do For You.Our main Service is online based</p>

            <div className="xl:px-36 2xl:px-48 py-5 lg:py-10 text-white w-10/12 lg:w-fit grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto rounded-2xl z-0">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            
        </div>
        </div>
    );
};

export default Services;