import React, { Component } from "react";
import Board from "../Board/Board";

import { Container, TopContentContainer, StartGameButton, LevelDisplay, BottomContentContainer, RestartLevelButton, FixLevelSelector } from "./style";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfRows: 0,
        };
    }

    render() {
        return (
            <Container>
                <TopContentContainer>
                    <StartGameButton
                        onClick={() => {
                            this.setState({ numberOfRows: 3 });
                        }}
                    >
                        New Game
                </StartGameButton>
                    <LevelDisplay>Level</LevelDisplay>
                </TopContentContainer>
                <Board numberOfRows={this.state.numberOfRows} />
                <BottomContentContainer>
                    <FixLevelSelector>fix size</FixLevelSelector>
                    <RestartLevelButton>Restart Level</RestartLevelButton>
                </BottomContentContainer>
            </Container>
        );
    }
}
