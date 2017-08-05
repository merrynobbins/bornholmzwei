/**
*
* Cta
*
*/

import React from 'react';
import IMAGE_STAR from 'assets/images/star.png';
import { Wrapper, Star, Text } from './styles';

function Cta() {
  return (
    <Wrapper>
      <Star src={IMAGE_STAR} alt="" />
      <Text>Mach mit!</Text>
    </Wrapper>
  );
}

Cta.propTypes = {

};

export default Cta;
