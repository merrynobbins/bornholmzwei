/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import CTA from 'components/Cta';
import { FooterWrapper, ListWrapper, ListItem, ListSeparator } from './styles';

const StyledGrid = styled(Grid)`
  padding: 0;
`;

const StyledLink = styled(Link)`
  color: inherit !important;
`;

const Footer = () => (
  <FooterWrapper>
    <StyledGrid>
      <Row>
        <Col sm={1} />
        <Col sm={10}>
          <CTA />
          <ListWrapper>
            <ListItem><StyledLink to="/neuigkeiten">Neuigkeiten</StyledLink></ListItem>
            <ListItem><ListSeparator /><StyledLink to="/archiv">Archiv</StyledLink></ListItem>
            <ListItem><ListSeparator /><StyledLink to="/galerie">Galerie</StyledLink></ListItem>
            <ListItem><ListSeparator /><StyledLink to="/termine">Termine</StyledLink></ListItem>
            <ListItem><ListSeparator /><StyledLink to="/presse">Presse</StyledLink></ListItem>
            <ListItem><ListSeparator /><StyledLink to="/lageplan">Lageplan</StyledLink></ListItem>
            <ListItem><ListSeparator /><StyledLink to="/satzung">Satzung</StyledLink></ListItem>
            <ListItem><ListSeparator /><StyledLink to="/impressum">Impressum</StyledLink></ListItem>
            <ListItem><ListSeparator /><StyledLink to="/datenschutzerklaerung">Datenschutzerklärung</StyledLink></ListItem>
          </ListWrapper>
        </Col>
        <Col sm={1} />
      </Row>
    </StyledGrid>
  </FooterWrapper>
);

Footer.propTypes = {

};

export default Footer;
