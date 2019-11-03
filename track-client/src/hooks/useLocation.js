import { useEffect, useState } from 'react';

import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from 'expo-location';

const useLocation = callback => {
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          distanceInterval: 10,
          timeInterval: 1000
        },
        callback
      );
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [err];
};

export default useLocation;
