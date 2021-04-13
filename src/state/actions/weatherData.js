import axios from 'axios';

export const FETCHING_WEATHER_START = 'FETCHING_WEATHER_START';
export const FETCHING_WEATHER_SUCCESS = 'FETCHING_WEATHER_SUCCESS';
export const FETCHING_WEATHER_ERROR = 'FETCHING_WEATHER_ERROR';

export const fetchWeatherData = weatherInfo => {
  return async dispatch => {
    dispatch({ type: FETCHING_WEATHER_START });

    try {
      const res = await axios.post(
        `https://cityscape-203.eba-ijacxhm2.us-east-1.elasticbeanstalk.com/api/get_data`,
        weatherInfo
      );

      dispatch({
        type: FETCHING_WEATHER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: FETCHING_WEATHER_ERROR, payload: err.detail });
    }
  };
};
