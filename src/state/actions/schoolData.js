import axios from 'axios';

export const FETCHING_SCHOOLDATA_START = 'FETCHING_SCHOOLDATA_START';
export const FETCHING_SCHOOLDATA_SUCCESS = 'FETCHING_SCHOOLDATA_SUCCESS';
export const FETCHING_SCHOOLDATA_ERROR = 'FETCHING_SCHOOLDATA_ERROR';

export const fetchSchoolData = schoolInfo => {
  return async dispatch => {
    dispatch({ type: FETCHING_SCHOOLDATA_START });

    try {
      const res = await axios.post(
        `https://cityscape-203.eba-ijacxhm2.us-east-1.elasticbeanstalk.com/api/get_data`,
        schoolInfo
      );

      dispatch({
        type: FETCHING_SCHOOLDATA_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: FETCHING_SCHOOLDATA_ERROR, payload: err.detail });
    }
  };
};
