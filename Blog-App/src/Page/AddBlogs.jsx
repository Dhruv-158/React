/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Cards from '../Compponants/Cards';
import AddCard from '../Compponants/AddCard';

function AddBlogs() {
    const [cards, setCards] = useState(() => {
        const savedCards = localStorage.getItem("cards");
        return savedCards ? JSON.parse(savedCards) : [];
    });

    const addCard = (imgUrl, title, desc) => {
        const id = cards.length + 1;
        const Mycard = {
            id: id,
            img: imgUrl,
            title: title,
            desc: desc,
        };
        const newCards = [...cards, Mycard];
        setCards(newCards);
        localStorage.setItem("cards", JSON.stringify(newCards));
    };

    const onDelete = (card) => {
        const updatedCards = cards.filter((e) => e !== card);
        setCards(updatedCards);
        localStorage.setItem("cards", JSON.stringify(updatedCards));
    };

    
    const homeCards = cards.slice(0, 3);

    return (
        <main className="p-5 m-5">
            <div>
                <AddCard addCard={addCard} />
            </div>
            <div className="container-lg">
                <Cards Cards={homeCards} onDelete={onDelete} />
            </div>
        </main>
    );
}

export default AddBlogs;
