/*
 *
 * FruechteFuerFluechtlinge
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class FruechteFuerFluechtlingePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      Früchte für Flüchtlinge
      </div>
    );
  }
}

FruechteFuerFluechtlingePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(FruechteFuerFluechtlingePage);
