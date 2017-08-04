export const pressePageRoute = (errorLoading, loadModule) => ({
  path: '/presse',
  name: 'Presse',
  getComponent(nextState, cb) {
    import('containers/Pages/PressePage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
