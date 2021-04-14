// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

import { combineReducers } from 'redux';
import { cityDataReducer } from './cityData';
import { cityOperationsReducer } from './cityOperations';
import { rentalDataReducer } from './rentalData';
import { jobDataReducer } from './jobData';
import { weatherDataReducer } from './weatherData';
import { schoolDataReducer } from './schoolData';
import { safestCityDataReducer } from './safestCityData';
import { dangerousCityDataReducer } from './dangerousCityData';
import { citySearchDataReducer } from './citySearchData';

export const reducers = combineReducers({
  cityData: cityDataReducer,
  cityOperations: cityOperationsReducer,
  schoolData: schoolDataReducer,
  weatherData: weatherDataReducer,
  rentalData: rentalDataReducer,
  jobData: jobDataReducer,
  safestCityData: safestCityDataReducer,
  dangerousCityData: dangerousCityDataReducer,
  citySearchData: citySearchDataReducer,
});

//add
