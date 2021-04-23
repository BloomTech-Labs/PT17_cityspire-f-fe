import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';
import { SearchForm } from '../common';
import cityspireLogo from '../../assets/imgs/logo.png';
import { fetchSavedCity } from '../../state/actions';
import {
  Row,
  Col,
  Menu,
  Dropdown,
  Avatar,
  Image,
  Layout,
  Space,
  Divider,
} from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { accessToken } from 'mapbox-gl/dist/mapbox-gl-csp';
const { Content } = Layout;
const HeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.25rem 5vw',
  borderBottom: 'solid thin #0c110196',
  backgroundColor: '#01336E',
};

const Header = () => {
  const { authService } = useOktaAuth();
  const { oktaAuth, authState } = useOktaAuth();
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
    window.location.reload();
  };

  // BEG: sdh
  const menu = authState.isAuthenticated ? (
    <Menu>
      <Menu.Item key="0" onClick={() => handleOnClick(userInfo.sub)}>
        Pinned Cities
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={() => authService.logout()}>
        Logout
      </Menu.Item>
    </Menu>
  ) : (
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
    </Menu>
  );
  // END: sdh

  return (
    <Row style={HeaderStyle}>
      <Col>
        <a href="/">
          <Image
            className="logo"
            preview={false}
            src={cityspireLogo}
            style={{ width: '200px' }}
          />
        </a>
      </Col>
      {/* STARTED: sdh */}
      <Content
        style={{ height: '15px', marginTop: '-25rem', marginBottom: '18rem' }}
      >
        <SearchForm />
      </Content>
      {/* END: sdh */}
      <Col>
        <Row>
          <Space size="large">
            <Divider type="vertical" />
            <a href="/" className="mapText">
              Map View
            </a>
            <Divider type="vertical" />

            <Dropdown overlay={menu} trigger={['click']}>
              <Space
                size="small"
                onClick={e => e.preventDefault()}
                className="userName"
              >
                <Avatar size="large" icon={<UserOutlined />} />
                {userInfo ? (
                  userInfo.name
                ) : (
                  <a className="login" onClick={e => e.preventDefault()}>
                    Login
                  </a>
                )}
                <DownOutlined />
              </Space>
            </Dropdown>
          </Space>
        </Row>
      </Col>
    </Row>
  );
};
export default Header;
