import React, { useEffect, useState } from 'react';
import RoundButton from '../RoundButton/RoundButton';
import { addToDb , getData } from '../../Utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

 
const SidePanel = ({cart}) => {
    const [timer, setTimer] = useState([]);
    const [clicks, setClicks] = useState([]);
    useEffect(()=>{
        fetch('fakebuttondata.json')
        .then(res=>res.json())
        .then(data => setTimer(data))
}, []);

    const clickTimer = (timers) => {
    const newTimer = [...clicks, timers];
    setClicks(newTimer);
    console.log(timers.id);
    addToDb();

}

    const notify = () => {
        toast.success("Congratualtions! Tasks are done.",{position: toast.POSITION.BOTTOM_RIGHT});
      }
    
    let time = 0;
    for(const clicker of clicks){
        time = clicker.time;
    } 
    
    let total = 0;
    for(const times of cart){
        total = total + times.time;
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
            {
                timer.map(timers=> <RoundButton 
                    timers={timers}
                    key={timers.id}
                    clickTimer={clickTimer}
                    ></RoundButton>)   
            }
            </div>
            {/* break section end */}

            <p className='text-xl font-bold text-left mt-10'>Exercise Details</p>
            
            <div className='bg-slate-200 flex justify-between px-6 py-4 rounded-lg mt-10'>
                    <p className='text-xl font-bold'>Task Time:</p>
                    <p className='text-xl font-medium'>{total}<span> minutes</span></p>
            </div>
            <div className='bg-slate-200 flex justify-between px-6 py-4 rounded-lg mt-5'>
                    <p className='text-xl font-bold'>Break Time:</p>
                    <p className='text-xl font-medium'>{time}<span> minutes</span></p>
            </div>

            <button onClick={notify} className='bg-indigo-500 hover:bg-teal-500 px-16 py-3 rounded mt-14 text-white font-medium'>Activity Completed</button>
            <ToastContainer />

        </div>
    );
};

export default SidePanel;