import axios from 'axios';
export const FETCHING_CITY_START = 'FETCHING_CITY_START';
export const FETCHING_CITY_SUCCESS = 'FETCHING_CITY_SUCCESS';
export const FETCHING_CITY_ERROR = 'FETCHING_CITY_ERROR';
const url = 'https://pt17-cityspire-f.herokuapp.com';
export const fetchCityData = cityInfo => {
  console.log('CityInfo', cityInfo);
  return async dispatch => {
    dispatch({ type: FETCHING_CITY_START });
    try {
      const res = await axios.get(`${url}/citySearch/${cityInfo}`);
      dispatch({
        type: FETCHING_CITY_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: FETCHING_CITY_ERROR, payload: err.detail });
    }
  };
};
