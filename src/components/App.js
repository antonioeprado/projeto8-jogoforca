import React from 'react';
import Game from './Game';
import styled from 'styled-components';
import words from './words';

const Wraper = styled.div
    `
        display: flex;
        flex-flow: column nowrap;
        position: absolute;
        top: 10%;
        left: 10%;
    `;

function App() {

    return (
        <Wraper>
            <Game words={words} />
        </Wraper>
    )
}

export default App