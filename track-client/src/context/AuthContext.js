import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signIn = dispatch => {
  return ({ email, password }) => {
    //api request
    //success => modify state
    //failure => error message
  };
};

const signUp = dispatch => {
  return ({ email, password }) => {
    //api request
    //success => modify state
    //failure => error message
  };
};

const signOut = dispatch => {
  return () => {
    // kill token
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { isSignedIn: false }
);
