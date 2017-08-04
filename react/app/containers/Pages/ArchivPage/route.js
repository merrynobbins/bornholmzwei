export const archivPageRoute = (errorLoading, loadModule) => ({
  path: '/archiv',
  name: 'Archiv',
  getComponent(nextState, cb) {
    import('containers/Pages/ArchivPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
});
