export const terminePageRoute = (errorLoading, loadModule) => ({
  path: '/termine',
  name: 'Termine',
  getComponent(nextState, cb) {
    import('containers/Pages/TerminePage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
