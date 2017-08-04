// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import { archivPageRoute } from 'containers/Pages/ArchivPage/route';
import { bienenFuerDasVolkPageRoute } from 'containers/Pages/BienenFuerDasVolkPage/route';
import { datenschutzerklaerungPageRoute } from 'containers/Pages/DatenschutzerklaerungPage/route';
import { fruechteFuerFluechtlingePageRoute } from 'containers/Pages/FruechteFuerFluechtlingePage/route';
import { galeriePageRoute } from 'containers/Pages/GaleriePage/route';
import { geschichteUndGeschichtenPageRoute } from 'containers/Pages/GeschichteUndGeschichtenPage/route';
import { rootPageRoute, homePageRoute } from 'containers/Pages/HomePage/route';
import { impressumPageRoute } from 'containers/Pages/ImpressumPage/route';
import { lageplanPageRoute } from 'containers/Pages/LageplanPage/route';
import { neuigkeitenPageRoute } from 'containers/Pages/NeuigkeitenPage/route';
import { notFoundPageRoute } from 'containers/Pages/NotFoundPage/route';
import { pressePageRoute } from 'containers/Pages/PressePage/route';
import { satzungPageRoute } from 'containers/Pages/SatzungPage/route';
import { terminePageRoute } from 'containers/Pages/TerminePage/route';
import { unsereNaturPageRoute } from 'containers/Pages/UnsereNaturPage/route';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const
    { injectReducer, injectSagas } = getAsyncInjectors(store), // eslint-disable-line no-unused-vars
    args = [errorLoading, loadModule, injectReducer, injectSagas];

  return [
    rootPageRoute(...args),
    archivPageRoute(...args),
    bienenFuerDasVolkPageRoute(...args),
    datenschutzerklaerungPageRoute(...args),
    fruechteFuerFluechtlingePageRoute(...args),
    galeriePageRoute(...args),
    geschichteUndGeschichtenPageRoute(...args),
    homePageRoute(...args),
    impressumPageRoute(...args),
    lageplanPageRoute(...args),
    neuigkeitenPageRoute(...args),
    pressePageRoute(...args),
    satzungPageRoute(...args),
    terminePageRoute(...args),
    unsereNaturPageRoute(...args),
    notFoundPageRoute(...args),
  ];
}
