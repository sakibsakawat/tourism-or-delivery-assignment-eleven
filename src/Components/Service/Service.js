import React from 'react';
import {Link,} from "react-router-dom";
import './Service.css'

const Service = (props) => {
     const {name, description, _id, image, price} = props.service
     
    return (
        <div className="">
           
           
           
           
           
           
           <div className="card h-100" >
  <img src={image} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h1 className="card-title">{name}</h1>
    <p className="card-text ">{description}</p>
    <p className="card-text fs-4">$ {price}</p>
  </div>
   <div className="card-body">
    <Link to={`/serviceinfo/${_id} ${image}`}><button className="container-fluid detailsBtn" >Book Now</button></Link>
    
  </div>
</div>
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
            
        </div>
    );
};

export default Service;