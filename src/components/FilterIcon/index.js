import styled from 'styled-components';
import filterIcon from '../../assets/images/filter-icon.svg';

const FilterIcon = styled.img.attrs({
  src: filterIcon,
  alt: 'Icone da lista de filtros',
})`
  width: 40px;
`;

export default FilterIcon;
