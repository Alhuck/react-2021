import {React} from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

    const mediaStyles = {
        '@media (min-width: 500px)' : {
            width : '300px',
        }
    }

    return (
        <div className="Person" style={mediaStyles}>
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChangedHandler} value={props.name}/>
        </div>
        
    )
}

export default Radium(person);