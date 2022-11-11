import React from 'react';

const NotFound = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 mt-8">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-green-400 dark:text-primary-500">404 Not Found </h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Your Page Is Not Exist or Wrong Parameter</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">To solve the problem. Reload or Go Back To Our Home Page </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;