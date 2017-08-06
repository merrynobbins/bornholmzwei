/**
*
* SelectFontSize
*
*/

import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { color, typography } from 'constants/styles';

const Wrapper = styled.div`
  background-color: ${rgba(color.ci.default, 0.5)};
  padding: 6px 10px 4px;
  border-radius: 3px;
  color: ${rgba(color.white, 0.5)};
  transition: 250ms all;
  font-size: ${typography.fontSize.normal};
  display: inline-block;

  &:hover {
    background-color: ${color.ci.default};
    color: ${color.white};
  }
`;

const Letter = styled.span`
  vertical-align: middle;
  display: inline-block;
  line-height: 30px;
  cursor: pointer;

  & ~ & {
    margin-left: 5px;
  }

  &:hover,
  &:active,
  &:focus {
    color: ${color.copytext.hover};
  }
`;

const LetterSmall = styled(Letter)`
  font-size: 12px;
`;

const LetterMedium = styled(Letter)`
  font-size: 16px;
`;

const LetterLarge = styled(Letter)`
  font-size: 20px;
  margin-top: -1px;
`;


function SelectFontSize() {
  return (
    <Wrapper>
      <LetterSmall>A</LetterSmall>
      <LetterMedium>A</LetterMedium>
      <LetterLarge>A</LetterLarge>
    </Wrapper>
  );
}

SelectFontSize.propTypes = {

};

export default SelectFontSize;
