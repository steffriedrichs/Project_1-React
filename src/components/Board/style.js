import styled from "styled-components";
import { keyframes } from "styled-components";

const wrongMoveError = keyframes`
    0% { border: 3px solid red; }
    100% { border: none; }
`;

export const PlayingBoard = styled.div`
    display: inline-block;
    width: min(60vw, 60vh);
    height: min(60vw, 60vh);
    max-width: 320px;
    max-height: 320px;
    border-radius: 5px;
    animation-name: ${props => (props.isWrongMove ? wrongMoveError : null)};
    animation-duration: 2s;
    animation-iteration-count: 1;
`;

const colours = [
    { dark: "rgba(53,53,53,0.7)", light: "rgba(153,153,153,0.7)" },
    { dark: "rgba(53,53,53,0.7)", light: "rgba(153,153,153,0.7)" },
    { dark: "steelblue", light: "lightsteelblue" },
    { dark: "sienna", light: "burlywood" },
    { dark: "darkmagenta", light: "thistle" },
    { dark: "darkSalmon", light: "bisque" },
    { dark: "cadetblue", light: "powderBlue" },
    { dark: "indianred", light: "lightpink" },
    { dark: "sandybrown", light: "moccasin" },
    { dark: "darkgreen", light: "darkseagreen" },
    { dark: "palevioletred", light: "mistyrose" },
    { dark: "peru", light: "peachpuff" },
    { dark: "darkkhaki", light: "palegoldenrod" },
    { dark: "burlywood", light: "bisque" },
    { dark: "saddlebrown", light: "tan" },
    { dark: "darkslategrey", light: "cadetblue" },
];

export const Field = styled.div`
    background: ${props => (props.dark ? colours[props.level].dark : colours[props.level].light)};
    max-width: ${props => 320 / props.rows - props.rows}px;
    max-height: ${props => 320 / props.rows - props.rows}px;
    width: min(${props => 60 / props.rows - 1}vw, ${props => 60 / props.rows - 1}vh);
    height: min(${props => 60 / props.rows - 1}vw, ${props => 60 / props.rows - 1}vh);
    float: left;
    margin: 3px 0px 0px 3px;
    border-radius: 3px;
    color: white;
`;

export const Stone = styled.div`
    background: ${props => (props.exists ? `black` : null)};
    max-width: ${props => 170 / props.rows - props.rows}px;
    max-height: ${props => 170 / props.rows - props.rows}px;
    width: min(${props => 30 / props.rows - 1}vw, ${props => 30 / props.rows - 1}vh);
    height: min(${props => 30 / props.rows - 1}vw, ${props => 30 / props.rows - 1}vh);
    border-radius: 100px;
    margin: auto;
    margin-top: 25%;
`;

export const InfoBox = styled.div`
    background: aliceblue;
    opacity: 0.7;
    width: 80%;
    height: 50%;
    max-width: 260px;
    max-height: 200px;
    border-radius: 5px;
    margin: auto;
    margin-top: 25%;
    text-align: center;
`;

export const WinningText = styled.div`
    position: absolute;
`;

export const Nodisplay = styled.p`
    display: none;
`;

export const MovesIndicator = styled.p`
    font-size: 20px;
`;
