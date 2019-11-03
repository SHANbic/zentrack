import { useEffect, useState } from 'react';

import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubcriber] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          distanceInterval: 10,
          timeInterval: 1000
        },

        callback
      );
      setSubcriber(sub);
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubcriber(null);
    }
  }, [shouldTrack]);

  return [err];
};
