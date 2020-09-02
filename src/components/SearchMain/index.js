import styled from 'styled-components';
import FilterIcon from '../FilterIcon';

const SearchMain = styled.div`
  display: flex;
  background-color: #3a4042;

  & > ${FilterIcon} {
    width: 24px;
  }
`;

export default SearchMain;
