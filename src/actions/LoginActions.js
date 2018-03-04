import * as types from "../constants/LoginConstants";

export const showLogin = () => ({
  type: types.LOGIN_SHOW
})

export const hideLogin = () => ({
  type: types.LOGIN_HIDE
})
