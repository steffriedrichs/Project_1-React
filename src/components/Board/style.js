import styled from "styled-components";

export const PlayingBoard = styled.div`
    border: 3px solid red;
    display: inline-block;
    width: 300px;
    height: 300px;
    margin-top: 10%;
    border-radius: 5px;
`;

export const FieldElement = styled.div`
    background: ${props => (props.dark ? "black" : "white")};
    width: ${props => 300/props.rows - 4}px;
    line-height: ${props => 300/props.rows - 4}px;
    float: left;
    margin: 2px;
    border-radius: 3px;
    color: white;
`;
