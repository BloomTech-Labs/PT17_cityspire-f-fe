import {
  FETCHING_SEARCH_START,
  FETCHING_SEARCH_SUCCESS,
  FETCHING_SEARCH_ERROR,
} from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  city: {},
};
export const citySearchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SEARCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        city: action.payload,
        error: '',
      };
    case FETCHING_SEARCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
