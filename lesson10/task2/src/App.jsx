import React, { Component } from 'react';

import './index.scss';

import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

const purshases = [
  { id: '2', name: 'iPad Pro', price: 799 },
  { id: '1', name: 'iPad Pro 2022', price: 1500 },
];

export default class App extends Component {
  state = {
    userData: { firstName: 'Andrii', lastName: 'Shevchuk' },
    products: purshases,
  };

  onChange = event => {
    this.setState({
      userData: { ...this.state.userData, [event.target.name]: event.target.value },
    });
  };

  render() {
    const data = this.state.userData;

    return (
      <div className="page">
        <h1 className="title">
          Hello, {data.firstName} {data.lastName}
        </h1>
        <main className="content">
          <ShoppingCart
            userName={data.firstName}
            count={this.state.products.length}
            purshases={this.state.products}
          />
          <Profile userData={data} onChange={this.onChange} />
        </main>
      </div>
    );
  }
}
