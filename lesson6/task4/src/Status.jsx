import React from 'react';

import Online from './Online';
import Offline from './Offline';

import './status.scss';

const Status = ({ isOnline }) => (
  <div className="status">{isOnline ? <Online /> : <Offline />}</div>
);

export default Status;
