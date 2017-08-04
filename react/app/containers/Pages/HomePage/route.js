export const rootPageRoute = (errorLoading, loadModule) => ({
  path: '/',
  name: 'Home',
  getComponent(nextState, cb) {
    import('containers/Pages/HomePage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});

export const homePageRoute = (errorLoading, loadModule) => ({
  path: '/home',
  name: 'Home',
  getComponent(nextState, cb) {
    import('containers/Pages/HomePage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
