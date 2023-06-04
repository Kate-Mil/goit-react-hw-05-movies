import styled from 'styled-components';
import { Container } from 'components/Section.styled';
import { Link } from 'react-router-dom';

export const ContainerWrapper = styled(Container)`
  display: flex;
  gap: 35px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #ececec;
`;

export const MainInfoBlock = styled.div`
  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const AdditionalInfoBlock = styled(Container)`
  > *:not(:last-child) {
    margin-bottom: 20px;
  }
  padding-bottom: 20px;
  border-bottom: 2px solid #ececec;
`;

export const GenresList = styled.ul`
  display: flex;
  flex-diraction: column;
  gap: 10px;
`;

export const AddInfoList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const AddInfoItem = styled.li``;

export const StyledLink = styled(Link)`
  font-size: 15px;
  color: #0000e6;
  border-bottom: none;

  :hover,
  :focus {
    border-bottom: 1px solid;
    border-image: #1000ff 1 0%;
  }
`;
