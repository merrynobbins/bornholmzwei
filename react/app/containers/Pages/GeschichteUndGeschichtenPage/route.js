export const geschichteUndGeschichtenPageRoute = (errorLoading, loadModule) => ({
  path: '/geschichte-und-geschichten',
  name: 'Geschichte und Geschichten',
  getComponent(nextState, cb) {
    import('containers/Pages/GeschichteUndGeschichtenPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
