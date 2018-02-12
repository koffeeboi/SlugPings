import * as types from "../constants/ListingsConstants";

const initialState = {
  isListingsOpen: false,
};

const listings = (state = initialState, action) => {
  switch (action.type) {
    case (types.LISTINGS_HIDE): {
      return {
        ...state,
        isListingsOpen: false,
      }
    }

    case (types.LISTINGS_SHOW): {
      return {
        ...state,
        isListingsOpen: true,
      }
    }

    default:
      return state;
  }
}

export default listings;