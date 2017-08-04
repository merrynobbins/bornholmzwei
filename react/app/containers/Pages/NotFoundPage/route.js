export const notFoundPageRoute = (errorLoading, loadModule) => ({
  path: '*',
  name: 'notfound',
  getComponent(nextState, cb) {
    import('containers/Pages/NotFoundPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
