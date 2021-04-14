import React from 'react';

import '../Home/Home.css';
import FadeInSection from '../../../utils/FadeIn';

const AboutSection = () => {
  return (
    <FadeInSection>
      <div className="headerContainer">
        <div className="header">
          <h1 className="perfect">
            Find your fit - In the perfect neighborhood
          </h1>
          <br />
          <p>
            Looking for a new city to call your home? CitySpire gives you a
            simple way to find essential information on cities all around the
            country.
            <br /> <br />
            Our tools allow you to see metrics such as crime rate, school
            ratings, average weather and more!
          </p>
        </div>
      </div>
    </FadeInSection>
  );
};

export default AboutSection;
