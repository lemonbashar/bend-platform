export const commonResource = {
  HOST_URL: 'http://localhost:8788',
  CONTEXT: '/api/bend-main-app'
};

export const environment = {
  production: true,
  API_URL: commonResource.HOST_URL + commonResource.CONTEXT,
  DEBUG_ENABLE : true,
  cookies: {
    ACCOUNT_INFO: 'ACCOUNT_INFO',
    TOKEN: 'TOKEN',
    AUTHENTICATION_STATE: 'AUTHENTICATION_STATE',
    AUTHORITIES: 'AUTHORITIES',
    lifetime: {
      TOKEN_LIFETIME: 3600000,
      TOKEN_LIFETIME_FOR_REMEMBER_ME: 7200000
    },
    TOKEN_LIFETIME: 'TOKEN_LIFETIME'
  },
  jwt: {
    JSON_WEB_TOKEN: 'Json-Web-Token',
    REFRESHED_JSON_WEB_TOKEN: 'Refreshed-Json-Web-Token'
  }
};
