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
        <div className='lg:flex md:sm:flex'>
            
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 gap-8 mx-20 my-10'>
        <div className='lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:col-span-3 gap-8 mx-auto my-5'>
                <h1 className='text-left text-3xl font-bold text-indigo-700'>
                    Daily Routine</h1>
        </div>
        <div className='lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:col-span-3 gap-8 mx-auto my-auto'>
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
        </div>
        <div className='col-span-4 mx-auto py-5'>
            <Question></Question>
        </div>
       
        </div>
        
        
    );
};

export default Cards;