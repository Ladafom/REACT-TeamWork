import React, { useState } from 'react'
import { TextField } from '@mui/material';
import './style.css'

type FilterYearType = {
  onYear: (year:string)=> void
  value: string
}

const FilterYear = ({onYear, value}:FilterYearType ) => {

  return (
    <TextField
      label="Год"
      variant="outlined"
      value={value}
      name='year'
      onChange={(e)=>{onYear(e.target.value)}}
      className='FilterYear'
    />
  );
};

export default FilterYear;