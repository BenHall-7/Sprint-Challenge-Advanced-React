import React, {useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './comps/PlayerList';
import usePlayers from './hooks/usePlayers';

export const deleteByID = (players, id) => {
  let copy = [...players];
  copy.splice(copy.findIndex(p => p.id === id), 1);
  return copy;
}

const App = () => {
  let [players, setPlayers, hadStorage] = usePlayers([]);

  useEffect(() => {
    if (!hadStorage) {
      axios.get("http://localhost:5000/api/players")
        .then(res => {
          setPlayers(res.data);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <div className="App">
      <PlayerList
        players={players}
        deleteByID={(id) => setPlayers(deleteByID(players, id))}
      />
    </div>
  );
}

export default App;
