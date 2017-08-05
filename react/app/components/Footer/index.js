/**
*
* Footer
*
*/

import React from 'react';
import { Link } from 'react-router';
import CTA from 'components/Cta';
// import styled from 'styled-components';

function Footer() {
  return (
    <div>
      <CTA />

      <ul>
        <li><Link to="/neuigkeiten">Neuigkeiten</Link></li>
        <li><Link to="/archiv">Archiv</Link></li>
        <li><Link to="/galerie">Galerie</Link></li>
        <li><Link to="/termine">Termine</Link></li>
        <li><Link to="/presse">Presse</Link></li>
        <li><Link to="/lageplan">Lageplan</Link></li>
        <li><Link to="/satzung">Satzung</Link></li>
        <li><Link to="/impressum">Impressum</Link></li>
        <li><Link to="/datenschutzerklaerung">Datenschutzerklärung</Link></li>
      </ul>
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;
