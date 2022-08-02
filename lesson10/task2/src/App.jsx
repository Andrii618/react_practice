import React, { Component } from 'react';

import './index.scss';

import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

const purshases = [
  { id: '2', name: 'iPad Pro', price: 799 },
  { id: '1', name: 'iPad Pro 2022', price: 1500 },
];

export default class App extends React.Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Ford',
    },
    products: purshases,
  };

  onChange = event => {
    const { name, value } = event.target;

    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const { userData } = this.state;

    return (
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart
            userName={userData.firstName}
            count={this.state.products.length}
            purshases={this.state.products}
          />
          <Profile userData={userData} onChange={this.onChange} />
        </main>
      </div>
    );
  }
}
