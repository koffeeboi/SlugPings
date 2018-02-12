import * as types from "../constants/ChatConstants";

const initialState = {
  isChatOpen: false,
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case (types.CHAT_SHOW): {
      return {
        ...state,
        isChatOpen: true,
      }
    }

    case (types.CHAT_HIDE): {
      return {
        ...state,
        isChatOpen: false,
      }
    }

    default:
      return state;
  }
}

export default chat;