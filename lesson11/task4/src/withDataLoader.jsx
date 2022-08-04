import React, { Component } from 'react';
import Spinner from './Spinner';

function withDataLoader(url) {
  return function newComp(WrappedComponent) {
    return class New extends Component {
      state = {
        data: null,
      };

      componentDidMount() {
        this.fetchUserData();
      }

      fetchUserData() {
        fetch(url)
          .then(res => {
            if (!res.ok) {
              throw new Error('data loading failed');
            }

            return res.json();
          })
          .then(data => {
            this.setState({ data });
          });
      }

      render() {
        if (!this.state.data) {
          return <Spinner size={60} />;
        }

        return <WrappedComponent data={this.state.data} />;
      }
    };
  };
}

export default withDataLoader;
