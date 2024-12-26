/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';

const Information = ({ cards }) => {
    const { infoId } = useParams();

    
    if (!cards || cards.length === 0) {
        return <p>No cards available</p>;
    }

    const card = cards.find((detail) => detail.id === parseInt(infoId));

    if (!card) {
        return <p>Card not found!</p>;
    }

    return (
        <div className=' container-lg '>
            <div className=' text-center my-5'><h3>{card.title}</h3></div>
            <div
                style={{
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    width: '100%',
                    textAlign: 'center',
                    opacity: '0.4',
                    zIndex: '',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <p style={{
                    fontSize:'80px',
                }}>{card.title}</p>
            </div>
            <div className='m-5'
                dangerouslySetInnerHTML={{ __html: card.desc }}
            />
        </div>
    );
};

export default Information;