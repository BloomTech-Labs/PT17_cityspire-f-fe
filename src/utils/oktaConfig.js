const config = {
  issuer: 'https://auth.lambdalabs.dev/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa18is3355KlyP5C4x7',
  pkce: true,
  scopes: ['openid', 'email', 'profile'],
};

export { config };
