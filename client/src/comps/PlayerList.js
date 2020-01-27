import React from 'react';
import Player from './Player';

export default class PlayerList extends React.Component {
    render() {
        let {players, setPlayers, deleteByID} = this.props;
        return (
            <div>
                {players.map(
                    player =>
                        <Player
                            player={player}
                            del={() => {
                                setPlayers(deleteByID(players, player.id))
                            }}
                            key={player.id}
                        />
                )}
            </div>
        )
    }
}