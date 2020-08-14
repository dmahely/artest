import React from 'react';
import './Artist.css';

class Artist extends React.Component {
    render() {
        return (
            <div className="Artist--container">
                <span className="Artist--number">{this.props.number}</span>
                <img className="Artist--image" src={this.props.image} alt={this.props.name} />
                <span className="Artist--name">{this.props.name}</span>
            </div>
        );
    }
}

export { Artist };