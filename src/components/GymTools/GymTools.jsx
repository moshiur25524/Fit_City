
import React, { useEffect, useState } from 'react';
import './GymTools.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import tools from './Tools';
import Tool from './Tool';

const GymTools = () => {

    const [tools, setTools] = useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTools(data)})
    },[])

    return (
        <div className='gym'>
            <h1 className='text-indigo-500'><FontAwesomeIcon icon={faShoppingCart} /> Fit City</h1>
            <div className='tools'>
                {
                    tools.map(tool => <Tool
                        key={tool.id}
                        tool={tool}
                    />)
                }
            </div>
        </div>
    );
};

export default GymTools;