export const datenschutzerklaerungPageRoute = (errorLoading, loadModule) => ({
  path: '/datenschutzerklaerung',
  name: 'Datenschutzerklärung',
  getComponent(nextState, cb) {
    import('containers/Pages/DatenschutzerklaerungPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
