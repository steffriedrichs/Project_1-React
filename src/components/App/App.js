import React, { Component } from "react";
import Board from "../Board/Board";

import { Container, StartGameButton } from "./style";

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
                <StartGameButton
                    onClick={() => {
                        this.setState({ numberOfRows: 3 });
                    }}
                >
                    Start Game
                </StartGameButton>
                <Board numberOfRows={this.state.numberOfRows} />
            </Container>
        );
    }
}
