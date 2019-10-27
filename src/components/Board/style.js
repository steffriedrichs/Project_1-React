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
    line-height: ${props => 60 / props.rows - 1}vw;
    float: left;
    margin: 2px 0px 0px 2px;
    border-radius: 3px;
    color: white;
`;
