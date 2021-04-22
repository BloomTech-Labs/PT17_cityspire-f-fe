import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCityData, pinCity, fetchSavedCity } from '../../../state/actions';
import RenderCitySearchResults from './RenderCitySearchResults';
import { Spin, notification } from 'antd';
import { Header, Footer } from '../../common/';
const spinStyle = {
  textAlign: 'center',
  position: 'absolute',
  top: '46%',
  width: '100%',
  margin: 'auto',
};
const CitySearchResultsContainer = ({
  cityData,
  fetchCityData,
  fetchSavedCity,
  pinCity,
  isFetching,
  isSaved,
}) => {
  const { push } = useHistory();
  const [cityAndState, setCityAndState] = useState(
    localStorage.getItem('cityAndState')
  );
  useEffect(() => {
    fetchCityData(cityAndState);
    console.log('cityandstate', cityAndState);
  }, [fetchCityData, cityAndState]);
  const savedNotification = () => {
    notification.open({
      message: 'City Pinned',
      description: `${cityData.city}, ${cityData.state}, has been pinned and can be viewed on the Pinned Cities page.`,
    });
  };
  const handleSaveCity = () => {
    const cityInfo = {
      city: cityData.city,
      state: cityData.state,
      population: cityData.population,
      dangerousRanking: cityData.dangerousRanking,
      safetyRanking: cityData.safetyRanking,
      avgRentalPrice: cityData.avgRentalPrice,
      unemploymentRate: cityData.unemploymentRate,
      numberOfSunnyDays: cityData.numberOfSunnyDays,
      schoolScore: cityData.schoolScore,
      latitude: cityData.latitude,
      longitude: cityData.longitude,
      rec1: cityData.rec1,
      rec2: cityData.rec2,
      rec3: cityData.rec3,
      rec4: cityData.rec4,
      rec5: cityData.rec5,
      rec6: cityData.rec6,
      profile_id: localStorage.getItem('token'),
    };
    pinCity(localStorage.getItem('token'), cityInfo);
    savedNotification();
    console.log('pinned city', cityInfo);
  };
  const handleOnCityClick = cityAndState => {
    localStorage.setItem('cityAndState', cityAndState);
    setCityAndState(localStorage.getItem('cityAndState'));
    push(`/citySearch/${cityAndState}`);
  };
  return (
    <>
      {isFetching ? (
        <div style={spinStyle}>
          <Spin tip="Loading..." size="large"></Spin>
        </div>
      ) : (
        <div>
          <Header />
          <RenderCitySearchResults
            cityData={cityData}
            handleSaveCity={handleSaveCity}
            isSaved={isSaved}
            handleOnCityClick={handleOnCityClick}
            city={cityAndState.city}
            // state={cityAndState.state}
          />
          <Footer />
        </div>
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    isFetching: state.cityData.isFetching,
    error: state.cityData.error,
    cityData: state.cityData.city,
    savedCities: state.cityOperations.savedCities,
    isSaved: state.cityOperations.isSaved,
  };
};
export default connect(mapStateToProps, {
  fetchCityData,
  fetchSavedCity,
  pinCity,
})(CitySearchResultsContainer);
