import React, { Component } from 'react';

import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';

export default class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="app">
        <OddNumbers title="Odd number" number={this.state.number} />
        <EvenNumbers title="Even number" number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
        <Numbers title="Just 17" number={17} />
      </div>
    );
  }
}
