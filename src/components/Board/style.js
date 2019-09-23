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
    background: ${props => (props.dark ? "#525252" : "#9c9c9c")};
    max-width: ${props => 400/props.rows - 4}px;
    max-height: ${props => 400/props.rows - 4}px;
    width: ${props => 60/props.rows-1}vw;
    heigth: ${props => 60/props.rows-1}vw;
    line-height: ${props => 60/props.rows-1}vw;
    float: left;
    margin: 2px;
    border-radius: 3px;
    color: white;
`;
