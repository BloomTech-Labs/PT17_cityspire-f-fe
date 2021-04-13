import React from 'react';
// import { MapboxGLMap } from '../../common';

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
  cityData,
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
              {cityData.city
                ? `${cityData.city.city}, ${cityData.city.state}`
                : 'Loading...'}
            </h1>
          </PageHeader>
        </Col>
      </Row>

      {/* <MapboxGLMap lat={cityData.latitude} long={cityData.longitude} /> */}

      <Row style={RowStyle} wrap="true">
        <Col xs={24} sm={12} md={6}>
          <Card style={CardStyle} title="Rental Price">
            <Statistic
              value={cityData.rental_price}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card style={CardStyle} title="Crime">
            <Statistic value={cityData.crime} valueStyle={StatisticStyle} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card style={CardStyle} title="Air Quality Index">
            <Statistic
              value={cityData.air_quality_index}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card style={CardStyle} title="Diversity Index">
            <Statistic
              value={cityData.diversity_index}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={CardStyle} title="Population">
            <Statistic
              value={cityData.population}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={CardStyle} title="Walkability">
            <Statistic
              value={cityData.walkability}
              valueStyle={StatisticStyle}
              suffix="/ 100"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={CardStyle} title="Livability">
            <Statistic
              value={cityData.livability}
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
            Other Cities Like {cityData.city}
          </h1>
        </Col>
        {cityData.recommendations &&
          cityData.recommendations.map(item => {
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
