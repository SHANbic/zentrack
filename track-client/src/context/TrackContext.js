import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};
const postTrack = dispatch => () => {};

export const { Provider, Track } = createDataContext(
  trackReducer,
  { fetchTracks, postTrack },
  []
);
