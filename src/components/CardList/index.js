import React from 'react';
import CardItem from '../CardItem';
import './styles.css';

function CardList() {
    const savedCards = JSON.parse(localStorage.getItem('selectedCards')) || [];

    if (!savedCards.length) return <p>No card added.</p>;

    return (
        <div className="card-list">
            <h2>Added Cards</h2>
            {savedCards.map(card => <CardItem key={card._id} card={card} />)}
        </div>
    );
}

export default CardList;
