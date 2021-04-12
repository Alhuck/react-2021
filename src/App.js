import {React, Component} from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {


  state = {
    persons: [
      { id: 'asd1', name: "Alhuck", age: 29 },
      {
        id: 'qwe1',
        name: "Sindhura",
        age: 26
      },
      {
        id: 'zxc1',
        name: "Senthil",
        age: 29
      }
    ],
    showPersons: false
  }

  deletePerson = (personIndex) => {
    
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons : persons
    })
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersons = () => {
    
    const showOrHidePersons = this.state.showPersons;
    this.setState({showPersons: !showOrHidePersons})
  }

  
  
  render () {

    const paraStyles = [];
    let showPersonsArr = null;
    let btnStyle = '';


    if(this.state.persons.length <=2) {
      paraStyles.push(classes.red);
    }

    if(this.state.persons.length <=1) {
      paraStyles.push(classes.bold);
    }

    if(this.state.showPersons) {
      showPersonsArr = 
        <div>
          {this.state.persons.map( (person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePerson(index)}
                nameChangedHandler={(event) => this.nameChangedHandler(event, person.id)}
                key={person.id}>
            </Person>)
          })}
        </div>
     
      btnStyle = classes.btnRed;
    }

    return (
        <div className={classes.App}>
          
          <h1>Im a React App</h1>
          
          <button className={btnStyle} onClick={this.togglePersons}>Toggle Person</button>
          <p className={paraStyles.join(" ")}>This is really working!</p>
          {showPersonsArr}
        </div>
    
    );
  }
}

export default App;
