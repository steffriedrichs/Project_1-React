import React, { Component } from "react";

import { FieldElement } from "./style";

export class Field extends Component {
    constructor(props) {
        super(props);
    }

    getFields(rownumber) {
        for (let row = 0; row < rownumber; row++) {
            for (let col = 0; col < rownumber; col++) {
                return (
                    <FieldElement id={this.props.number} dark rows={this.props.rows}>
                        {this.props.number}
                    </FieldElement>
                );
            }
        }
    }

    render() {
        return <>{this.getFields(this.props.rows)}</>;
    }
}
