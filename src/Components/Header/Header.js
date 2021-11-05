import React from 'react';
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import logo from '../../Images/logoWithName.png'
import bg from '../../Images/white.jpg'
import './Header.css';


const Header = () => {
     const {user, logOut} = useAuth();
     console.log(user);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <Link className="navbar-brand" to="#">
      <img src={logo} alt="" width="150" height="50"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active headerlink" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link headerlink" to="aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link headerlink" to="/services">Destinations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link headerlink" to="/tourpackage">Tour Package</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link headerlink" to="contactus">Contact Us</Link>
        </li>

        
        
        

        {user?.photoURL?
         <Link onClick={logOut} className="custom" to="/login"> <Button > Log Out </Button> </Link>:
        <Link classname="custom" to="/login"> <Button > Log In </Button> </Link> }
       
       
        <span className="navbar-text me-3">  <h6 className="ms-2"> {user.displayName}</h6></span>
       {user?.photoURL?
       <img src={user.photoURL} className="propic" alt="" width="35" height="35"/>:<img src={bg} className="propic"  alt="" width="35" height="35"/>}
        

        {user?.photoURL?
         <Link className="ms-2 text-decoration-none d-flex align-items-center" to="/admin"> ADMIN </Link>:
        <Link classname="custom" to="/admin">  </Link> }

      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;