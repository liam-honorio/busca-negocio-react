import React from 'react';
import HeaderMain from './components/HeaderMain';
import LogoMain from './components/LogoMain';
import IconSearch from './components/IconSearch';
import SearchMain from './components/SearchMain';
import FilterIcon from './components/FilterIcon';
import Texto from './components/Texto';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>
      <SearchMain>
        <FilterIcon />
        <Texto>Guia de serviços</Texto>
      </SearchMain>
    </>
  );
}

export default App;
