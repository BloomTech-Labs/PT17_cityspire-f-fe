import axios from 'axios';

export const FETCHING_DANGEROUSCITY_START = 'FETCHING_DANGEROUSCITY_START';
export const FETCHING_DANGEROUSCITY_SUCCESS = 'FETCHING_DANGEROUSCITY_SUCCESS';
export const FETCHING_DANGEROUSCITY_ERROR = 'FETCHING_DANGEROUSCITY_ERROR';

export const fetchDangerousCityData = cityInfo => {
  return async dispatch => {
    dispatch({ type: FETCHING_DANGEROUSCITY_START });

    try {
      const res = await axios.post(
        `https://cityscape-203.eba-ijacxhm2.us-east-1.elasticbeanstalk.com/api/get_data`,
        cityInfo
      );

      dispatch({
        type: FETCHING_DANGEROUSCITY_START,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: FETCHING_DANGEROUSCITY_ERROR, payload: err.detail });
    }
  };
};
