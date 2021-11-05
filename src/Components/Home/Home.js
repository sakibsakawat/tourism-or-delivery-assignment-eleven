import React from 'react';
import './Home.css'
import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import Benefit from '../Benefit/Benefit';
import Featured from '../Featured/Featured'
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Benefit></Benefit>
            <Services></Services>
            <Featured></Featured>
        </div>
    );
};

export default Home;