export const galeriePageRoute = (errorLoading, loadModule) => ({
  path: '/galerie',
  name: 'Galerie',
  getComponent(nextState, cb) {
    import('containers/Pages/GaleriePage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
