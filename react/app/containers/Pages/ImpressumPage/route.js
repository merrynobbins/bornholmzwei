export const impressumPageRoute = (errorLoading, loadModule) => ({
  path: '/impressum',
  name: 'Impressum',
  getComponent(nextState, cb) {
    import('containers/Pages/ImpressumPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
