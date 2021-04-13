import React from 'react';

import losAngeles1 from '../../../assets/imgs/LosAngeles1.jpg';
import carousel2 from '../../../assets/imgs/CarouselCity2.jpg';
import losangeles3 from '../../../assets/imgs/LosAngeles3.jpg';
import chicago3 from '../../../assets/imgs/Chicago3.jpg';
import '../Home/Home.css';
import FadeInSection from '../../../utils/FadeIn';
import InfoCards from '../Home/infoCards';

import { Layout, Image, Space, Carousel } from 'antd';

import { Header, Footer, SearchForm } from '../../common';

const { Content } = Layout;

const contentStyle = {
  height: '255px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#f0f2f5',
  margin: '2%',
};

const carouselStyle = {
  height: '577px',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const carouselPic = {
  borderTop: '1px solid rgba(0, 0, 0, 0.534)',
  margin: '0 auto',
  height: '577px',
  width: '100%',
  background: '#364d79',
};

const imgContainer = {
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
};

const imgText = {
  position: 'absolute',
  top: '200px',
  left: '0',
  width: '100%',
  maxWidth: '100%',
  textAlign: 'center',
};

const fontStyle = {
  color: 'white',
  fontFamily: 'Lato, sans-serif',
  fontSize: '60px',
  webkitTextStroke: '.5px black',
  textShadow: '2px 2px black',
};

function RenderHomePage() {
  return (
    <Layout className="layout">
      <Header />

      <FadeInSection>
        <Carousel autoplay autoplaySpeed={5000}>
          <div style={carouselStyle}>
            <div style={imgContainer}>
              <img style={carouselPic} src={losAngeles1} alt="Los Angeles" />
              <h1 style={imgText}>
                <span style={fontStyle}>Find your dream city</span>
              </h1>
              <button className="btn-grad">Create Account</button>
            </div>
          </div>

          {/* <div style={carouselStyle}>
            <div style={imgContainer}>
              <img style={carouselPic} src={carousel2} alt="City" />
              <h1 style={imgText}>
                <span style={fontStyle}>
                  Discover the perfect schools in the area
                </span>
              </h1>
            </div>
          </div>

          <div style={carouselStyle}>
            <div style={imgContainer}>
              <img style={carouselPic} src={chicago3} alt="Chicago" />
              <h1 style={imgText}>
                <span style={fontStyle}>
                  Too much crime? Then it's not worth your time
                </span>
              </h1>
            </div>
          </div>

          <div style={carouselStyle}>
            <div style={imgContainer}>
              <img style={carouselPic} src={losangeles3} alt="Los Angeles" />
              <h1 style={imgText}>
                <span style={fontStyle}>
                  Get all the information you need with CitySpire
                </span>
              </h1>
            </div>
          </div> */}
        </Carousel>
      </FadeInSection>

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

      <InfoCards />
      <Footer />
    </Layout>
  );
}
export default RenderHomePage;
