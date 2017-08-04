export const fruechteFuerFluechtlingePageRoute = (errorLoading, loadModule) => ({
  path: '/fruechte-fuer-fluechtlinge',
  name: 'Früchte für Flüchtlinge',
  getComponent(nextState, cb) {
    import('containers/Pages/FruechteFuerFluechtlingePage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
