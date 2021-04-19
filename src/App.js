import React, { Component } from "react";
import {CardList} from'./components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import "./App.css";


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField : ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(user => this.setState({monsters : user}))
    // .catch(console.log("some error"))
  }

  render() {
    const { monsters, searchField} = this.state;

    const filterdedMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='Search monster'
      handelChange ={e => this.setState({searchField : e.target.value})}/>
      <CardList monsters={filterdedMonsters}/>
      </div>
    );
  }
}

export default App;
