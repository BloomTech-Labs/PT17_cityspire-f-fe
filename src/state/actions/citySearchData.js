import axios from 'axios';

export const FETCHING_SEARCH_START = 'FETCHING_SEARCH_START';
export const FETCHING_SEARCH_SUCCESS = 'FETCHING_SEARCH_SUCCESS';
export const FETCHING_SEARCH_ERROR = 'FETCHING_SEARCH_ERROR';

export const fetchSearchData = searchInfo => {
  return async dispatch => {
    dispatch({ type: FETCHING_SEARCH_START });

    try {
      const res = await axios.post(
        `https://cityscape-203.eba-ijacxhm2.us-east-1.elasticbeanstalk.com/api/get_data`,
        searchInfo
      );

      dispatch({
        type: FETCHING_SEARCH_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: FETCHING_SEARCH_ERROR, payload: err.detail });
    }
  };
};
