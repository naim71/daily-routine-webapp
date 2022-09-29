import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props.card)
    const {title, picture, name, time} = props.card;
    return (
        <div>
             <div className='max-w-sm px-2 py-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 '>
              <img className='rounded-lg image-size' src={picture} alt=""></img>
              <p className='mb-3 font-bold text-black-700 text-xl mt-5'>{title}</p>
              <p className='mb-5 font-bold'><span className='font-medium'>Time Required: </span>{time} minutes</p>
              <button className='bg-indigo-500 hover:bg-teal-500 px-20 py-2 rounded mb-5 text-white font-medium'>Add to list</button>
            </div>
        </div>
    );
};

export default Card;