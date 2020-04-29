import React , {Component} from 'react';


import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/search.component';


class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters:[],   
      searchField: ''
  };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  render(){
    const {monsters , searchField} = this.state;
    const filteredMonsters = monsters.filter(
      monsters => monsters.name.toLowerCase().includes(searchField.toLocaleLowerCase())

    );
    return (
      //Jsx code
      <div className="App">
        <h1>Monsters Relodax</h1>
         <SearchBox
           placeholder='search monsters'
           handleChange={e => this.setState({ searchField: e.target.value })}
         />
        <CardList monsters = {filteredMonsters} />
       
        
     
    </div>
    );
  }
}

export default App;
