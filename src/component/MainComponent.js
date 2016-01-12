'use strict';

import React from 'react';
import Action from '../action/CounterAction'
import Store from '../store/CounterStore'

let action = new Action();
let store = Store.instance;

export default class MainComponent extends React.Component {

    // Props - I/F
    static get propTypes() {
        return {
            count: React.PropTypes.number
        };
    }

    constructor(props) {
        super(props);

        this.state = store.getCount();
        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState(store.getCount());
    }

    componentDidMount() {
        store.updateChangeListener(this._onChange);
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <span>count: {this.state.count}</span>
                <ConterComponent />
            </div>
        );
    }
}

class ConterComponent extends React.Component {

    onClickPlus() {
        action.plusCounter();
    }

    onClickMinus() {
        action.minusCounter();
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.onClickPlus.bind(this)}>+1</button>
                    <button onClick={this.onClickMinus.bind(this)}>-1</button>
                </div>
            </div>
        );
    }
}
