export const satzungPageRoute = (errorLoading, loadModule) => ({
  path: '/satzung',
  name: 'Satzung',
  getComponent(nextState, cb) {
    import('containers/Pages/SatzungPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
