import React from 'react';

export default class Player extends React.Component {
    render() {
        let {name, country, searches} = this.props.player;
        return (
            <div className='player'>
                <h2>{name}</h2>
                <p>Country: {country}</p>
                <p>Searches: {searches}</p>
            </div>
        )
    }
}