import React from 'react';
import './App.css';
import { Header } from './Header';
import { Person } from './Person';

const someuser1JSON = `{
  "name":"Oleksandr", 
  "lastname":"Pyliavets",
  "bio":"Was born in Trostianets town, grows in Bratslav town, study in Vinnytsya, and now live in Kyiv",
  "age": 25,
  "birth":"Sept, 16, 1996",
  "contacts":{
    "email":"o.pyliavets@gmail.com",
    "phone":"+380636730168"
  },
  "human": false
}`;

const someuser2JSON = `{
  "name":"Alina", 
  "lastname":"Pyliavets",
  "bio":"Was born in Tetiyiv town, grows in Plokhanivka borough, study in Kyiv, and now live in America",
  "age": 25,
  "birth":"Aug, 28, 1996",
  "contacts":{
    "email":"m.alina_ds@gmail.com",
    "phone":"+380731538574"
  },
  "human": true
}`;

const user = JSON.parse(someuser1JSON);

const App = () => (
  <div className="App">
    <Header copyright = "Short BIO"/>
    <Person name = {user.name} lastname = {user.lastname} bio = {user.bio} age = {user.age} birth = {user.birth} contacts = {user.contacts} isHuman = {user.human}/>    
  </div>
)
export default App;
