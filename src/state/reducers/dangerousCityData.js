import {
  FETCHING_DANGEROUSCITY_START,
  FETCHING_DANGEROUSCITY_SUCCESS,
  FETCHING_DANGEROUSCITY_ERROR,
} from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  city: {},
};
export const dangerousCityDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DANGEROUSCITY_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_DANGEROUSCITY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        city: action.payload,
        error: '',
      };
    case FETCHING_DANGEROUSCITY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
