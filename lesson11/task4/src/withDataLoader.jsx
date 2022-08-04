import React, { Component } from 'react';

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
          .then(res => res.json())
          .then(data => {
            this.setState({ data });
          });
      }

      render() {
        if (!this.state.data) {
          return null;
        }

        return <WrappedComponent data={this.state.data} />;
      }
    };
  };
}

export default withDataLoader;
