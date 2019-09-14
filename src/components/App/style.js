import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    border: 3px solid black;
    height: 100%;
    width: 60vw + 40px;
    max-width: 440px;
    text-align: center;
`;

export const TopContentContainer = styled.div`
    padding: 50px 20px 0px 20px;
`;

export const StartGameButton = styled.button`
    display: inline;
    height: 25px; 
    line-height: 25px;
    background-color: grey;
    color: white;
    text-align: center;
    border-radius: 5px;
    border: none;
`;

export const LevelDisplay = styled.div`
    display: inline;
`;

export const BottomContentContainer = styled.div`
    padding: 0px 20px;
`;

export const RestartLevelButton = styled.button`
    display: inline;
    height: 25px; 
    line-height: 25px;
    background-color: grey;
    color: white;
    text-align: center;
    border-radius: 5px;
    border: none;
`;

export const FixLevelSelector = styled.div`
    display: inline;
`;