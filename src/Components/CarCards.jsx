import React, { useEffect, useState } from 'react';
import Card from './Card';

const CarCards = () => {

    const [cards , setCards] = useState([])


    useEffect(()=>{
        fetch('https://carzone-server-eta.vercel.app/carcards')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className="max-w-6xl mx-auto mt-16">
        <h1 className="text-center text-4xl font-medium mb-8">Our <span className="font-bold text-blue-500">Cars</span> You will <span className="font-bold text-violet-500">Buy!!!</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center p-8 lg:p-0">
            {
                cards.map(card => <Card key={cards.id} card={card}></Card>)
            }
        </div>
    </div>
    );
};

export default CarCards;