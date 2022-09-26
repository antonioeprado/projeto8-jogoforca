import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Letters from './Letters';
import Guess from './Guess';

const Button = styled.button
    `
        background: #0fbd5a;
        color: white;
        padding: 10px;
        border-radius: 10px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        width: 150px;
        height: 45px;
        margin-top: 27px;
        cursor: pointer;
    `;

const FlexRow = styled.div
    `
        display: flex;
        width: 100%;
        margin: auto;
        justify-content: space-between;
        margin-bottom: 50px;
    `;

const FlexColumn = styled.div
    `
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        width: 35%;
    `;

const Word = styled.p
    `
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: ${props => props.color};
    `;

const Image = styled.img
    `
        width: 300px;
        height: auto;
    `;

    function scramble(lst) {
        const lstCopy = [...lst];

        for(let index = lstCopy.length -1; index > 0; index--) {
            const rIndex = Math.floor(Math.random() * (index + 1));
            const original = lstCopy[index];

            lstCopy[index] = lstCopy[rIndex];
            lstCopy[rIndex] = original;
        }
        return lstCopy;
    }

function Game(props) {

    const [hanged, setHanged] = useState('assets/forca0.png');
    const [tries, setTries] = useState(0);
    const [start, setStart] = useState(false);
    const [word, setWord] = useState("");
    const [nLetters, setNLetters] = useState(0);
    const [clicked, setClicked] = useState(null);
    const [wordArray, setWordArray] = useState([]);
    const [guess, setGuess] = useState("");
    const [color, setColor] = useState("black");

    useEffect(() => {
        guessWord()
    }, [guess])

    useEffect(() => {
        setGuess("");
    }, [start])

    useEffect(() => {
        setNLetters(word.length);
        console.log(word);
    }, [word])

    useEffect(() => {
        setWordArray(Array(nLetters).fill("__ "))
    }, [nLetters, word])

    useEffect(() => {
        checkWord();
    }, [clicked])

    useEffect(() => {
        checkWin();
    }, [wordArray, guess])

    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    }

    function checkWin() {
        if(word.length !== 0 && wordArray.lenght !== 0 && clicked !== null) {
            if(wordArray.join("") === word) {
                setColor("green");
                setStart(false);
            } else if(wordArray.join("") !== guess && guess.length !== 0) {
                setColor("red");
                setStart(false);
            }
        }
    }

    function wrongLetter() {

        const count = tries + 1;
        setTries(count);
        const newHanged = `assets/forca${tries}.png`;
        setHanged(newHanged);
        if(tries >= 6) {
            setColor("red");
            setWordArray(word);
            setStart(false);
        }
    }

    function startGame() {
        setStart(true);
        setColor("black");
        const sortedWordsArray = props.words.sort(() => Math.random() - 0.5);
        const scrambledArray = scramble([...sortedWordsArray]);
        const randomIndex = Math.floor(Math.random()*10);
        const c = removeAccents(scrambledArray[randomIndex])
        setWord(c);
    }

    function checkWord() {

        if(word.includes(clicked)) {
            const indiceArray = [];
            const newArray = [...wordArray];
            for(const letter in word) {
                if(word[letter] === clicked) {
                    indiceArray.push(letter);
                }
            }
            indiceArray.forEach((i) => {
                newArray.splice(i, 1, clicked);
                setWordArray(newArray);
            })
        } else {
            wrongLetter()
        }
    }

    function guessWord() {
        if(guess.length !== 0){
            if(word === guess) {
                const arr = [];
                for(const letter of guess){
                    arr.push(letter);
                    setWordArray(arr);
                }
            } else {
                const arr = [];
                for(const letter of word) {
                    arr.push(letter)
                    setWordArray(arr);
                    setColor("red");
                }
            }
        }
    }

    return (
        <>
            <FlexRow>
                <Image src={hanged} alt ="" data-identifier="game-image"/>
                <FlexColumn>
                    <Button onClick={startGame} data-identifier="choose-word">Escolher palavra</Button>
                    <Word color={color} data-identifier="word">{nLetters !== 0 ? wordArray : null}</Word>
                </FlexColumn>
            </FlexRow>
            <Letters started={start} setClick={setClicked} />
            <Guess guess={setGuess} />
        </>
    )
}

export default Game