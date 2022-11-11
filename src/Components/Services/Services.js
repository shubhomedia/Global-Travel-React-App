import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = (props) => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://infinite-castle-93387.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div className='mt-20'>
            <h2 className="text-center font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white">Our Services</h2>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto md:gap-4 my-3 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3" >
                {
                    service.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </div >
        </div>


    );
};

export default Services;