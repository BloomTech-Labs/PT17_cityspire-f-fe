import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

import cityspireLogo from '../../assets/imgs/cityspireLogo.png';
import {
  Row,
  Col,
  Menu,
  Dropdown,
  Avatar,
  Button,
  Image,
  Input,
  Space,
  Divider,
} from 'antd';
import {
  UserOutlined,
  DownOutlined,
  SearchOutlined,
  AudioOutlined,
} from '@ant-design/icons';

const HeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.25rem 5vw',
  borderBottom: 'solid thin #eee',
  backgroundColor: 'white',
};

// BEGIN: SDH //
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

// END:  SDH

const Header = () => {
  const { authService, authState } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  const { push } = useHistory();

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
          localStorage.setItem('token', info.sub);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  const handleOnClick = id => {
    push(`/profile/${id}/dashboard`);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => handleOnClick(userInfo.sub)}>
        Pinned Cities
      </Menu.Item>
      <Menu.Item key="0" onClick={() => handleOnClick(userInfo.sub)}>
        Favorites
      </Menu.Item>
    </Menu>
  );

  // BEG: sdh
  const dropdown = (
    <Menu>
      <Menu.Item key="0">
        <a rel="noopener noreferrer" href="/login">
          Login
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.lambdaschool.com"
        >
          Create Account
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={() => authService.logout()}>
        Logout
      </Menu.Item>
    </Menu>
  );
  // END: sdh

  return (
    <Row style={HeaderStyle}>
      <Col>
        <a href="/">
          <Image
            preview={false}
            src={cityspireLogo}
            style={{ width: '120px' }}
          />
        </a>
      </Col>

      <Col>
        <Row>
          <Space size="large">
            <Dropdown overlay={menu} trigger={['click']}>
              <Space
                size="small"
                onClick={e => e.preventDefault()}
                style={{ cursor: 'pointer' }}
              >
                <Avatar size="large" icon={<UserOutlined />} />
                {userInfo ? userInfo.name : 'loading...'} <DownOutlined />
              </Space>
            </Dropdown>
            <Divider type="vertical" />
            <a href="/" style={{ color: 'grey' }}>
              <SearchOutlined
                style={{ cursor: 'pointer', fontSize: '1.15rem' }}
              />
            </a>
            <Divider type="vertical" />
            {/* BEG: sdh */}
            <Dropdown overlay={dropdown}>
              <a
                className="ant-dropdown-link"
                onClick={e => e.preventDefault()}
              >
                login <DownOutlined />
              </a>
            </Dropdown>
            {/* END: sdh */}
          </Space>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
