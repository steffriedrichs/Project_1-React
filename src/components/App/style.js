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

export const Button = styled.button`
    display: inline;
    height: 25px; 
    line-height: 23px;
    margin: 5px;
    background-color: grey;
    color: white;
    text-align: center;
    border-radius: 5px;
    border: none;
    outline: none;
    &:hover {
        background-color: #454343
        color: #cfcfcf;
      }
`;

export const LevelDisplay = styled.div`
    display: inline;
`;

export const BottomContentContainer = styled.div`
    padding: 0px 20px;
`;

export const FixLevelSelector = styled.div`
    display: inline;
`;