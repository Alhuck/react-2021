import {React, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons : [
      {name: "Alhuck", age: 29},
      {
        name: "Sindhura",
        age: 26
      },
      {
        name: "Senthil",
        age: 29
      }
    ]
  }

  render () {
    return (
      <div className="App">
        <h1>Im a React App</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Crafting</Person> 
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
  
}

export default App;
