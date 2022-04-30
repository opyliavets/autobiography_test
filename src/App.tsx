import React from 'react';
import './App.css';
import { Header } from './Header';

const user = {
  userName: 'Oleksandr',
  userLastName: 'Pyliavyets'
}

const App = () => (
  <div className="App">
    <h1>{user.userName + " " + user.userLastName}</h1>
    <Header copyright = "Hello, world"/>
  </div>
)
export default App;
