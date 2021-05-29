import React , { Component } from 'react';

import { CardList } from './components/card-list/card-list.component.jsx'

import { SearchBox } from './components/search-box/search-box.component.jsx'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters : [],   // initial state set to empty
      searchField : ''
    }
    
    //this.handleChange = this.handleChange.bind(this)   -> this is used without arrow fuction
  }
  componentDidMount() {    // it will be called when the rendering is done for the very first time
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
    .catch(error => console.log('SERVER DOWN'))
    //.then(users => console.log(users))
  }
  // handleChange(e) {    here we will need to bind this explicitely
  //   this.setState({ searchField: e.target.value})
  // }
  handleChange = event => {
    this.setState({ searchField: event.target.value})
  }
  render() {        // render is just only required to tell what is to be rendered onto the broweser screen
    const { monsters , searchField } = this.state
    // this will return an array of filteredMonsters
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
         <SearchBox 
          placeholder = "Search Monsters!!"
          handleChange = { this.handleChange }/>
        <CardList monsters = {filteredMonsters} />
      </div>
    )
  }
}

export default App;
