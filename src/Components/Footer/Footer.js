import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer className="p-4 bg-indigo-600 md:p-8 lg:p-10 dark:bg-gray-800">
                <div className="mx-auto max-w-screen-xl text-center">
                    <div className='flex flex-col justify-center items-center'>
                    </div>

                    <p className="my-6 text-white dark:text-white">Top In The Town, Fitness Training Program With Us. Get, Set, Go </p>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                        <li>
                            <Link to="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="mr-4 hover:underline md:mr-6">About</Link>
                        </li>
                        <li>
                            <Link to="/services" className="mr-4 hover:underline md:mr-6">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="mr-4 hover:underline md:mr-6">Contact</Link>
                        </li>
                    </ul>
                    <span className="text-sm text-white sm:text-center text-white">© 2022-2023 <a href="#" className="hover:underline">Fitness Platoon™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;