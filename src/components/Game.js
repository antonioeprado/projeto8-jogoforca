import React, { useState } from 'react';
import styled from 'styled-components';
import words from './words';

const Button = styled.button
    `
        background: #0fbd5a;
        color: white;
        padding: 10px;
        border-radius: 10px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        width: auto;
        height: 45px;
        margin-top: 27px;
        cursor: pointer;
    `;

const FlexWraper = styled.div
    `
        display: flex;
        width: 100%;
        margin: auto;
        justify-content: space-around;
        margin-bottom: 50px;
    `;

function Game() {
    const [hanged, setHanged] = useState('assets/forca0.png');
    const [tries, setTries] = useState(0);

    function wrongLetter() {
        const count = tries + 1;
        setTries(count);
        const newHanged = `assets/forca${tries}.png`;
        setHanged(newHanged);
    }

    const Image = styled.img.attrs({src: hanged, alt: ""})
    `
        width: 300px;
        height: auto;
    `;


  return (
    <FlexWraper>
        <Image />
        <Button>Escolher palavra</Button>
    </FlexWraper>
  )
}

export default Game