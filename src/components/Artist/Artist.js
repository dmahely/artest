import React from 'react';
import './Artist.css';

const Artist = (props) => {
    // for changing the number to a play icon on mouse enter
    const handleMouseEnter = (e) => {
        if(e.target.children.length) e.target.children.item(0).innerHTML = '▶︎';
    };

    // for changing the play icon back to a number on mouse leave
    const handleMouseLeave = (e) => {
        if(e.target.children.length) e.target.children.item(0).innerHTML = props.number;
    }

    return (
        <button className="Artist--container" onClick={() => props.setRoute('result')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className="Artist--number">{props.number}</span>
            <img className="Artist--image" src={props.image} alt={props.name} />
            <span className="Artist--name">{props.name}</span>
        </button>
    );
}

export { Artist };