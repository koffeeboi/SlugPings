import * as types from "../constants/ListingsConstants";

export const showListings = () => ({
  type: types.LISTINGS_SHOW,
});

export const hideListings = () => ({
  type: types.LISTINGS_HIDE,
});

export const showListingInfo = () => ({
  type: types.LISTING_INFO_SHOW,
})

export const hideListingInfo = () => ({
  type: types.LISTING_INFO_HIDE,
})

export const setListingInfoID = (id) => ({
  type: types.LISTING_INFO_SET_ID,
  payload: id,
})