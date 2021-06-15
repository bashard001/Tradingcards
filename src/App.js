import { Component } from "react";

import './App.css';

import { CardList } from "./components/card-list/card-list";

class App extends Component {
constructor(){
  super();
  this.state = {
    monsters:[
      {
        name: "frankenstein",
        id: "1"
      },
      {
        name: "dracula",
        id: "2"
      },
      {
        name: "zombie",
        id: "3"
      }
    ]
  }
}

  render(){
  return (
    <div className="App">
      <CardList name="Yihua"><h1>HELLO</h1></CardList>
    {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
    </div>
  );
}
}
export default App;
