import React from 'react';
import './Card.css'

const Card = ({clickHandler, card}) => {
    const {title, picture, time} = card;
    return (
        <div>
             <div className='max-w-sm px-2 py-2 bg-white rounded-lg border border-gray-200 shadow-sm'>
              <img className='rounded-lg image-size' src={picture} alt=""></img>
              <p className='mb-3 font-bold text-black-700 text-xl mt-5'>{title}</p>
              <p className='mb-5 font-bold'><span className='font-medium'>Time Required: </span>{time} minutes</p>
              <button onClick={() => clickHandler(card)} className='bg-indigo-500 hover:bg-teal-500 px-20 py-2 rounded mb-5 text-white font-medium btn-list'>Add to list</button>
            </div>
        </div>
    );
};

export default Card;