export const neuigkeitenPageRoute = (errorLoading, loadModule) => ({
  path: '/neuigkeiten',
  name: 'Neuigkeiten',
  getComponent(nextState, cb) {
    import('containers/Pages/NeuigkeitenPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
