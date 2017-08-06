/**
*
* Header
*
*/

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Menu from 'components/Menu';
import SelectFontSize from 'components/SelectFontSize';
import Logo from 'components/Logo';
import Headline from './Headline';
import Subheadline from './Subheadline';

const HeadlineWrapper = styled.div`
  zoom: 1;
`;

function Header() {
  return (
    <Grid>
      <Row>
        <Col xs={12} lg={10} lgOffset={1}>
          <Menu />
          <SelectFontSize />

          <HeadlineWrapper>
            <Headline>Bornholm-Zwei.de</Headline>
            <Subheadline>Da wächst was</Subheadline>
          </HeadlineWrapper>

          <Logo />
        </Col>
      </Row>
    </Grid>
  );
}

Header.propTypes = {

};

export default Header;
