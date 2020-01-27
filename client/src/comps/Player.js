import React from 'react';

export default class Player extends React.Component {
    render() {
        let {name, country, searches, id} = this.props.player;
        let del = this.props.del;
        return (
            <div className='player'>
                <button name={id} onClick={del}>Delete</button>
                <h2>{name}</h2>
                <p>Country: {country}</p>
                <p>Searches: {searches}</p>
            </div>
        )
    }
}