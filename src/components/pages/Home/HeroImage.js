import React from 'react';
import losAngeles1 from '../../../assets/imgs/LosAngeles1.jpg';
import '../Home/Home.css';
import FadeInSection from '../../../utils/FadeIn';
import { Carousel } from 'antd';
import TypeIt from 'typeit-react';
import { arrow } from './PictureLinks';

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
  fontFamily: 'Barlow, sans-serif',
  fontSize: '65px',
  webkitTextStroke: '.5px black',
  textShadow: '2px 2px black',
};

const HeroImage = () => {
  return (
    <FadeInSection>
      <Carousel>
        <div style={carouselStyle}>
          <div style={imgContainer}>
            <img style={carouselPic} src={losAngeles1} alt="Los Angeles" />
            <h1 style={imgText}>
              <TypeIt
                element={'h1'}
                style={fontStyle}
                options={{ loop: true }}
                getBeforeInit={instance => {
                  instance
                    .pause(1000)
                    .type('Find your dream city')
                    .pause(850)
                    .delete(4)
                    .pause(650)
                    .type('school')
                    .pause(750)
                    .delete(6)
                    .pause(650)
                    .type('job')
                    .pause(1000)
                    .delete(3)
                    .pause(850)
                    .type('home')
                    .pause(5000);
                  return instance;
                }}
              />
              ;{/* <span style={fontStyle}>Find your dream city</span> */}
            </h1>
            <button className="btn-grad">Create Account</button>
            <div class="downArrow bounce">
              <img width="40" height="40" alt="" src={arrow} />
            </div>
          </div>
        </div>
      </Carousel>
    </FadeInSection>
  );
};

export default HeroImage;
