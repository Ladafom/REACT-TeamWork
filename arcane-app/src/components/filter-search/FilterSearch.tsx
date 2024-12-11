import React, { useState, useCallback } from 'react'
import { useDebounce } from '../../hooks/useDebounse';
import { TextField } from '@mui/material';
import './style.css'

type FilterSearchProps = {
  onSearch: (query:string)=>void
  value: string
}

const FilterSearch = ({onSearch, value}:FilterSearchProps) => {

  const [filterSearchValue, setFilterSearchValue] = useState<string >(value || '')

  const onChangeDebounce = useCallback(
    useDebounce((v:string )=> onSearch(v), 600),
    [onSearch, value],
  )

  function onChanged(value:string) : void{
    onChangeDebounce(value)
    setFilterSearchValue(value)
  }

  return (
    <TextField
      label="Поиск"
      variant="outlined"
      value={filterSearchValue}
      name='search'
      onChange={(e)=>{onChanged(e.target.value)}}
      className='FilterSearch'
    />
  )
}

export default FilterSearch