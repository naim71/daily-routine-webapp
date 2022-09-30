import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Question from '../Question/Question';
import SidePanel from '../SidePanel/SidePanel';

const Cards = () => {
    const  [cards, setCards] = useState([]);
    const [cart, setCart] = useState([]);    
    
    useEffect(()=>{
            fetch('data.json')
            .then(res=>res.json())
            .then(data => setCards(data))
    }, []);

    const clickHandler = (card) => {
        const newCart = [...cart, card];
        setCart(newCart);
        console.log(card);
        }
    return (
        <div className='bg-slate-200'>
        <div className='grid grid-cols-4 sm:border-solid sm:border-2 sm:border-indigo-600'>
            
        <div className='grid grid-cols-3 gap-8 col-span-3 mx-20 my-20 md:grid-cols-1'>
        <div className='col-span-3 flex justify-center align-center space-x-3'>
                <h1 className='text-left text-3xl font-bold text-indigo-700'>
                    Daily Routine</h1>
        </div>
        <div className='col-span-3'>
            <p className='text-left text-lg font-semibold'>Select your daily tasks</p>

        </div>
                {
                    cards.map(card=> <Card key={card.id} 
                        card={card}
                        clickHandler={clickHandler}
                        ></Card>)
                }

        </div>
        <div className='bg-slate-50'>
            
                <SidePanel
                cart={cart}
                ></SidePanel>
        </div>
        <div className='col-span-4 mx-auto mb-8'>
            <Question></Question>
        </div>
        </div>
       
        </div>
        
        
    );
};

export default Cards;