/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function CardIteams({ card, OnDelete }) {
    return (
        <>
        <div className='col'>
            <div className="card" style={{ width: '18rem', height: 'auto', minHeight: '400px', }} key={card.id}>
                <img
                    src={card.img}
                    className="card-img-top"
                    
                    alt="Card Image"
                    style={{ height: '12rem', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>

                    {card.desc.split(' ').length > 20 ? (
                        <p
                            className="card-text"
                            dangerouslySetInnerHTML={{
                                __html: card.desc.split(' ').slice(0, 20).join(' ') + '...',
                            }}
                        />
                    ) : (
                        <p
                            className="card-text"
                            dangerouslySetInnerHTML={{ __html: card.desc }}
                        />
                    )}
                    <Link to={`info/${card.id}`} className="btn btn-primary btn-sm m-2">
                        More...
                    </Link>
                    <button
                        className="btn btn-sm btn-danger m-2"
                        onClick={() => OnDelete(card)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default CardIteams;
