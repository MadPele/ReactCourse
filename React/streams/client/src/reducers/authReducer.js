const INITIAL_STATE = {
  isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...action, isSignedIn: true };
    case "SIGN_OUT":
      return { ...action, isSignedIn: false };
    default:
      return state;
  }
};
