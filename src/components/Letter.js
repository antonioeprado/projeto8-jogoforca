import React, { useState } from 'react'
import styled from 'styled-components';


const LetterButton = styled.button
    `
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 20px;
        background-color: ${(props) => props.started && !props.disabled ? "rgba(203, 217, 245, 0.5)" : "#8a98a6"};
        border: ${(props) => props.started && !props.disabled ? "2px solid #bacef7" : "2px solid #8a98a6"};
        color: ${(props) => props.started && !props.disabled ? "#446bbd" : "black"};
        border-radius: 5px;
        margin: 5px;
        padding: 15px;
        font-family: "Roboto", sans-serif;
        font-weight: ${(props) => props.started && !props.disabled ? "700" : "400"};
        cursor: ${(props) => props.started && !props.disabled ? "pointer" : "not-allowed"};
    `;

function Letter(props) {

    const [disabled, setDisabled] = useState(false);


    function toggleDisabled(e) {
        props.click(e.innerText.toLowerCase());
        setDisabled(true);
    }


    return (
        <LetterButton started={props.started} onClick={(event) => toggleDisabled(event.target)} disabled={props.started ? disabled : true} data-identifier="letter">
            {props.char}
        </LetterButton>
    )
}

export default Letter