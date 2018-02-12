import * as types from "../constants/ChatConstants";

export const showChat = () => ({
  type: types.CHAT_SHOW
})

export const hideChat = () => ({
  type: types.CHAT_HIDE
})