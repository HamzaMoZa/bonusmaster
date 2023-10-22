import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function CardSelector() {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        async function fetchCards() {
            try {
                const response = await axios.get('/api/cards'); // replace with your API endpoint
                setCards(response.data);
            } catch (error) {
                console.error("Error fetching cards:", error);
            }
        }

        fetchCards();
    }, []);

    const handleCardSelect = async (card) => {
        setSelectedCard(card);
        await axios.post('/api/addCard', { cardId: card._id }); // replace with your API endpoint
        // Save card to local storage or any other logic you'd like
        let existingCards = localStorage.getItem('selectedCard');
        existingCards = existingCards ? JSON.parse(existingCards) : [];
        existingCards.push(card);
        localStorage.setItem('selectedCard', JSON.stringify(existingCards));
    }

    return (
        <div className="card-selector-container">
            <label htmlFor="card-dropdown">Select a card:</label>
            <select id="card-dropdown" onChange={e => handleCardSelect(cards.find(card => card._id === e.target.value))}>
                <option value="">Select a card</option>
                {cards.map(card => (
                    <option key={card._id} value={card._id}>{card.CardName}</option>
                ))}
            </select>
        </div>
    );
}

export default CardSelector;
