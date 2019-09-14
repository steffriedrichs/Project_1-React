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

export const FieldElement = styled.div`
    background: ${props => (props.dark ? "#1a2229" : "white")};
    width: ${props => 300/props.rows - 4}px;
    line-height: ${props => 300/props.rows - 4}px;
    float: left;
    margin: 2px;
    border-radius: 3px;
    color: white;
`;
