import React, { useEffect, useState } from 'react';
import Service from '../Sarvice/Sarvice';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="services-main-container">
            <h2 className="text-center ">Our Services</h2>
            <div className="service-container">
                {services.map((service) => (
                    <Service key={service.id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;