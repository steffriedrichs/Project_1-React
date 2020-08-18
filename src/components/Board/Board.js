import React, { Component } from "react";

import {
    PlayingBoard,
    Field,
    Stone,
    InfoBox,
    WinningText,
    Nodisplay,
    MovesIndicator,
} from "./style";

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStones: [],
            isWrongMove: false,
            numberOfMoves: 0,
        };
        this.getFields = this.getFields.bind(this);
        this.checkMove = this.checkMove.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.fieldsArray !== prevProps.fieldsArray) {
            this.setState({ currentStones: [] });
        }
    }

    initStones(n, level) {
        let stonesArray = [...Array(n * n).fill(0)];
        let factor = level % 5 != 0 ? level % 5 : 5;
        let numbersToSelect = Math.floor(n * n * (factor / 10 + 0.2));

        for (let i = 0; i < numbersToSelect; i = i + 1) {
            const index = Math.floor(Math.random() * n * n);
            if (stonesArray[index] === 0) {
                stonesArray[index] = 1;
            } else {
                numbersToSelect = numbersToSelect + 1;
            }
        }
        return stonesArray;
    }

    getMoveDiretion(moveX, moveY) {
        if (Math.abs(moveX) > Math.abs(moveY)) {
            return moveX > 0 ? "right" : "left";
        }
        if (Math.abs(moveY) > Math.abs(moveX)) {
            return moveY > 0 ? "down" : "up";
        }
        return null;
    }

    getMouseMove(mouseMoveEvent, mouseDown) {
        if (!mouseDown) return null;

        let moveX = mouseMoveEvent.movementX;
        let moveY = mouseMoveEvent.movementY;

        return this.getMoveDiretion(moveX, moveY);
    }

    getTouchMove(touchMoveEvent, ongoingTouches) {
        let newTouch = {
            posX: touchMoveEvent.targetTouches[0].pageX,
            posY: touchMoveEvent.targetTouches[0].pageY,
        };
        ongoingTouches.push(newTouch);

        return ongoingTouches;
    }

    evalTouches(ongoingTouches) {
        if (!ongoingTouches || ongoingTouches.length === 0) return;

        let start = ongoingTouches[0];
        let end = ongoingTouches[ongoingTouches.length - 1];
        let moveX = end.posX - start.posX;
        let moveY = end.posY - start.posY;

        return this.getMoveDiretion(moveX, moveY);
    }

    checkMove(direction, fieldId, n, currentStones) {
        if (!direction) return;

        let shiftToStart = (colOrRow, currentStones) => {
            for (let k = 0; k < n - 1; k = k + 1) {
                currentStones[colOrRow[k]] = currentStones[colOrRow[k + 1]];
            }
            currentStones[colOrRow[n - 1]] = 0;
            let moves = eval(this.state.numberOfMoves + 1);
            this.setState({ currentStones: currentStones, numberOfMoves: moves });
        };

        let shiftToEnd = (colOrRow, currentStones) => {
            for (let k = n - 1; k > 0; k = k - 1) {
                currentStones[colOrRow[k]] = currentStones[colOrRow[k - 1]];
            }
            currentStones[colOrRow[0]] = 0;
            let moves = eval(this.state.numberOfMoves + 1);
            this.setState({ currentStones: currentStones, numberOfMoves: moves });
        };

        let displayWrongMove = numberOfBlockingStone => {
            this.setState({ isWrongMove: true });
        };

        if (direction === "up" || direction === "down") {
            let col = [];
            let number = fieldId % n;
            for (let i = n; i > 0; i = i - 1) {
                col.push(n * (n - i) + number);
            }
            if (direction === "up") {
                if (currentStones[col[0]] === 1) {
                    displayWrongMove(col[0]);
                    return;
                }
                shiftToStart(col, currentStones);
                return;
            }
            if (direction === "down") {
                if (currentStones[col[n - 1]] === 1) {
                    displayWrongMove(col[n - 1]);
                    return;
                }
                shiftToEnd(col, currentStones);
                return;
            }
        }

        if (direction === "right" || direction === "left") {
            let row = [];
            let number = Math.floor(fieldId / n);
            for (let j = n; j > 0; j = j - 1) {
                row.push(n - j + number * n);
            }
            if (direction === "right") {
                if (currentStones[row[n - 1]] === 1) {
                    displayWrongMove(row[n - 1]);
                    return;
                }
                shiftToEnd(row, currentStones);
                return;
            }
            if (direction === "left") {
                if (currentStones[row[0]] === 1) {
                    displayWrongMove(row[0]);
                    return;
                }
                shiftToStart(row, currentStones);
                return;
            }
        }
    }

    getFields(fieldsArray, rows, currentStones) {
        let mouseDown = false;
        let ongoingTouches = [];
        let direction = null;

        return fieldsArray.map((field, index) => (
            <Field
                key={index}
                id={index}
                rows={rows}
                dark={field}
                onMouseDown={() => (mouseDown = true)}
                onMouseMove={mouseMoveEvent =>
                    (direction = this.getMouseMove(mouseMoveEvent, mouseDown))
                }
                onMouseUp={() => {
                    mouseDown = false;
                    this.checkMove(direction, index, rows, currentStones);
                }}
                onTouchMove={touchMoveEvent =>
                    (ongoingTouches = this.getTouchMove(touchMoveEvent, ongoingTouches))
                }
                onTouchEnd={() => {
                    direction = this.evalTouches(ongoingTouches);
                    this.checkMove(direction, index, rows, currentStones);
                    ongoingTouches = [];
                }}
            >
                <Stone rows={rows} exists={currentStones[index]}></Stone>
            </Field>
        ));
    }

    checkIfWon(stones, fields) {
        if (JSON.stringify(stones) === JSON.stringify(fields)) {
            return true;
        }
        return false;
    }

    render() {
        let currentStones =
            this.state.currentStones.length === 0
                ? this.initStones(this.props.numberOfRows, this.props.level)
                : this.state.currentStones;

        return (
            <>
                <MovesIndicator>Number of Moves: {this.state.numberOfMoves}</MovesIndicator>
                <PlayingBoard isWrongMove={this.state.isWrongMove}>
                    {this.getFields(this.props.fieldsArray, this.props.numberOfRows, currentStones)}
                    {this.checkIfWon(currentStones, this.props.fieldsArray) ? (
                        this.props.level == 15 ? (
                            <InfoBox>
                                <WinningText>
                                    YOU WON THE GAME! <br></br>
                                    with {this.state.numberOfMoves} Moves
                                </WinningText>
                            </InfoBox>
                        ) : (
                            <InfoBox>
                                <WinningText>YOU WIN!! Next level... </WinningText>
                                <Nodisplay>
                                    {setTimeout(
                                        () =>
                                            this.props.handleWinning(
                                                this.props.numberOfRows,
                                                this.props.level
                                            ),
                                        1000
                                    )}
                                </Nodisplay>
                            </InfoBox>
                        )
                    ) : (
                        <></>
                    )}
                </PlayingBoard>
            </>
        );
    }
}
