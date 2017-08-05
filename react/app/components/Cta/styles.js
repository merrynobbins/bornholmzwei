import styled from 'styled-components';
import { color } from 'constants/styles';

const Wrapper = styled.div`
  position: absolute;
  bottom: 15px;
  z-index: 1;
  width: 120px;
  height: 120px;
  transform: rotate(-14deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Star = styled.img`
  width: 100%;
  position: absolute;
`;

const Text = styled.span`
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

export {
  Wrapper,
  Star,
  Text,
};
