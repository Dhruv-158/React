/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Cards from '../Compponants/Cards';

function Blog() {
    const [cards, setCards] = useState(() => {
        const savedCards = localStorage.getItem("cards");
        return savedCards ? JSON.parse(savedCards) : [];
    });

    const [filteredCards, setFilteredCards] = useState(cards);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const savedCards = localStorage.getItem("cards");
        if (savedCards) {
            const parsedCards = JSON.parse(savedCards);
            setCards(parsedCards);
            setFilteredCards(parsedCards);
        }
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = cards.filter((card) =>
            card.title.toLowerCase().includes(query)
        );
        setFilteredCards(filtered);
    };

    const onDelete = (card) => {
        const updatedCards = cards.filter((e) => e.id !== card.id);
        setCards(updatedCards);
        setFilteredCards(updatedCards);
        localStorage.setItem("cards", JSON.stringify(updatedCards));
    };

    return (
        <div style={{ marginTop: '100px', }} className="container-fluid px-3">
            <div className='row mb-4'>
                <div className="col-12 col-md-8 col-lg-6 mx-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search blogs by title..."
                        value={searchQuery}
                        onChange={handleSearch}
                        style={{
                            borderRadius: '8px',
                            padding: '12px 16px',
                            fontSize: '1rem',
                        }}
                    />
                </div>
            </div>
            <div className="row g-3 justify-content-center" >
                <div className="col-12 " >
                    <Cards Cards={filteredCards} onDelete={onDelete} />
                </div>
            </div>
            
        </div>
    );
}

export default Blog;
