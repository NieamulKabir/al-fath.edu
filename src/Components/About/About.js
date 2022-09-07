import React from 'react';

const About = () => {
    return (
        <div className='bg-violet-300'>

            <section>
                <div className="lg:w-3/6 mx-auto w-full mb-10 pt-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img alt=""className="object-cover object-center  w-full" src="https://nieamulkabir.github.io/data-generate-file/About%20of%20Al-Fath.png" />
                </div>
            </section>

            <section className="text-gray-400 custom-bg body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    <div className="flex flex-col flex-wrap  lg:w-1/2 lg:pl-12 lg:text-left text-center mx-auto">
                        <div className="flex flex-col mb-10 lg:items-start items-center  bg-violet-100 px-10 py-5 rounded-2xl">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>

                            <div className="flex-grow">
                                <h2 className="text-black text-lg title-font font-medium mb-3">Our Mission</h2>
                                <p className="leading-relaxed text-violet-800 text-lg">Our primary mission is to educate people with the latest digital skillset. A well-developed skill can make one master in a particular field, and it can be learned too.</p>
                                <p className="mt-3 text-red-700 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center  bg-violet-100 px-10 py-5 rounded-2xl">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-lg title-font font-medium mb-3 text-black">Our Vision</h2>
                                <p className="leading-relaxed  text-violet-800 text-lg">Since COVID-19 forced organizations online, digital-first initiatives have taken priority, meaning companies will expect the vast majority of their employees to have a degree of digital skills to help innovate. As our dependence on digital communications grows, our workforce must keep up with the skill demand. </p>
                                <p className="mt-3 text-red-700 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center  bg-violet-100 px-10 py-5 rounded-2xl">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-black text-lg title-font font-medium mb-3">We & the industry</h2>
                                <p className="leading-relaxed  text-violet-800 text-lg">Digital skills are characterized as tasks or communications performed on digital devices where information is accessed and managed. </p>
                                <p className="mt-3 text-red-700  inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;