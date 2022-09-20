import React from 'react'
import styled from 'styled-components';

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const FlexWraper = styled.div
    `
        display: flex;
        flex-flow: row wrap;
        max-width: 40%;
        height: auto;
        margin: auto;
        margin-bottom: 15px;
    `;

const Letter = styled.button
    `
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 20px;
        background-color: #778299;
        border: none;
        border-radius: 5px;
        margin: 5px;
        padding: 15px;
        cursor: pointer;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    `;

function Letters() {
  return (
    <FlexWraper>
        {alphabet.map((char) => <Letter>{char}</Letter>)}
    </FlexWraper>
  )
}

export default Letters
