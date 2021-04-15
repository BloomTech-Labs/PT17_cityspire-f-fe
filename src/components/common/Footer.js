import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <footer
      style={{
        backgroundColor: '#01336E',
        textAlign: 'center',
        padding: '1rem',
        borderTop: 'solid thin #0C1101',
        fontFamily: 'Barlow, sans-serif',
        color: 'white',
      }}
    >
      Cityspire ©{date} Created by Labspt17-cityspire-f
    </footer>
  );
};

export default Footer;
