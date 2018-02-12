import * as types from "../constants/SidebarConstants";

export const hideSidebar = () => ({
  type: types.SIDEBAR_HIDE,
});

export const showSidebar = () => ({
  type: types.SIDEBAR_SHOW,
});