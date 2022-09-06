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
        <div className='bg-violet-200 pt-10'>
            <h1 className="text-center text-4xl font-bold text-violet-700">Boost Your Skill With Our Courses</h1>
            <p className="text-red-400 pt-5">Our Goals is to do For You.Our main Service is online based</p>

            <div className="xl:px-36 2xl:px-48 py-5 lg:py-10 text-white grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto rounded-2xl">
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