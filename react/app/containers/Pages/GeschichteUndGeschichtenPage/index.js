/*
 *
 * GeschichteUndGeschichten
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class GeschichteUndGeschichtenPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      Geschichte und Geschichten
      </div>
    );
  }
}

GeschichteUndGeschichtenPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(GeschichteUndGeschichtenPage);
