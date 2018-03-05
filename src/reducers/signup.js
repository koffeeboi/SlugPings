import * as types from "../constants/SignupConstants";

const initialState = {
  isSignupOpen: false,
};

const signup = (state = initialState, action) => {
  switch (action.type) {
    case (types.SIGNUP_HIDE): {
      return {
        ...state,
        isSignupOpen: false,
      }
    }

    case (types.SIGNUP_SHOW): {
      return {
        ...state,
        isSignupOpen: true,
      }
    }

    default:
      return state;
  }
}

export default signup;