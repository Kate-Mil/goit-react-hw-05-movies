import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;

  padding-top: 20px;
  padding-bottom: 20px;

  border-bottom: 2px solid #ececec;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
  height: 100%;
`;

export const Item = styled.li`
  font-size: 26px;
  font-weigth: 600;
  transition-property: color, transform;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.2);
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: #b63838;
    text-shadow: 2px 2px 4px rgba(64, 64, 64, 0.5),
      4px 4px 8px rgba(64, 64, 64, 0.3);
  }
`;
