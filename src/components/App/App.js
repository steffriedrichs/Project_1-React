import React, { Component } from "react";
import Board from "../Board/Board";

import {
    Container,
    TopContentContainer,
    Button,
    LevelDisplay,
    BottomContentContainer,
    ButtonText,
} from "./style";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfRows: 3,
            level: 1,
            numberOfMoves: 0,
        };
        this.startNewGame = this.startNewGame.bind(this);
        this.getFieldsArray = this.getFieldsArray.bind(this);
        this.handleFieldSizeChange = this.handleFieldSizeChange.bind(this);
    }

    startNewGame() {
        this.setState({ numberOfRows: 3, level: 1 });
    }

    handleFieldSizeChange(currentSize, currentLevel) {
        let newLevel = currentLevel + 1;
        if (currentLevel % 5 !== 0) {
            this.setState({ level: newLevel });
        } else {
            let newSize = currentSize + 1;
            this.setState({ numberOfRows: newSize, level: newLevel });
        }
    }

    getFieldsArray(n, level) {
        let fieldsArray = [...Array(n * n).fill(0)];
        let factor = level % 5 !== 0 ? level % 5 : 5;
        let numbersToSelect = Math.floor(n * n * (factor / 10 + 0.2));

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
                    <LevelDisplay>Level {this.state.level}</LevelDisplay>
                </TopContentContainer>
                <Board
                    numberOfRows={this.state.numberOfRows}
                    level={this.state.level}
                    fieldsArray={this.getFieldsArray(this.state.numberOfRows, this.state.level)}
                    handleWinning={this.handleFieldSizeChange}
                />
                <BottomContentContainer>
                    <Button
                        onClick={() => {
                            this.forceUpdate();
                        }}
                    >
                        <ButtonText>Restart Level</ButtonText>
                    </Button>
                    <Button
                        onClick={() => {
                            this.startNewGame();
                        }}
                    >
                        <ButtonText>New Game</ButtonText>
                    </Button>
                </BottomContentContainer>
            </Container>
        );
    }
}
