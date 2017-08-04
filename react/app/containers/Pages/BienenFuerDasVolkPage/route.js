export const bienenFuerDasVolkPageRoute = (errorLoading, loadModule) => ({
  path: '/bienen-fuer-das-volk',
  name: 'Bienen für das Volk',
  getComponent(nextState, cb) {
    import('containers/Pages/BienenFuerDasVolkPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
