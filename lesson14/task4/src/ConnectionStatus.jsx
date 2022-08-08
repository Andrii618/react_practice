import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const ConnectionStatus = () => {
  const [networkStatus, setNetworkStatus] = useState('online');

  const handleOnlineStatus = () => {
    setNetworkStatus('online');
  };

  const handleOfflineStatus = () => {
    setNetworkStatus('offline');
  };

  useEffect(() => {
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  });

  return (
    <div className={classNames('status', { status_offline: networkStatus === 'offline' })}>
      {networkStatus}
    </div>
  );
};

export default ConnectionStatus;
