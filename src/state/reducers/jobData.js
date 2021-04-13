import {
  FETCHING_JOB_START,
  FETCHING_JOB_SUCCESS,
  FETCHING_JOB_ERROR,
} from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  city: {},
};
export const jobDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_JOB_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_JOB_SUCCESS:
      return {
        ...state,
        isFetching: false,
        city: action.payload,
        error: '',
      };
    case FETCHING_JOB_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
