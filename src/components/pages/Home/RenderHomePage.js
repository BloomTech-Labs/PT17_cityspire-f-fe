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
  height: '520px',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const carouselPic = {
  borderTop: '1px solid rgba(0, 0, 0, 0.534)',
  margin: '0 auto',
  height: '520px',
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
        <Carousel autoplaySpeed={5000}>
          <div style={carouselStyle}>
            <div style={imgContainer}>
              <img style={carouselPic} src={losAngeles1} alt="Los Angeles" />
              <h1 style={imgText}>
                <span style={fontStyle}>Find your dream city</span>
              </h1>
              <button className="btn-grad">Create Account</button>
            </div>
          </div>

          <div style={carouselStyle}>
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
          </div>
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

      {/* <Space
        size="large"
        align="center"
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '2%',
          textAlign: 'center',
        }}
      >
        {' '}
      </Space> */}

      <InfoCards />

      {/* <Content
        style={{ height: '85vh', marginTop: '-22rem', marginBottom: '0.03rem' }}
      >
        <SearchForm />
      </Content>

      <Space size="large" align="center">
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '1%',
            textAlign: 'center',
            fontSize: '2rem',
          }}
        >
          Searching for the perfect dream home but don't know where to start?
          You're in the right place! Let CitySpire lead you to the desires of
          your heart!
        </p>
        <Image
          preview={false}
          src={map}
          style={{
            width: '100%',
            height: '100x',
            marginBottom: '5%',
          }}
        />{' '}
      </Space>

      <a
        href="https://cityspire-states.netlify.app/"
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          background: 'navy',
          color: 'white',
          width: '30%',
          margin: 'auto 35%',
          marginBottom: '2%',
        }}
      >
        Learn more about US States
      </a>

      <Carousel
        autoplay
        style={{
          marginTop: '-2rem',
        }}
      >
        <div>
          <h3 style={contentStyle}>
            {' '}
            <Image className="Carousel" preview={false} src={city1} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="Carousel" preview={false} src={city2} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="Carousel" preview={false} src={city3} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="Carousel" preview={false} src={city4} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="Carousel" preview={false} src={city5} />
          </h3>
        </div>
      </Carousel>

      <Image
        preview={false}
        src={citylife}
        style={{ width: '100%', height: '100px' }}
      /> */}
      <Footer />
    </Layout>
  );
}
export default RenderHomePage;
