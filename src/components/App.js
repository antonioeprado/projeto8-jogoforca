import React from 'react';
import Game from './Game';
import Letters from './Letters';
import Guess from './Guess';
import styled from 'styled-components';

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
            <Game />
            <Letters />
            <Guess />
        </Wraper>
    )
}

export default App