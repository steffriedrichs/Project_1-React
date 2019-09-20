import React, { Component } from "react";
import Board from "../Board/Board";

import {
    Container,
    TopContentContainer,
    StartGameButton,
    LevelDisplay,
    BottomContentContainer,
    RestartLevelButton,
    FixLevelSelector,
} from "./style";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfRows: 0,
        };
        this.getFieldMatrix = this.getFieldMatrix.bind(this);
    }

    getFieldMatrix(n) {
        Math.floor(Math.random() * n);

        //       if(!selectedFields.includes(index)){
        //         selectedFields.push(index);
        //       }
    }

    render() {
        return (
            <Container>
                <TopContentContainer>
                    <StartGameButton
                        onClick={() => {
                            this.setState({ numberOfRows: 4 });
                        }}
                    >
                        New Game
                    </StartGameButton>
                    <LevelDisplay>Level</LevelDisplay>
                </TopContentContainer>
                <Board
                    numberOfRows={this.state.numberOfRows}
                    fieldMatrix={this.getFieldMatrix(this.state.numberOfRows)}
                />
                <BottomContentContainer>
                    <FixLevelSelector>fix size</FixLevelSelector>
                    <RestartLevelButton>Restart Level</RestartLevelButton>
                </BottomContentContainer>
            </Container>
        );
    }
}
