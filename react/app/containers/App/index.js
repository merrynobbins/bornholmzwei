/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { color } from 'constants/styles';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from 'components/Header';
import Footer from 'components/Footer';

const
  // eslint-disable-next-line react/prop-types
  Column = ({ className, children }) => <Col sm={12} className={className}>{children}</Col>,
  AppColumn = styled(Column)`
    background-color: ${color.white};
    min-height: 100vh;
  `;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render = () => (
    <Grid>
      <Row>
        <AppColumn>
          <Header />
          {React.Children.toArray(this.props.children)}
          <Footer />
        </AppColumn>
      </Row>
    </Grid>
  );
}
