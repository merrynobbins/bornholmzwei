/**
*
* Cta
*
*/

import React from 'react';
import styled from 'styled-components';
import styles from 'constants/styles';

import IMAGE_STAR from 'assets/images/star.png';

const
  { color } = styles,
  Wrapper = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    transform: rotate(-14deg);
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Star = styled.img`
    width: 100%;
    position: absolute;
  `,
  Text = styled.span`
    position: relative;
    z-index: 1;
    flex: 1;
    text-align: center;
    color: ${color.white};
  `;

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
