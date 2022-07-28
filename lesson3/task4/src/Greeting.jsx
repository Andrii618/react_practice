import React from 'react';
import calcAge from './calcAge';

const Greeting = props => (
  <div className="greeting">
    My name is {props.firstName} {props.lastName}. I&apos;m {calcAge(props.birthDate)} years old
  </div>
);

export default Greeting;
