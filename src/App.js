// App.js
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import RepoList from './components/RepoList';
import SearchForm from './components/SearchForm';

const App = () => {
  const [timePeriod, setTimePeriod] = useState('week');

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        GitHub Repo Explorer
      </Typography>
      <SearchForm setTimePeriod={setTimePeriod} />
      <RepoList timePeriod={timePeriod} />
    </Container>
  );
};

export default App;
