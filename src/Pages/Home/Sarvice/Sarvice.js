import React from "react";


const Sarvice = ({ service }) => {
    const { name, price, description, img } = service;

    return (
        <div className="single-service">
            <div className="service-img">
                <img src={img} alt="" />
            </div>
            <div className="service-info">
                <h3>{name}</h3>
                <h4>
                    <span>Price:</span> {"$" + price}
                </h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Sarvice;
