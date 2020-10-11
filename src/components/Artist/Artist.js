import React from 'react';
import { ACTIONS } from '../hooks/actions';
import './Artist.css';

const Artist = ({ dispatch, number, image, name, answer, results }) => {
    // for changing the number to a play icon on mouse enter
    const handleMouseEnter = (e) => {
        if (e.target.children.length)
            e.target.children.item(0).innerHTML = '▶︎';
    };

    // for changing the play icon back to a number on mouse leave
    const handleMouseLeave = (e) => {
        if (e.target.children.length)
            e.target.children.item(0).innerHTML = number;
    };

    // for setting result in state and changing route
    const handleClick = (e) => {
        let result = false;
        if (e.currentTarget.getAttribute('data-answer') === 'true') {
            result = true;
        }

        dispatch({ type: ACTIONS.SET_RESULTS, payload: [...results, result] });
        dispatch({ type: ACTIONS.SET_ROUTE, payload: 'result' });
    };

    return (
        <button
            className="Artist--container"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-answer={answer}
        >
            <span className="Artist--number">{number}</span>
            <img className="Artist--image" src={image} alt={name} />
            <span className="Artist--name">{name}</span>
        </button>
    );
};

export { Artist };
