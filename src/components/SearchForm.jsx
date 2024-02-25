// SearchForm.js
import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SearchForm = ({ timePeriod,setTimePeriod }) => {
  const handleChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <Box my={2} textAlign="center">
      <FormControl>
        <InputLabel>Time Period</InputLabel>
        <Select value={timePeriod} onChange={handleChange}>
          <MenuItem value="week">Last Week</MenuItem>
          <MenuItem value="2weeks">Last Two Weeks</MenuItem>
          <MenuItem value="month">Last Month</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
  );
};

export default SearchForm;
