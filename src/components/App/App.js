import React, { Component } from "react";
import Board from "../Board/Board";

import {
    Container,
    TopContentContainer,
    Button,
    LevelDisplay,
    BottomContentContainer,
    FixLevelSelector,
} from "./style";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfRows: 0,
        };
        this.getFieldsArray = this.getFieldsArray.bind(this);
    }

    getFieldsArray(n) {
        let fieldsArray = [...Array(n * n).fill(0)];
        let numbersToSelect = Math.floor(n * n * 0.4);

        for (let i = 0; i < numbersToSelect; i = i + 1) {
            const index = Math.floor(Math.random() * n * n);
            if (fieldsArray[index] === 0) {
                fieldsArray[index] = 1;
            } else {
                numbersToSelect = numbersToSelect + 1;
            }
        }
        return fieldsArray;
    }

    render() {
        return (
            <Container>
                <TopContentContainer>
                    <Button
                        onClick={() => {
                            this.setState({ numberOfRows: 4 });
                        }}
                    >
                        New Game
                    </Button>
                    <LevelDisplay>Level</LevelDisplay>
                </TopContentContainer>
                <Board
                    numberOfRows={this.state.numberOfRows}
                    fieldsArray={this.getFieldsArray(this.state.numberOfRows)}
                />
                <BottomContentContainer>
                    <FixLevelSelector>fix size</FixLevelSelector>
                    <Button>Restart Level</Button>
                </BottomContentContainer>
            </Container>
        );
    }
}
