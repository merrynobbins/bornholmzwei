export const unsereNaturPageRoute = (errorLoading, loadModule) => ({
  path: '/unsereNatur',
  name: 'Unsere Natur',
  getComponent(nextState, cb) {
    import('containers/Pages/UnsereNaturPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
