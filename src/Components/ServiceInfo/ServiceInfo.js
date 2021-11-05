import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceInfo = () => {
    const {serviceId,} = useParams();
    return (
        <div>
            <h1>this is Book Now Page: {serviceId}</h1>
            
        </div>
    );
};

export default ServiceInfo;