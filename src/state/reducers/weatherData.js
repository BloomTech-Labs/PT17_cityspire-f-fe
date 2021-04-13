import {
  FETCHING_WEATHER_START,
  FETCHING_WEATHER_SUCCESS,
  FETCHING_WEATHER_ERROR,
} from '../actions/weatherData';

const initialState = {
  isFetching: false,
  error: '',
  city: {},
};
export const weatherDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_WEATHER_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: '',
      };
    case FETCHING_WEATHER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
