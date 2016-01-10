"use strict";

import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter.jsx'

export default class App extends React.Component {

    constructor(props) {
      super(props);

      // state
      this.state = { counter: 0 };
    }

    // Domain logic
    handlePlus() {
        this.setState({ counter: this.state.counter + 1 });
    }

    handleMinus() {
        this.setState({ counter: this.state.counter - 1 });
    }

    // Rendering
    render() {
        return (
            <div>
                <Counter value={this.state.counter}
                         onClickPlus={e => this.handlePlus(e)}
                         onClickMinus={e => this.handleMinus(e)} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.body);
