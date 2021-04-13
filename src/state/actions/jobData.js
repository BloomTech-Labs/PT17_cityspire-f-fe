import axios from 'axios';

export const FETCHING_JOB_START = 'FETCHING_JOB_START';
export const FETCHING_JOB_SUCCESS = 'FETCHING_JOB_SUCCESS';
export const FETCHING_JOB_ERROR = 'FETCHING_JOB_ERROR';

export const fetchJobData = jobInfo => {
  return async dispatch => {
    dispatch({ type: FETCHING_JOB_START });

    try {
      const res = await axios.post(
        `https://cityscape-203.eba-ijacxhm2.us-east-1.elasticbeanstalk.com/api/get_data`,
        jobInfo
      );

      dispatch({
        type: FETCHING_JOB_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: FETCHING_JOB_ERROR, payload: err.detail });
    }
  };
};
