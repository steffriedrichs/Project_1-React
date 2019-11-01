import React, { Component } from "react";

import { PlayingBoard, Field, Stone } from "./style";

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.getFields = this.getFields.bind(this);
    }

    getFields(fieldsArray, rows) {
        return fieldsArray.map((field, index) => (
            <Field key={index} id={index} rows={rows} dark={field}>
                <Stone key={index} id={index} rows={rows}>{index}</Stone>
            </Field>
        ));
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

    render() {
        let currentStones = this.initStones(this.props.numberOfRows);
        console.log(currentStones);
        return <PlayingBoard>
            {this.getFields(this.props.fieldsArray, this.props.numberOfRows)}
        </PlayingBoard>;
    }
}
