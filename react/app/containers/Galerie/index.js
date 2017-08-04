/*
 *
 * Galerie
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class Galerie extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

Galerie.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Galerie);
