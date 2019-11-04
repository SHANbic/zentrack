import { useEffect, useState } from 'react';

import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subcriber = await watchPositionAsync(
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

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subcriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};
