import React from 'react';

import '../Home/Home.css';
import InfoCard from './Cards';
import HeroImage from './HeroImage';
import AboutSection from './AboutSection';
import { Layout } from 'antd';
import { Header, Footer } from '../../common';

const { Content } = Layout;

function RenderHomePage() {
  return (
    <>
      <Header />
      <HeroImage />
      <AboutSection />
      <InfoCard />
      <Footer />
    </>
  );
}
export default RenderHomePage;
