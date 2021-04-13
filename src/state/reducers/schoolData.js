import {
  FETCHING_SCHOOLDATA_START,
  FETCHING_SCHOOLDATA_SUCCESS,
  FETCHING_SCHOOLDATA_ERROR,
} from '../actions/schoolData';

const initialState = {
  isFetching: false,
  error: '',
  city: {},
};
export const schoolDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SCHOOLDATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_SCHOOLDATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: '',
      };
    case FETCHING_SCHOOLDATA_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
