
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount
        };
    }

    increment = () => {
        this.setState(prev => ({
            count: prev.count + 1
        }));
    };

    decrement = () => {
        this.setState(prev => ({
            count: prev.count - 1
        }));
    };

    render() {
        return (
            <div className="card">
                <h3>Number Counter</h3>
                <p className="count">{this.state.count}</p>

                <div className="button-group">
                    <button onClick={this.decrement}>− Decrease</button>
                    <button onClick={this.increment}>+ Increase</button>
                </div>
            </div>
        );
    }
}

export default Counter;
