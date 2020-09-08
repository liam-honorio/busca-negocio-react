import styled from 'styled-components';
import IconFilter from '../IconFilter';

export const ServiceFilterStyle = styled.nav`
  background-color: #3a4042;
  display: flex;

  & > ${IconFilter} {
    margin-right: 16px;
  }
`;

export const Label = styled.p`
  font-family: 'Comfortaa', cursive;
  color: #fffcee;
  font-size: 20px;
`;
