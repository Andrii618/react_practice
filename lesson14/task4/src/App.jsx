import React, { useEffect, useState } from 'react';
import ConnectionStatus from './ConnectionStatus';

const App = () => {
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

  return <ConnectionStatus isOnline={networkStatus} />;
};

export default App;
