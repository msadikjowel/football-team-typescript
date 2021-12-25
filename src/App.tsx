import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

// interface
export interface IState {
  player: {
    name: string
    url: string
    type: string
    club?: string
  }[]
}

function App() {
  const [player, setPlayer] = useState<IState['player']>([

    {
      name: 'Lionel Messi',
      url: 'https://images.ole.com.ar/2021/11/05/a9AEaulQr_340x340__1.jpg',
      type: 'Striker',
      club: 'PSG'
    }
  ])


  return (
    <div className="App">
      <h1>Make your dream football team.</h1>
      <List player={player}></List>
      <AddToList player={player} setPlayer={setPlayer}></AddToList>
    </div>
  );
}

export default App;
