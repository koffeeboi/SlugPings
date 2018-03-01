import * as types from "../constants/ChatConstants";

const initialState = {
  isChatOpen: false,
  isChannelOpen: false,
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

    case (types.CHAT_CHANNEL_SHOW):{
      return{
        ...state,
        isChannelOpen: true,
      }
    }

    case (types.CHAT_CHANNEL_HIDE):{
      return{
        ...state,
        isChannelOpen: false,
      }      
    }

    default:
      return state;
  }
}

export default chat;