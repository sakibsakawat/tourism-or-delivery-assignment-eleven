import React from 'react';
import './AboutUs.css'
import about from '../../Images/about.png'
import Benefit from '../Benefit/Benefit';
const AboutUs = () => {
    return (
        <div className="aboutUsdiv1">
            
           <img src={about} className="aboutpng" width="1350" alt=""/>
            <h1 className="text-center fw-bold mb-5 mt-5">About Us</h1>

            <h4  className="text-center fw-bold mb-5">We are a part of the TourX.com Group, a NASDAQ listed company since 2003 (NASDAQ: TCOM) with over 45,100 employees and over 400 million members, making it one of the leading online travel agencies in the world.<br/><br/>

With more than 1.4 million hotels in 200 countries and regions, we've built an extensive hotel network to give our customers a fantastic choice of accommodation. Our far-reaching flight network has over 2 million individual flight routes connecting more than 5,000 cities around the globe. When you combine this with our 24/7 English customer service and various other travel products, you can trust us to take care of your next trip.<br/> <br/>

This website is operated by TourX.com Travel Singapore Pte. Ltd. ("TourX.com Singapore"), a Singapore entity (registration number 201613701E).TourX.com Singapore is part of the TourX.com Group of companies.<br/><br/></h4>
            
         <div><Benefit></Benefit></div>   
            
        </div>
    );
};

export default AboutUs;