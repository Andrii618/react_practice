import React from 'react';
import classNames from 'classnames';

const ConnectionStatus = ({ isOnline }) => (
  <div className={classNames('status', { status_offline: isOnline === 'offline' })}>
    {isOnline === 'online' ? 'Online' : 'Offline'}
  </div>
);

export default ConnectionStatus;
