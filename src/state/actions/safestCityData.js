import axios from 'axios';

export const FETCHING_SAFESTCITY_START = 'FETCHINGFETCHING_SAFESTCITY_START';
export const FETCHING_SAFESTCITY_SUCCESS = 'FETCHING_SAFESTCITY_SUCCESS';
export const FETCHING_SAFESTCITY_ERROR = 'FETCHING_SAFESTCITY_ERROR';

export const fetchSafestCityData = cityInfo => {
  return async dispatch => {
    dispatch({ type: FETCHING_SAFESTCITY_START });

    try {
      const res = await axios.post(
        `https://cityscape-203.eba-ijacxhm2.us-east-1.elasticbeanstalk.com/api/get_data`,
        cityInfo
      );

      dispatch({
        type: FETCHING_SAFESTCITY_START,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: FETCHING_SAFESTCITY_ERROR, payload: err.detail });
    }
  };
};
