import {React} from 'react';
import './Person.css';
import styled from 'styled-components';

const person = (props) => {

    const StyledPerson = styled.div `
        border : 1px solid #d2cfcf;
        margin : 16px auto;
        padding : 16px;
        text-align: center;
        width : 60%;

        @media (min-width: 500px) : {
            width: 450px,
        }`;

    // const mediaStyles = {
    //     '@media (min-width: 500px)' : {
    //         width : '300px',
    //     }
    // }

    return (
        // <div className="Person" style={mediaStyles}>
        <StyledPerson>
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChangedHandler} value={props.name}/>
        </StyledPerson>
            
        // </div>
        
    )
}

export default person;