import {
  FETCH_OKRS_REQUEST,
  FETCH_OKRS_SUCCESS,
  FETCH_OKRS_ERROR,
  SET_CATEGORY_FILTER
} from "./action-types";

export const fetchOkrsRequest = () => ({
  type: FETCH_OKRS_REQUEST
});
export const fetchOkrsSuccess = (payload) => ({
  type: FETCH_OKRS_SUCCESS,
  payload
});
export const fetchOkrsError = (payload) => ({
  type: FETCH_OKRS_ERROR,
  payload
});
export const setCategoryFilter = (payload) => ({
  type: SET_CATEGORY_FILTER,
  payload
});
