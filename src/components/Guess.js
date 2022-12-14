import React, { useState } from 'react'
import styled from 'styled-components'

const FlexWraper = styled.div
    `
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        max-width: 70%;
        margin: auto;
        font-family: "Roboto", sans-serif;
    `;


const InputGuess = styled.input
    `
        margin: 15px;
        width: 300px;
        height: 25px;
    `;

const GuessButton = styled.button
    `
        background-color: rgba(203, 217, 245, 0.5);
        padding: 10px;
        border: 2px solid #bacef7;
        border-radius: 5px;
        color: #446bbd;
        font-weight: 700;
        cursor: pointer;
    `;

function Guess(props) {

    const [input, setInput] = useState("");

    function passInput() {
        props.guess(input);
        document.querySelector("[data-identifier=type-guess]").value = "";
    }

  return (
    <FlexWraper>
        Já sei a palavra!
        <InputGuess data-identifier="type-guess" type="text" onChange={(event) => setInput(event.target.value)} />
        <GuessButton data-identifier="guess-button" onClick={passInput}>Chutar</GuessButton>
    </FlexWraper>
  )
}

export default Guess