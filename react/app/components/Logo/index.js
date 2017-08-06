/**
*
* Logo
*
*/

import React from 'react';
import { Link } from 'react-router';
import IMAGE_LOGO from 'assets/images/header.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  zoom: 1;
`;

const Logo = () => (
  <Wrapper>
    <Link to="/">
      <img src={IMAGE_LOGO} alt="zur Startseite" />
    </Link>
  </Wrapper>
);

Logo.propTypes = {

};

export default Logo;
