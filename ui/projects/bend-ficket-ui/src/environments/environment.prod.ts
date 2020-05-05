export const commonResource = {
  HOST_URL: 'http://localhost:8788',
  CONTEXT: '/api/bend-ficket-app'
};

export const environment = {
  API_URL: commonResource.HOST_URL + commonResource.CONTEXT,
  production: true,
  DEBUG_ENABLE: false,
  outlet: {
    NAVBAR: 'navbar',
    FOOTER: 'footer',
    CONTAINER_CONTAINER: 'container',
    CONTAINER_STRAIGHT: 'straight',
    CONTAINER_FLUID: 'container-fluid',
  }
};
