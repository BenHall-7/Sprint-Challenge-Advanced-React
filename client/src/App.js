import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './comps/PlayerList';

export const deleteByID = (players, id) => {
  console.log("bh: I was here");
  players.splice(players.findIndex(p => p.id === id), 1);
  return [...players];
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        this.setState({players: res.data});
      })
      .catch(console.error);
  }
  
  render() {
    let {players} = this.state;

    return (
      <div className="App">
        <PlayerList
          players={players}
          setPlayers={(p) => this.setState({players: p})}
          deleteByID={deleteByID}
        />
      </div>
    );
  }
}
