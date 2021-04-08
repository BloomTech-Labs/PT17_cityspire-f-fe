import React from 'react';
import { Card } from 'antd';
import FadeInSection from '../../../utils/FadeIn';
import '../Home/Home.css';

const { Meta } = Card;

const InfoCards = () => {
  return (
    <div className="cardsContainer">
      <FadeInSection>
        <Card
          hoverable
          bodyStyle={{ border: '1px solid rgba(0, 0, 0, 0.534)' }}
          style={{ width: 240, left: '20px' }}
          cover={
            <img
              style={{ border: '1px solid rgba(0, 0, 0, 0.534)' }}
              alt="example"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuek83NbzTG-vdS3_kRb93HPs2kDfS9AtgKg&usqp=CAU"
            />
          }
        >
          <Meta title="Best Schools" description="www.bestschools.com" />
        </Card>
      </FadeInSection>
    </div>
  );
};

export default InfoCards;
