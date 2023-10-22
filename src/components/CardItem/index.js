import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './styles.css';

function CardItem({ card }) {
    const props = useSpring({
        to: { transform: 'scale(1.05)' },
        from: { transform: 'scale(1)' },
        config: { duration: 150 },
        reset: true
    });

    return (
        <animated.div style={props} className="card-item">
            {card.CardName} {/* Example, you can add more details of card here */}
        </animated.div>
    );
}

export default CardItem;
