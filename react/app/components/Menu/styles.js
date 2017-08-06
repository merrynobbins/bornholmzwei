import { Link } from 'react-router';
import styled from 'styled-components';
import { color } from 'constants/styles';

const Button = styled.button`
  outline: medium none;
  width: 36px;
  height: 36px;
  background-color: ${color.burger.default};
  border-radius: 3px;
  padding: 7px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  transition: all 250ms;

  &:hover,
  &:active,
  &:focus {
    background-color: ${color.burger.hover};
  }
`;

const ButtonLine = styled.span`
  background-color: ${color.white};
  border-radius: 3px;
  flex: 1;

  & ~ & {
    margin-top: 5px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: ${color.white};
  box-shadow: 0 0 35px -10px ${color.black};
  border-radius: 5px;
  padding: 15px 20px;
  border: 1px solid ${color.copytext.default};
  position: absolute;
  left: 55px;
  top: 0;
`;

const StyledLink = styled(Link)`
  padding: 4px 0 2px;
  margin: 2px 0;

  & ~ & {
    border-top: 1px solid ${color.copytext.default};
  }
`;

const PrimaryLink = styled(StyledLink)`
  color: ${color.ci.default}
`;

const SecondaryLink = styled(StyledLink)`
  color: ${color.copytext.default}
`;

export {
  Button,
  ButtonLine,
  MenuWrapper,
  PrimaryLink,
  SecondaryLink,
};
