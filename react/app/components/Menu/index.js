/**
*
* Menu
*
*/

import React from 'react';
import { PrimaryLink, SecondaryLink, Button, ButtonLine, MenuWrapper } from './styles';

class Menu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  getMenuContent = () => [
    <PrimaryLink to="/bornholm-zwei-laedt-ein" key={1}>Bornholm II lädt ein</PrimaryLink>,
    <PrimaryLink to="/unsere-natur" key={2}>Unsere Natur</PrimaryLink>,
    <PrimaryLink to="/geschichte-und-geschichten" key={3}>Geschichte und Geschichten</PrimaryLink>,
    <PrimaryLink to="/fruechte-fuer-fluechtlinge" key={4}>Früchte für Flüchtlinge</PrimaryLink>,
    <PrimaryLink to="/bienen-fuer-das-volk" key={5}>Bienen für das Volk</PrimaryLink>,
    <SecondaryLink to="/neuigkeiten" key={6}>Neuigkeiten</SecondaryLink>,
    <SecondaryLink to="/archiv" key={7}>Archiv</SecondaryLink>,
    <SecondaryLink to="/galerie" key={8}>Galerie</SecondaryLink>,
    <SecondaryLink to="/termine" key={9}>Termine</SecondaryLink>,
    <SecondaryLink to="/presse" key={10}>Presse</SecondaryLink>,
    <SecondaryLink to="/lageplan" key={11}>Lageplan</SecondaryLink>,
    <SecondaryLink to="/satzung" key={12}>Satzung</SecondaryLink>,
    <SecondaryLink to="/impressum" key={13}>Impressum</SecondaryLink>,
    <SecondaryLink to="/datenschutzerklaerung" key={14}>Datenschutzerklärung</SecondaryLink>,
  ];

  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  renderBurger = () => (
    <Button onClick={this.handleClick}>
      <ButtonLine />
      <ButtonLine />
      <ButtonLine />
    </Button>
  );

  renderMenu = () => (
    this.state.isActive
      ? <MenuWrapper>{this.getMenuContent()}</MenuWrapper>
      : null
  );

  render = () => (
    <div>
      {this.renderBurger()}
      {this.renderMenu()}
    </div>
  );
}

Menu.propTypes = {

};

export default Menu;
