import * as types from "../constants/LoginConstants";

const initialState = {
  isLoginOpen: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case (types.LOGIN_HIDE): {
      return {
        ...state,
        isLoginOpen: false,
      }
    }

    case (types.LOGIN_SHOW): {
      return {
        ...state,
        isLoginOpen: true,
      }
    }
    default:
      return state;
  }
}

export default login;