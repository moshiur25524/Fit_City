
import React from 'react';
import './GymTools.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const GymTools = () => {
    return (
        <div className='gym'>
            <h1><FontAwesomeIcon icon={faShoppingCart} /> This is GymTools</h1>
            <div className='tools'>

            </div>
        </div>
    );
};

export default GymTools;