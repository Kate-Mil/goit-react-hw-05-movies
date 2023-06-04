import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrandingList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const TrandingItem = styled.li`
  list-style: disc;
  list-style-type: disc;
  color: black;
`;

export const StyledLink = styled(Link)`
  font-size: 15px;
  color: #1000ff;
  border-bottom: none;

  :hover,
  :focus {
    border-bottom: 1px solid;
    border-image: #1000ff 1 0%;
  }
`;
