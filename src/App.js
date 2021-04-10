import {React, useState, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';


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

    const btnStyle = {
      backgroundColor : 'green',
      color: 'white',
      border : '1px solid black',
      cursor: 'pointer',
      ':hover': {
        backgroundColor : 'lightgreen'
      }
    }

    const paraStyles = [];

    if(this.state.persons.length <=2) {
      paraStyles.push('red');
    }

    if(this.state.persons.length <=1) {
      paraStyles.push('bold');
    }

    let showPersonsArr = null;

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
      
      btnStyle.backgroundColor = "red"
      btnStyle[':hover'] = {
        backgroundColor: 'salmon'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          
          <h1>Im a React App</h1>
          
          <button style={btnStyle} onClick={this.togglePersons}>Toggle Person</button>
          <p className={paraStyles.join(' ')}>This is really working!</p>
          {showPersonsArr}
        </div>
      </StyleRoot>
      
    );
  }
}

export default Radium(App);




// const [this.state, personsSetState] = useState({
//   persons: [
//     { name: "Alhuck", age: 29 },
//     {
//       name: "Sindhura",
//       age: 26
//     },
//     {
//       name: "Senthil",
//       age: 29
//     }
//   ]
// });

// const [otherState, othersSetState] = useState({ otherState: "Some Other Value" });

// const switchName = () => {

//   personsSetState({
//     persons: [
//       { name: "Alhuck Bhavani Abdulkaffar", age: 29 },
//       {
//         name: "Sindhura Movva",
//         age: 26
//       },
//       {
//         name: "SenthilKumar P B",
//         age: 29
//       }
//     ]
//   })

//   othersSetState('New Value');

//   console.log(this.state, otherState);
// }