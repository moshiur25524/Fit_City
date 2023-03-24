import React from 'react';

const Tool = ({ tool }) => {
    const {img, title, number, description} = tool;
    
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48 tool-image" src={img} alt='tool_Image' />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                    <p className="mt-2 text-gray-500">Required time: {number}</p>
                    <p className="mt-2 text-gray-500">{description}</p>
                    <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tool;