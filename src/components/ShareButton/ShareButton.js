import React from 'react'
import './ShareButton.css'

const ShareButton = (props) => {
    return (
        <button className="ShareButton--button" onClick={props.onClick}>
            <img
                className="ShareButton--icon"
                src={props.icon}
                alt={props.icon}
            />
        </button>
    )
}

export { ShareButton }
