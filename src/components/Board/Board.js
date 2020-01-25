import React, { Component } from "react";

import { PlayingBoard, Field, Stone } from "./style";

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStones: [],
        };
        this.getFields = this.getFields.bind(this);
        this.checkMove = this.checkMove.bind(this);
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
        let result = null;

        if (Math.abs(moveX) > Math.abs(moveY)) {
            result = moveX > 0 ? "right" : "left";
        }
        if (Math.abs(moveY) > Math.abs(moveX)) {
            result = moveY > 0 ? "down" : "up";
        }
        console.log(result);
        return result;
    }

    checkMove(direction, fieldId, n, currentStones) {
        if (!direction) return;

        if (direction === "up" || direction === "down") {
 
            let col = [];
            let number = fieldId % n;
            for (let i = n; i > 0; i = i - 1) {
                col.push(n * (n - i) + number)
            }

            if( direction === "up"){
                if( currentStones[col[0]] === 1 ) return; 

                // execute valid move
                // if stones are in col only -> quite complicated with stones & col arrays ... 
                // if (array.reduce((pv, cv) => pv + cv, 0) == 0) return; 

                for( let k = 0; k < n-1; k = k + 1){
                    currentStones[col[k]] = currentStones[col[k+1]]
                }
                currentStones[col[n-1]] = 0;
                this.setState({ currentStones: currentStones });
                return;
            }

            if( direction === "down" ){
                if(currentStones[col[n-1]] === 1 ) return; 

                for( let k = n-1; k > 0; k = k - 1){
                    currentStones[col[k]] = currentStones[col[k-1]]
                }
                currentStones[col[0]] = 0;
                this.setState({ currentStones: currentStones });
                return;
            }
        }

        if (direction === "right" || direction === "left") {
            let row = [];
            let number = Math.floor(fieldId / n);
            for (let j = n; j > 0; j = j - 1) {
                row.push((n - j) + number * n)
            }

            if( direction === "right"){
                if( currentStones[row[n-1]] === 1 ) return; 

                for( let k = n-1; k > 0; k = k - 1){
                    currentStones[row[k]] = currentStones[row[k-1]]
                }
                currentStones[row[0]] = 0;
                this.setState({ currentStones: currentStones });
                return;
            }

            if( direction === "left"){
                if( currentStones[row[0]] === 1 ) return; 

                for( let k = 0; k < n-1; k = k + 1){
                    currentStones[row[k]] = currentStones[row[k+1]]
                }
                currentStones[row[n-1]] = 0;
                this.setState({ currentStones: currentStones });
                return;
            }
        }

    }

    getFields(fieldsArray, rows, currentStones) {
        let mouseDown = false;
        let direction = null;

        return fieldsArray.map((field, index) => (
            <Field key={index} id={index} rows={rows} dark={field}
                onMouseDown={() => mouseDown = true}
                onMouseMove={mouseMoveEvent => direction = this.handleMouseMove(mouseMoveEvent, mouseDown)}
                onMouseUp={() => {
                    mouseDown = false
                    this.checkMove(direction, index, rows, currentStones)
                }}
            >
                <Stone rows={rows} exists={currentStones[index]}></Stone>
            </Field>
        ));
    }

    render() {
        let currentStones = this.state.currentStones.length === 0 ? 
            this.initStones(this.props.numberOfRows) : this.state.currentStones;

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