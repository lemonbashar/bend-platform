export const commonResource = {
  HOST_URL: 'http://localhost:8788',
  CONTEXT: '/api/bend-main-app',
  FICKET_CONTEXT: '/api/bend-ficket-app'
};

export const BendCoreConstants = {
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
    TOKEN_LIFETIME: 'TOKEN_LIFETIME',
    routingDatabase: {
      REGISTRY_TYPE: 'REGISTRY_TYPE',
      REGISTRY_VALUE: 'REGISTRY_VALUE',
      detectionTypes: {
        CLUSTER_KEY: 'CLUSTER_KEY'
      }
    },
    lang: {
      DEFAULT_LANG_KEY: 'DEF-LANG-KEY',
      USE_LANG_KEY: 'USE-LANG-KEY'
    }
  },
  jwt: {
    JSON_WEB_TOKEN: 'Json-Web-Token',
    REFRESHED_JSON_WEB_TOKEN: 'Refreshed-Json-Web-Token'
  },
  neighbourBaseUrls: {
    BEND_MAIN_APP: commonResource.HOST_URL + commonResource.CONTEXT,
    BEND_FICKET_APP: commonResource.HOST_URL + commonResource.FICKET_CONTEXT
  }
};
