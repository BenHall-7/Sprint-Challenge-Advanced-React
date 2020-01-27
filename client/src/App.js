import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './comps/PlayerList';

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
    return (
      <div className="App">
        <PlayerList players={this.state.players}/>
      </div>
    );
  }
}
