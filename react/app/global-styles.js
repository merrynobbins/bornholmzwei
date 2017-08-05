import { injectGlobal } from 'styled-components';
import { color } from 'constants/styles';

import FONT_BRANDON_EOT from 'assets/fonts/Brandon_Printed_OneWeb.eot';
import FONT_BRANDON_WOFF from 'assets/fonts/Brandon_Printed_OneWeb.woff';

import IMAGE_BACKGROUND from 'assets/images/holz.jpg';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Oxygen:300,400,700);

  @font-face {
    font-family: BrandonPrintedOneWeb;
    src: url(${FONT_BRANDON_EOT}) format('eot'),
         url(${FONT_BRANDON_WOFF}) format('woff');
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 500;
    color: ${color.copytext.default};
    background: url(${IMAGE_BACKGROUND}) fixed no-repeat 0 0 transparent;
    background-size: cover;
  }
`;
