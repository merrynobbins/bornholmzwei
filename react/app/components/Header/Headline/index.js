/**
*
* Headline
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.h1`
  zoom: 1;
`;

const Headline = ({ children }) => (
  <Content>{children}</Content>
);

Headline.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Headline;
