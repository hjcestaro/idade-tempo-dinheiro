import React, { useState } from 'react';
import Switch from './components/Switch';

const InitialState = {
    idade: false,
    tempo: false,
    dinheiro: false
};

const App = () => {
    const [switches, setSwitches] = useState(InitialState);

    const toggleSwitch= (id) => {
       const currentState = switches[id]; 
       if(currentState === undefined) return;

        const activeSwitches = Object.values(switches).filter(value => value).length;

        const maxActive = 2;
        const newState = activeSwitches === maxActive ? InitialState : switches;
       setSwitches({ ...newState, [id]: !currentState });
    };

    return (
        <div className="container">
            <h1>Idade, Tempo e Dinheiro</h1> 
            <Switch onClick={toggleSwitch} id="idade" active={switches['idade']} label="Idade" />
            <Switch onClick={toggleSwitch} id="tempo" active={switches['tempo']} label="Tempo" />
            <Switch onClick={toggleSwitch} id="dinheiro" active={switches['dinheiro']} label="Dinheiro" />
        </div>
    )
};

export default App;