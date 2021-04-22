import React from 'react';
// import { MapboxGLMap } from '../../common';
import { Statistic, Row, Col, Card, PageHeader, Button } from 'antd';
import { PushpinFilled, EnvironmentFilled } from '@ant-design/icons';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  cityAnchor: {
    fontFamily: 'Barlow',
    textAlign: 'center',
    margin: '10px',
    borderRadius: '20px',
    cursor: 'pointer',
    boxShadow:
      '2px 2px 10px 3px ghostwhite, -2px -2px 10px 3px rgba(0,0,0,0.19)',
    '&:hover': {
      color: 'blue',
      backgroundColor: 'lightgrey',
    },
  },
}));
const StatisticStyle = {
  fontFamily: 'Barlow',
  fontSize: '1.5rem',
  textAlign: 'center',
};
const RowStyle = {
  margin: '3vw auto',
  padding: '0 5vw',
  maxWidth: '1366px',
};
const CardStyle = {
  fontFamily: 'Barlow',
  textAlign: 'center',
  margin: '10px',
  borderRadius: '20px',
  boxShadow: '2px 2px 10px 3px ghostwhite, -2px -2px 10px 3px rgba(0,0,0,0.19)',
};
const HeadStyle = {
  backgroundColor: 'ghostwhite',
  borderTopRightRadius: '20px',
  borderTopLeftRadius: '20px',
  borderBottom: '1px dotted #01336E',
};
const RenderCitySearchResults = ({
  cityData,
  handleSaveCity,
  handleOnCityClick,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Row
        style={{
          padding: '.25rem 5vw',
          backgroundColor: '#01336E',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Col>
          <PageHeader style={{ marginLeft: '-1.5rem' }}>
            <h1
              style={{
                marginLeft: '50px',
                fontWeight: 'bold',
                fontSize: '3.0rem',
                fontFamily: 'Barlow',
                color: 'white',
              }}
            >
              {cityData ? `${cityData.city}, ${cityData.state}` : 'loading...'}
            </h1>
          </PageHeader>
        </Col>
        <Row>
          <Col style={{ margin: '4px' }}>
            <Button
              style={{
                fontFamily: 'Barlow',
                background: '#F2C744',
                border: '#F2C744',
                width: '12vw',
                color: 'black',
              }}
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
              style={{
                fontFamily: 'Barlow',
                background: '#F2C744',
                border: '#F2C744',
                width: '12vw',
                color: 'black',
              }}
              type="primary"
              shape="round"
              size="large"
            >
              <EnvironmentFilled />
              View on Map
            </Button>
          </Col>
        </Row>
      </Row>
      {/* <MapboxGLMap lat={ cityData.latitude} long={cityData.longitude} /> */}
      <Row style={RowStyle} wrap="true">
        <Col xs={24} sm={12} md={6}>
          <Card headStyle={HeadStyle} style={CardStyle} title="Sunny Days/Year">
            <Statistic
              value={cityData.numberOfSunnyDays}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            headStyle={HeadStyle}
            style={CardStyle}
            title="Unemployment Rate"
          >
            <Statistic
              value={cityData.unemploymentRate}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card headStyle={HeadStyle} style={CardStyle} title="School Score">
            <Statistic
              value={cityData.schoolScore}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            headStyle={HeadStyle}
            style={CardStyle}
            title="Average Rental Price"
          >
            <Statistic
              value={cityData.avgRentalPrice}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card headStyle={HeadStyle} style={CardStyle} title="Population">
            <Statistic
              value={cityData.population}
              valueStyle={StatisticStyle}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            headStyle={HeadStyle}
            style={CardStyle}
            title="Dangerous Ranking"
          >
            <Statistic
              value={cityData.dangerousRanking}
              valueStyle={StatisticStyle}
              suffix="/ 100"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card headStyle={HeadStyle} style={CardStyle} title="Safety Ranking">
            <Statistic
              value={cityData.safetyRanking}
              valueStyle={StatisticStyle}
              suffix="/ 100"
            />
          </Card>
        </Col>
      </Row>
      <Row style={RowStyle} wrap="true">
        <Col xs={24}>
          <h1
            style={{
              color: '#01336E',
              margin: '20px',
              fontWeight: 'bold',
              fontFamily: 'Barlow',
              fontSize: '2.0rem',
            }}
          >
            Other Cities Like {cityData.city}...
          </h1>
          <br />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            className={classes.cityAnchor}
            onClick={() => handleOnCityClick(cityData.rec1)}
          >
            <Statistic value={cityData.rec1} valueStyle={StatisticStyle} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            className={classes.cityAnchor}
            onClick={() => handleOnCityClick(cityData.rec2)}
          >
            <Statistic value={cityData.rec2} valueStyle={StatisticStyle} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            className={classes.cityAnchor}
            onClick={() => handleOnCityClick(cityData.rec3)}
          >
            <Statistic value={cityData.rec3} valueStyle={StatisticStyle} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            className={classes.cityAnchor}
            onClick={() => handleOnCityClick(cityData.rec4)}
          >
            <Statistic value={cityData.rec4} valueStyle={StatisticStyle} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            className={classes.cityAnchor}
            onClick={() => handleOnCityClick(cityData.rec5)}
          >
            <Statistic value={cityData.rec5} valueStyle={StatisticStyle} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            className={classes.cityAnchor}
            onClick={() => handleOnCityClick(cityData.rec6)}
          >
            <Statistic value={cityData.rec6} valueStyle={StatisticStyle} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default RenderCitySearchResults;
