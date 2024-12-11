import React, { useState } from 'react'
import { TextField, Select, FormControl, MenuItem, InputLabel } from '@mui/material';
import FilterYear from '../filter-year/FilterYear';
import FilterGenre from '../filter-genre/FilterGenre';
import FilterSearch from '../filter-search/FilterSearch';
import './style.css'

type FilterProps = {
  genresList: string[],
  onSearch: (query:string)=>void
}

//@todo сделать фильтр сложным компонентом

const Filter = ({genresList, onSearch }:FilterProps) => {

  return (
      <div className='Filter'>
        {/* <FilterSearch onSearch={onSearch}/>
        <FilterGenre genresList={genresList}/>
        <FilterYear/> */}
      </div>
  );
};

export default Filter;