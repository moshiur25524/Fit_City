import React from 'react';
import GymTools from '../GymTools/GymTools';
import SideInfo from '../SideInfo/SideInfo';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <GymTools/>
            <SideInfo/>
        </div>
    );
};

export default Home;