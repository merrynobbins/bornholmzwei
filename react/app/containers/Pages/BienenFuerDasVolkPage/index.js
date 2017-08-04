/*
 *
 * BienenFuerDasVolk
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class BienenFuerDasVolkPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      Bienen für das Volk
      </div>
    );
  }
}

BienenFuerDasVolkPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BienenFuerDasVolkPage);
