import React, { Component } from "react";

import { Field } from "./Field";
import { PlayingBoard } from "./style";

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfRows: 4,
        };
        this.getFields = this.getFields.bind(this);
    }

    getFields(rows) {
        const arrayOfFields = [...Array(rows * rows).keys()];
        return arrayOfFields.map((field, index) => (
            <Field key={index} rows={rows} number={index} dark />
        ));
    }

    render() {
        return <PlayingBoard>{this.getFields(this.state.numberOfRows)}</PlayingBoard>;
    }
}
