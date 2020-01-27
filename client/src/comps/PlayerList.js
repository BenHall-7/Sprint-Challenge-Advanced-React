import React from 'react';
import Player from './Player';

export default class PlayerList extends React.Component {
    render() {
        return (
            <div>
                {this.props.players.map(
                    player => <Player player={player} key={player.id}/>
                )}
            </div>
        )
    }
}