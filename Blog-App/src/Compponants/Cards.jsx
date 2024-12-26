
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import CardIteams from './CardIteams';

function Cards(props) {
    return (
        <>
            <div className="container-md my-5 ">
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 '>
                    {props.Cards.length === 0 ? (
                        <h3 className="text-center">No Blogs to display</h3>
                    ) : (
                        props.Cards.map((card) => {
                            return (
                                <>
                                    <div key={card.id} className="d-flex justify-content-center">
                                        <CardIteams key={card.id} card={card} OnDelete={props.onDelete} />
                                    </div>
                                </>
                            )
                        })
                    )}
                </div>
            </div>
        </>
    );
}

export default Cards;
