import React from 'react';
import Player from './Player';

export default class PlayerList extends React.Component {
    render() {
        let {players, deleteByID} = this.props;
        return (
            <div>
                {players.map(player =>
                    <Player
                        player={player}
                        del={() => deleteByID(player.id)}
                        key={player.id}
                    />
                )}
            </div>
        )
    }
}