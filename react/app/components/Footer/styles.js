import styled from 'styled-components';
import { color, typography } from 'constants/styles';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;
  position: relative;
  bottom: 0;
  font-size: ${typography.fontSize.navigation};
  font-weight: ${typography.fontWeight.bold};
  color: ${color.copytext.default};
  height: 50px;
  line-height: 50px;
  background-color: ${color.white};
`;

const ListItem = styled.li`
  display: inline-block;
`;

const ListSeparator = styled.span`
  display: inline-block;

  &::before {
    content: "/";
    margin: 0 4px 0 5px;
  }
`;

export {
  FooterWrapper,
  ListWrapper,
  ListItem,
  ListSeparator,
};
