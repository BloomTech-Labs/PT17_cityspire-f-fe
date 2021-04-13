import axios from 'axios';

export const FETCHING_RENTAL_START = 'FETCHING_RENTAL_START';
export const FETCHING_RENTAL_SUCCESS = 'FETCHING_RENTAL_SUCCESS';
export const FETCHING_RENTAL_ERROR = 'FETCHING_RENTAL_ERROR';

export const fetchRentalData = rentalInfo => {
  return async dispatch => {
    dispatch({ type: FETCHING_RENTAL_START });

    try {
      const res = await axios.post(
        `https://cityscape-203.eba-ijacxhm2.us-east-1.elasticbeanstalk.com/api/get_data`,
        rentalInfo
      );

      dispatch({
        type: FETCHING_RENTAL_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: FETCHING_RENTAL_ERROR, payload: err.detail });
    }
  };
};
