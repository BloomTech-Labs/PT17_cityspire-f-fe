import {
  FETCHING_RENTAL_START,
  FETCHING_RENTAL_SUCCESS,
  FETCHING_RENTAL_ERROR,
} from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  city: {},
};
export const rentalDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_RENTAL_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_RENTAL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        city: action.payload,
        error: '',
      };
    case FETCHING_RENTAL_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
