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

    getFields(fieldsArray, rows, stones) {
        return fieldsArray.map((field, index) => (
            <Field key={index} id={index} rows={rows} dark={field}>
                <Stone rows={rows} exists={stones[index]}></Stone>
            </Field>
        ));
    }

    render() {
        let currentStones = this.initStones(this.props.numberOfRows);
        console.log(currentStones);
        return <PlayingBoard>
            {this.getFields(this.props.fieldsArray, this.props.numberOfRows, currentStones)}
        </PlayingBoard>;
    }
}
