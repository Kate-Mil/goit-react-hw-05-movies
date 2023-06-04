import styled from 'styled-components';

export const List = styled.ul`
  padding: 30px 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;

export const Img = styled.img`
  width: 200px;
  height: 300px;
  margin-bottom: 20px;
`;

export const CastTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 5px;
`;
