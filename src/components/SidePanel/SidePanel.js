import React from 'react';
import RoundButton from '../RoundButton/RoundButton';

const SidePanel = ({cart}) => {

    let total = 0;
    for(const card of cart){
        total = total + card.time;
    }

    return (
        <div className='mt-6 mx-6'> 
            <div className='flex'>
                <img className="w-12 h-12 rounded-lg mr-5" src="https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg" alt="Rounded avatar"></img>
                <div className='text-left'>
                    <p className='font-bold'>Nayeem Khan</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='bg-slate-200 flex justify-center	 space-x-14 p-2 py-4 rounded-lg mt-10'>
                <div>
                    <p className='text-xl font-bold'>70 kg</p>
                    <span className='font-semibold text-slate-500'>Weight</span>
                </div>
                <div>
                    <p className='text-xl font-bold'>5.5</p>
                    <span className='font-semibold text-slate-500'>Height</span>
                </div>
                <div>
                    <p className='text-xl font-bold'>25 yrs</p>
                    <span className='font-semibold text-slate-500'>Age</span>
                </div>
            </div>

            {/* add a break section */}
            <p className='text-xl font-bold text-left mt-10'>Add A Break</p>

            <div className='bg-slate-200 flex justify-center space-x-4 p-2 py-4 rounded-lg mt-10'>
                <RoundButton></RoundButton>
                <RoundButton></RoundButton>
                <RoundButton></RoundButton>
                <RoundButton></RoundButton>
                <RoundButton></RoundButton>
                {/* <div className='flex items-center bg-white w-15 h-10 rounded-full p-2 font-bold hover:bg-indigo-500 hover:text-white'>
                   <button>10</button><span>s</span>
                </div>
                <div className='flex items-center bg-white w-15 h-10 rounded-full p-2 font-bold hover:bg-indigo-500 hover:text-white'>
                    <button>20</button><span>s</span>
                </div >
                <div className='flex items-center bg-white w-15 h-10 rounded-full p-2 font-bold hover:bg-indigo-500 hover:text-white'>
                    <button>30</button><span>s</span>
                </div>
                <div className='flex items-center bg-white w-15 h-10 rounded-full p-2 font-bold hover:bg-indigo-500 hover:text-white'>
                    <button>40</button><span>s</span>
                </div>
                <div className='flex items-center bg-white w-15 h-10 rounded-full p-2 font-bold hover:bg-indigo-500 hover:text-white'>
                    <button>50</button><span>s</span>
                </div> */}
            </div>
            {/* break section end */}

            <p className='text-xl font-bold text-left mt-10'>Exercise Details</p>
            
            <div className='bg-slate-200 flex justify-between px-6 py-4 rounded-lg mt-10'>
                    <p className='text-xl font-bold'>Task Time:</p>
                    <p className='text-xl font-medium'>{total}<span> minutes</span></p>
            </div>
            <div className='bg-slate-200 flex justify-between px-6 py-4 rounded-lg mt-5'>
                    <p className='text-xl font-bold'>Break Time:</p>
                    <p className='text-xl font-medium'><span> minutes</span></p>
            </div>

            <button className='bg-indigo-500 hover:bg-teal-500 px-20 py-4 rounded mt-14 text-white font-medium'>Activity Completed</button>

        </div>
    );
};

export default SidePanel;