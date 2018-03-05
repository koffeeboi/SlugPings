import * as types from "../constants/ListingsConstants";

const initialState = {
  isListingsOpen: false,
  isListingInfoOpen: false,
  listingInfoID: null,
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

    case (types.LISTING_INFO_SHOW): {
      return {
        ...state,
        isListingInfoOpen: true,
      }
    }

    case (types.LISTING_INFO_HIDE): {
      return {
        ...state,
        isListingInfoOpen: false,
      }
    }

    case (types.LISTING_INFO_SET_ID): {
      return {
        ...state,
        listingInfoID: action.payload,
      }
    }

    default:
      return state;
  }
}

export default listings;