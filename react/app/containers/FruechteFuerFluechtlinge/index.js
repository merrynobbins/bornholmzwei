/*
 *
 * FruechteFuerFluechtlinge
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class FruechteFuerFluechtlinge extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

FruechteFuerFluechtlinge.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(FruechteFuerFluechtlinge);
