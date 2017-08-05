/**
*
* Cta
*
*/

import React from 'react';
import styled from 'styled-components';
import { color } from 'constants/styles';

import IMAGE_STAR from 'assets/images/star.png';

const
  Wrapper = styled.div`
    position: absolute;
    bottom: 15px;
    z-index: 1;
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
    padding: 10px 20px 0;
    text-align: center;
    color: ${color.white};
    font-family: BrandonPrintedOneWeb, sans-serif;
    font-size: 1.25em;
    text-align: center;
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
