import React from "react";

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;

    return (
        <div className="single-expert">
            <div className="expert-img">
                <img src={img} alt="" />
            </div>
            <div className="expert-info">
                <h4>{name}</h4>
                <p>{expertize}</p>
            </div>
        </div>
    );
};

export default Expert;
