"use strict";

import React from 'react'
import ReactDOM from 'react-dom'

export default class Counter extends React.Component {

    // Props - I/F
    static get propTypes() {
        return {
            value: React.PropTypes.number.isRequired,
            onClickPlus: React.PropTypes.func.isRequired,
            onClickMinus: React.PropTypes.func.isRequired
        };
    }

    // Props - Default
    static get defaultProps() {
        return {
            name: 'count'
        };
    }

    constructor(props) {
      super(props);
    }

    // Rendering
    render() {
        return (
            <div>
                <span>{this.props.name}: {this.props.value}</span>
                <div>
                    <button onClick={this.props.onClickPlus}>+1</button>
                    <button onClick={this.props.onClickMinus}>-1</button>
                </div>
            </div>
        );
    }
};
