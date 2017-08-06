/**
*
* Subheadline
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.h2`
  zoom: 1;
`;

const Subheadline = ({ children }) => (
  <Content>{children}</Content>
);

Subheadline.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Subheadline;
