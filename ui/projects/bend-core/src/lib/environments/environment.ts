export const commonResource = {
  HOST_URL: 'http://localhost:8788',
  CONTEXT: '/api/bend-main-app'
};

export const environment = {
  production: true,
  API_URL: commonResource.HOST_URL + commonResource.CONTEXT,
  DEBUG_ENABLE : true,
  cache: {
    ACCOUNT_INFO: 'ACCOUNT_INFO',
    TOKEN: 'TOKEN',
    AUTHENTICATION_STATE: 'AUTHENTICATION_STATE',
    AUTHORITIES: 'AUTHORITIES'
  }

};
