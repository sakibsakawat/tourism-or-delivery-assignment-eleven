import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginbg from '../../Images/loginBgImg.jpg'

const Login = () => {

    const {signInUsingGoogle,signInUsingGithub} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri =  location.state?.from || '/home'
    console.log('came from', location.state?.from);

   const handleGoogleLogin = () => {
         signInUsingGoogle()
         .then(result => {
           history.push(redirect_uri)
         });
}

const handleGitHub = () => {
        signInUsingGithub()
         .then(result => {
           history.push(redirect_uri)
         }); 
    }  



    return (
        <div className="logindiv">
            <div className="d-flex align-items-center justify-content-around">
            
                   <div className=" diflex justify-content-center mt-4  ">
             <h1 className="loginh1">Login With Trusted Site</h1>
             <div className="mt-4 ms-5" >
                  <button onClick={handleGoogleLogin} className="btn btn-danger mb-4 fwb"><i className="fab fa-google"></i> &nbsp; Sign in With Google</button> <br/>
                  <button onClick={handleGitHub} className="btn btn-warning mb-4 fwb"><i className="fab fa-github"></i> &nbsp; Sign in With Github</button><br/>
                  
             
             </div>
            </div>
            <div>
            <img src={loginbg} alt=""/>
            </div>
            
            
            </div>
        </div>
    );
};

export default Login;