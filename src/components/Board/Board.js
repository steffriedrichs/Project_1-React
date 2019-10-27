import React, { Component } from "react";

import { PlayingBoard, Field } from "./style";

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.getFields = this.getFields.bind(this);
    }

    getFields(fieldsArray, rows) {
        return fieldsArray.map((field, index) => (
            <Field key={index} id={index} rows={rows} dark={field}>{index}</Field>
        ));
    }

    render() {
        return <PlayingBoard>{this.getFields(this.props.fieldsArray, this.props.numberOfRows)}</PlayingBoard>;
    }
}
