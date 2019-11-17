import React, { Component } from "react";

import { PlayingBoard, Field, Stone } from "./style";

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.getFields = this.getFields.bind(this);
    }

    initStones(n) {
        let stonesArray = [...Array(n * n).fill(0)];
        let numbersToSelect = Math.floor(n * n * 0.4);

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

    handleMouseMove(mouseMoveEvent, mouseDown) {
        if (!mouseDown) return null;

        let moveX = mouseMoveEvent.movementX
        let moveY = mouseMoveEvent.movementY
        let result;

        console.log("mouseDown", mouseDown);

        if (Math.abs(moveX) > Math.abs(moveY)) {
            result = moveX > 0 ? "right" : "left";
        }
        if (Math.abs(moveY) > Math.abs(moveX)) {
            result = moveY > 0 ? "down" : "up";
        }
        console.log(result);
        return result;
    }

    getFields(fieldsArray, rows, stones) {
        let mouseDown = false;
        return fieldsArray.map((field, index) => (
            <Field key={index} id={index} rows={rows} dark={field}
                onMouseUp={() => mouseDown = false}
                onMouseDown={() => mouseDown = true}
                onMouseMove={mouseMoveEvent => this.handleMouseMove(mouseMoveEvent, mouseDown)}>
                <Stone rows={rows} exists={stones[index]}></Stone>
            </Field>
        ));
    }

    render() {
        let currentStones = this.initStones(this.props.numberOfRows);
        return <PlayingBoard>
            {this.getFields(this.props.fieldsArray, this.props.numberOfRows, currentStones)}
        </PlayingBoard>;
    }
}


{/* 
onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
onTouchEnd={() => this.handleTouchEnd()}

onMouseDown={mouseDownEvent => this.handleMouseDown(mouseDownEvent)}
onMouseMove={mouseMoveEvent => this.handleMouseMove(mouseMoveEvent)}
onMouseUp={() => this.handleMouseUp()}
onMouseLeave={() => this.handleMouseLeave()}
*/}