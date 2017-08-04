export const lageplanPageRoute = (errorLoading, loadModule) => ({
  path: '/lageplan',
  name: 'Lageplan',
  getComponent(nextState, cb) {
    import('containers/Pages/LageplanPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
