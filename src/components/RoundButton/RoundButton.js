import React from 'react';

const RoundButton = ({timers, clickTimer}) => {
    return (
        <div className='flex items-center bg-white w-15 h-15 rounded-full p-2 font-bold hover:bg-indigo-500 hover:text-white'>
                   <button onClick={() => clickTimer(timers)}>{timers.time}</button><span>m</span>
        </div>
    );
};

export default RoundButton;