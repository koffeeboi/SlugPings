import * as types from "../constants/ListingsConstants";

export const showListings = () => ({
  type: types.LISTINGS_SHOW,
});

export const hideListings = () => ({
  type: types.LISTINGS_HIDE,
});