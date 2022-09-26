import React from 'react'
import styled from 'styled-components';
import Letter from './Letter';

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const FlexWraper = styled.div
    `
        display: flex;
        flex-flow: row wrap;
        max-width: 50%;
        height: auto;
        margin: auto;
        margin-bottom: 15px;
    `;

function Letters(props) {

    return (
        <FlexWraper>
            {alphabet.map((char, index) => <Letter key={index} char={char} click={props.setClick} started={props.started} />)}
        </FlexWraper>
    )
}

export default Letters
