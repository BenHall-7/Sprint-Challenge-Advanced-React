import {useState} from 'react';

const usePlayers = (initial) => {
    let local = localStorage.getItem("players");
    let players = local ? JSON.parse(local) : initial;
    const [state, setState] = useState(players);

    const newSetter = input => {
        localStorage.setItem("players", JSON.stringify(state));
        setState(input);
    }

    return [state, newSetter, local ? true : false];
}

export default usePlayers;