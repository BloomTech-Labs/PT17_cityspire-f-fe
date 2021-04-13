import React from 'react';

import { MapboxGLMap } from '../../common';


import { Statistic, Row, Col, Card, PageHeader, Button } from 'antd';

import {
  ThunderboltTwoTone,
  PushpinFilled,
  EnvironmentFilled,
} from '@ant-design/icons';

const StatisticStyle = {
  fontSize: '1.5rem',
  textAlign: 'center',
};

const RowStyle = {
  margin: '3vw auto',
  padding: '0 5vw',
  maxWidth: '1366px',
};

const CardStyle = {
  textAlign: 'center',
  margin: '10px',
  borderRadius: '20px',
  boxShadow: '2px 2px 10px 3px ghostwhite, -2px -2px 10px 3px rgba(0,0,0,0.19)',
};

const RenderCitySearchResults = ({
  citySearchData,
  handleSaveCity,
  handleOnCityClick,
}) => {
  return (
    <>
      <Row
        style={{
          padding: '.25rem 5vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'ghostwhite',
        }}
      >
        <Col>
          <PageHeader style={{ marginLeft: '-1.5rem' }}>
            <h1 style={{ fontSize: '1.5rem' }}>

              <EnvironmentFilled
                style={{ marginRight: '.5rem', color: 'rgb(24, 144, 255)' }}
              />
              {citySearchData ? `${citySearchData.city}, ${citySearch.city}` : 'loading...'}

            </h1>
          </PageHeader>
        </Col>
      </Row>

      {/* <MapboxGLMap lat={ citySearchData.latitude} long={citySearchData.longitude} /> */}

      <Row style={RowStyle} wrap="true">
        <Col xs={24} sm={12} md={6}>
          <Card style={CardStyle} title="Rental Price">
            <Statistic
              value={citySearchData.rental_price}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card style={CardStyle} title="Crime">
            <Statistic value={citySearchData.crime} valueStyle={StatisticStyle} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card style={CardStyle} title="Air Quality Index">
            <Statistic
              value={citySearchData.air_quality_index}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card style={CardStyle} title="Diversity Index">
            <Statistic
              value={citySearchData.diversity_index}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={CardStyle} title="Population">
            <Statistic
              value={citySearchData.population}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={CardStyle} title="Walkability">
            <Statistic
              value={citySearchData.walkability}
              valueStyle={StatisticStyle}
              suffix="/ 100"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={CardStyle} title="Livability">
            <Statistic
              value={citySearchData.livability}
              valueStyle={StatisticStyle}
              suffix="/ 100"
            />
          </Card>
        </Col>
      </Row>
      <Row style={RowStyle} justify="end">
        <Col style={{ margin: '4px' }}>
          <Button
            style={{ background: '#01336E', border: '#01336E' }}
            type="primary"
            shape="round"
            size="large"
            onClick={() => handleSaveCity()}
          >
            <PushpinFilled />
            Pin City
          </Button>
        </Col>
        <Col style={{ margin: '4px' }}>
          <Button
            style={{ background: '#01336E', border: '#01336E' }}
            type="primary"
            shape="round"
            size="large"
          >
            <EnvironmentFilled />
            View on Map
          </Button>
        </Col>
      </Row>

      <Row style={RowStyle} wrap="true">
        <Col xs={24}>
          <h1 style={{ fontSize: '1.2rem' }}>
            Other Cities Like {citySearchData.city}
          </h1>
        </Col>
        {citySearchData.recommendations &&
          citySearchData.recommendations.map(item => {
            return (
              <Col xs={24} sm={12} md={8} key={item.city}>
                <Card
                  style={{ fontSize: '1.2rem', cursor: 'pointer' }}
                  onClick={() =>
                    handleOnCityClick({ city: item.city, state: item.state })
                  }
                >
                  <ThunderboltTwoTone
                    twoToneColor="gold"
                    style={{ marginRight: '.25rem', fontSize: '1.35rem' }}
                  />
                  {item.city}, {item.state}
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
};
export default RenderCitySearchResults;
