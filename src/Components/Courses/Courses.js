import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`https://nieamulkabir.github.io/data-generate-file/alfath.json`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='bg-violet-100 pt-10'>
            <h1 className="text-center text-4xl font-bold text-violet-700">Boost Your Skill With Our Courses</h1>
            <p className="text-gray-400 pt-5">Our main services includes these online courses.</p>

            <div className="xl:px-36 2xl:px-48 py-5 lg:py-28 text-white grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto">
                {
                    courses.slice(0,6).map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;