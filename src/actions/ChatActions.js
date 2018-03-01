import * as types from "../constants/ChatConstants";

export const showChat = () => ({
  type: types.CHAT_SHOW
})

export const hideChat = () => ({
  type: types.CHAT_HIDE
})

export const showChatChannel = () => ({
  type: types.CHAT_CHANNEL_SHOW
})

export const hideChatChannel = () => ({
  type: types.CHAT_CHANNEL_HIDE
})

