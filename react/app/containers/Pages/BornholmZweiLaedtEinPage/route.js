export const bornholmZweiLaedtEinPageRoute = (errorLoading, loadModule) => ({
  path: '/bornholm-zwei-laedt-ein',
  name: 'Bornholm II lädt ein',
  getComponent(nextState, cb) {
    import('containers/Pages/BornholmZweiLaedtEinPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
