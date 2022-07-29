import React from 'react';

import './spinner.scss';

const Spinner = ({ size }) => (
  <span style={{ width: size, height: size }} className="spinner"></span>
);

export default Spinner;
