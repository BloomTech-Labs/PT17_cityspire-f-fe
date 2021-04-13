import React from 'react';
import { Card, Row, Col } from 'antd';
import FadeInSection from '../../../utils/FadeIn';
import '../Home/Home.css';

const { Meta } = Card;

const InfoCards = () => {
  return (
    <div className="cardsContainer">
      <FadeInSection>
        <Row gutter={16}>
          <Col style={{ marginBottom: '40px' }} span={8}>
            <Card
              hoverable
              bodyStyle={{ border: '1px solid rgba(0, 0, 0, 0.334)' }}
              className="card"
              cover={
                <img
                  style={{ border: '1px solid rgba(0, 0, 0, 0.334)' }}
                  alt="example"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuek83NbzTG-vdS3_kRb93HPs2kDfS9AtgKg&usqp=CAU"
                />
              }
            >
              <h1
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Lato, sans-seriff',
                  fontSize: '20px',
                }}
              >
                Best Schools
              </h1>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              bodyStyle={{ border: '1px solid rgba(0, 0, 0, 0.334)' }}
              className="card"
              cover={
                <img
                  className="cardImg"
                  alt="example"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fBhrVSzrDrMcrUCJUzcUIv4XCRbIiEJVBQ&usqp=CAU"
                />
              }
            >
              <h1
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Lato, sans-seriff',
                  fontSize: '20px',
                }}
              >
                Safest Cities
              </h1>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              bodyStyle={{ border: '1px solid rgba(0, 0, 0, 0.334)' }}
              className="card"
              cover={
                <img
                  style={{ border: '1px solid rgba(0, 0, 0, 0.334)' }}
                  alt="example"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuek83NbzTG-vdS3_kRb93HPs2kDfS9AtgKg&usqp=CAU"
                />
              }
            >
              <h1
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Lato, sans-seriff',
                  fontSize: '20px',
                }}
              >
                Most Dangerous Cities
              </h1>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              bodyStyle={{ border: '1px solid rgba(0, 0, 0, 0.334)' }}
              className="card"
              cover={
                <img
                  style={{ border: '1px solid rgba(0, 0, 0, 0.334)' }}
                  alt="example"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuek83NbzTG-vdS3_kRb93HPs2kDfS9AtgKg&usqp=CAU"
                />
              }
            >
              <h1
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Lato, sans-seriff',
                  fontSize: '20px',
                }}
              >
                Top Job Markets
              </h1>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              bodyStyle={{ border: '1px solid rgba(0, 0, 0, 0.334)' }}
              className="card"
              cover={
                <img
                  style={{ border: '1px solid rgba(0, 0, 0, 0.334)' }}
                  alt="example"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuek83NbzTG-vdS3_kRb93HPs2kDfS9AtgKg&usqp=CAU"
                />
              }
            >
              <h1
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Lato, sans-seriff',
                  fontSize: '20px',
                }}
              >
                Average Rental Costs
              </h1>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              bodyStyle={{ border: '1px solid rgba(0, 0, 0, 0.334)' }}
              className="card"
              cover={
                <img
                  style={{ border: '1px solid rgba(0, 0, 0, 0.334)' }}
                  alt="example"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuek83NbzTG-vdS3_kRb93HPs2kDfS9AtgKg&usqp=CAU"
                />
              }
            >
              <h1
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Lato, sans-seriff',
                  fontSize: '20px',
                }}
              >
                Best Weather
              </h1>
            </Card>
          </Col>
        </Row>
      </FadeInSection>
    </div>
  );
};

export default InfoCards;
