import styled from "styled-components";

export const PlayingBoard = styled.div`
    border: 3px solid red;
    display: inline-block;
    width: 60vw;
    height: 60vw;
    max-width: 400px;
    max-height: 400px;
    border-radius: 5px;
    margin: 20px;
`;

export const Field = styled.div`
    background: ${props => (props.dark ? `rgba(53,53,53,0.7)` : `rgba(153,153,153,0.7)`)};
    max-width: ${props => 400 / props.rows - props.rows}px;
    max-height: ${props => 400 / props.rows - props.rows}px;
    width: ${props => 60 / props.rows - 1}vw;
    height: ${props => 60 / props.rows - 1}vw;
    float: left;
    margin: 3px 0px 0px 3px;
    border-radius: 3px;
    color: white;
`;

export const Stone = styled.div`
    background: ${props => (props.exists ? `black` : null)};
    max-width: ${props => 200 / props.rows - props.rows}px;
    max-height: ${props => 200 / props.rows - props.rows}px;
    width: ${props => 30 / props.rows - 1}vw;
    height: ${props => 30 / props.rows - 1}vw;
    border-radius: 100px;
    margin: auto;
    margin-top: 25%;
`;

export const InfoBox = styled.div`
    background: pink;
    opacity: 0.8;
    width: 50vw;
    height: 30vw;
    max-width: 300px;
    max-height: 200px;
    border-radius: 5px;
    margin: auto;
    margin-top: 25%;
`;

export const WinningText = styled.div`
    position: fixed;
    font-weight: bold;
`;