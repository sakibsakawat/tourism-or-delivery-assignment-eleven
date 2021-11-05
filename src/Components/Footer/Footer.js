import React from 'react';
import flogo from '../../Images/logoWithName.png'
import './Footer.css'

const Footer = () => {
    return (
       <div className="divFooter1">
      
       
        <div className="d-flex mb-3">
            <div className="mt-3 ms-5">
              <img src={flogo} height="50" width="130" alt="" className="mb-2"/>
               <p>TourX.com is a rapidly-growing global online travel agency,<br/> TourX.com is here to help you plan the perfect trip. Whether<br/> you're going on holiday, taking a business trip, or looking<br/> to set up a corporate travel account, Trip.com is here to<br/> help you travel the world with cheap flights, discount hotels, </p>
               <h3> Follow Us:</h3>
                <div className="d-flex divFooter3 ">
                      <h4><i className="fab fa-instagram "></i></h4>
                      <h4><i className="fab fa-facebook ms-3"></i></h4>
                      <h4><i className="fab fa-twitter ms-3"></i></h4>
                      <h4><i className="fab fa-linkedin ms-3"></i></h4>
                </div>
               
            </div>
              {/* ------------------ contact us ---------------------------- */}
             <div className="mt-3 ms-5 pt-2 ps-3">
               <h2 className="fw-5">Contact Us</h2>
               <div className="d-flex flex-column">
               
              <div className="d-flex align-items-center">
                  <div><i className="fas fa-phone-alt fs-6 ms-2"></i></div>
                  <div className="ms-3"> +01852-1265122<br/>+01852-1265122</div>
               
               </div>
              
               <div className="d-flex align-items-center mt-3">
                  <div><i className="fas fa-at fs-6 ms-2"></i></div>
                  <div className="ms-3">info@example.com<br/>support@example.com</div>
               
               </div>
               
               
               
               
               <div className="d-flex align-items-center mt-3">
                  <div><i class="fas fa-map-marker-alt fs-6 ms-2"></i></div>
                  <div className="ms-3">2752 Willison Street <br/>Eagan, United State</div>
               
               </div>
               
               </div>
             
             
             
             </div>
         
         {/* ------------  Support ---------------- */}

             <div className="mt-3 ms-5 pt-2 ps-3">
             
             <h2 className="fw-5"> Support</h2>
             <h6>Contact Us</h6>
             <h6>About US</h6>
             <h6>Services</h6>
             <h6>Our Blogs</h6>
             <h6>Terms And Conditions</h6>
             
             
             
             
             
             
             
             
             </div>
        </div>
           <div className="text-center bg-dark text-light py-2">Copyright 2021 TourX | Design By Sakawat H. | Inspired by Theme Forrest</div>



        </div>
    );
};

export default Footer;