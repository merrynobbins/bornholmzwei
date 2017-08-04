/*
 *
 * BornholmZweiLaedtEin
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class BornholmZweiLaedtEinPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      Bornholm II lädt ein
      </div>
    );
  }
}

BornholmZweiLaedtEinPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BornholmZweiLaedtEinPage);
