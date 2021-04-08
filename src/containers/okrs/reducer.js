import {
  FETCH_OKRS_REQUEST,
  FETCH_OKRS_SUCCESS,
  FETCH_OKRS_ERROR,
  SET_CATEGORY_FILTER
} from "./action-types";
let initialState = {
  loading: false,
  error: null,
  data: []
};

export const okrsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OKRS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_OKRS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      };
    case FETCH_OKRS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      };
    default:
      return state;
  }
};

export const filteredCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return [...action.data];
    default:
      return state;
  }
};
