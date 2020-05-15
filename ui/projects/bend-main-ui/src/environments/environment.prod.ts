export const environment = {
  production: true,
  DEBUG_ENABLE: false,
  outlet: {
    NAVBAR: 'navbar',
    FOOTER: 'footer',
    CONTAINER_CONTAINER: 'container',
    CONTAINER_STRAIGHT: 'straight',
    CONTAINER_FLUID: 'container-fluid',
  },
  routes: {
    crud: {
      user_crud: {
        user_profile: 'bmu-crud/user-profile',
        user_view: 'bmu-crud/user-view'
      }
    }
  }
};
