import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
const Admin = () => {
    return (
        <div>
            <h1 className="text-center fw-bold fs-1 mb-5 text-danger"> Admin Panel</h1>

            <h1 className="text-center "><Link to="addservice" className="text-decoration-none "> Add A Plan</Link></h1>
        </div>
    );
};

export default Admin;