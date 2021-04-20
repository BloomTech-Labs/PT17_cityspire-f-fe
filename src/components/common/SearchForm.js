import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchCityData } from '../../state/actions';
import { useHistory } from 'react-router-dom';
import { Row, Col, Input } from 'antd';

const ColStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  top: '20rem',
  zIndex: 99999,
};

const SearchStyle = {
  width: '35vw',
  marginLeft: '50px',
  minWidth: '20rem',
  maxWidth: '60rem',
  padding: '1rem',
  borderRadius: '15px',
};

const SearchForm = ({ fetchCityData }) => {
  const { push } = useHistory();

  const [searchValue, setSearchValue] = useState('');

  // Split search value right by the common
  // const splitSearchValue = searchValue.split(', ');

  // Set the split value to city and state
  // const cityAndState = {
  //   city: splitSearchValue[0],
  //   // state: splitSearchValue[1],
  // };

  const { Search } = Input;

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const onSubmit = () => {
    localStorage.setItem('cityAndState', searchValue);
    fetchCityData(searchValue);
    push(`/citySearch/${searchValue}`);
    setSearchValue('');
  };

  return (
    <Row>
      <Col span={12} offset={6} style={ColStyle}>
        <div>
          <Search
            placeholder="Ex. New York, NY"
            allowClear
            onSearch={() => onSubmit()}
            size="medium"
            style={SearchStyle}
            value={searchValue}
            onChange={handleChange}
          />
        </div>
      </Col>
    </Row>
  );
};

export default connect(null, { fetchCityData })(SearchForm);
