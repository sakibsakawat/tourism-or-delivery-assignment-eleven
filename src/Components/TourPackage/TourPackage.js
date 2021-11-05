import React from 'react';
import { Link } from 'react-router-dom';
const TourPackage = () => {
    return (
        <div>
            <h1 className="text-center align-item-center"> These Are Tour Packages </h1>
            <Link to="/home" className="text-center mt-3"> Go To Homepage</Link>
        </div>
    );
};

export default TourPackage;