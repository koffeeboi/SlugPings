import * as types from "../constants/SidebarConstants";

const initialState = {
  isSidebarOpen: true,
};

const sidebar = (state = initialState, action) => {
  switch (action.type) {
    case (types.SIDEBAR_HIDE): {
      return {
        ...state,
        isSidebarOpen: false,
      }
    }

    case (types.SIDEBAR_SHOW): {
      return {
        ...state,
        isSidebarOpen: true,
      }
    }

    default:
      return state;
  }
}

export default sidebar;