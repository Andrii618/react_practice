import React, { Component } from 'react';

import './form.scss';

export default class UserForm extends Component {
  state = {
    name: '',
    student: '',
    occupation: '',
    about: '',
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  render() {
    return (
      <form
        className="login-form"
        onSubmit={() => {
          this.props.onSubmit(this.state);
        }}
      >
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            onChange={this.onInputChange}
            value={this.state.name}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
            onChange={this.onInputChange}
            value={this.state.student}
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            className="form-input"
            onChange={this.onInputChange}
            value={this.state.occupation}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            name="about"
            className="form-input"
            onChange={this.onInputChange}
            value={this.state.about}
          ></textarea>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
