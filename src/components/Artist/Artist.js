import React from 'react';
import './Artist.css';

const Artist = (props) => {
    const {
        setRoute,
        number,
        image,
        name,
        answer,
        results,
        setResults,
    } = props;

    // for changing the number to a play icon on mouse enter
    const handleMouseEnter = (e) => {
        if (e.target.children.length)
            e.target.children.item(0).innerHTML = '▶︎';
    };

    // for changing the play icon back to a number on mouse leave
    const handleMouseLeave = (e) => {
        if (e.target.children.length)
            e.target.children.item(0).innerHTML = props.number;
    };
    // todo: make sure clicking on container doesn't click on other elements
    // for setting score and result in state and changing route
    const handleClick = (e) => {
        let result = false;
        if (e.target.getAttribute('data-answer') === 'true') {
            result = true;
        }

        setResults((results) => [...results, result]);
        setRoute('result');
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
