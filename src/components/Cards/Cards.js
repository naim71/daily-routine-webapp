import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SidePanel from '../SidePanel/SidePanel';

const Cards = () => {
    const  [cards, setCards] = useState([]);

    useEffect(()=>{
            fetch('data.json')
            .then(res=>res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className='grid grid-cols-4'>
        <div className='grid grid-cols-3 gap-8 col-span-3 mx-20 my-20'>
                {
                    cards.map(card=> <Card key={card.id} card={card}></Card>)
                }
        </div>
        <div className='bg-slate-50'>
                <SidePanel></SidePanel>
        </div>
        </div>
        
        
    );
};

export default Cards;