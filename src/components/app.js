import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
        <div className="flex-grid block-full-size">
            {this.props.children}
        </div>
    );
  }
}
