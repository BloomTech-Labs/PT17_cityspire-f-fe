import {
  FETCHING_SAFESTCITY_START,
  FETCHING_SAFESTCITY_SUCCESS,
  FETCHING_SAFESTCITY_ERROR,
} from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  city: {},
};
export const safestCityDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SAFESTCITY_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_SAFESTCITY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        city: action.payload,
        error: '',
      };
    case FETCHING_SAFESTCITY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
