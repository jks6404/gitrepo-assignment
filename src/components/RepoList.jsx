// RepoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';

const RepoList = ({ timePeriod }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.github.com/search/repositories?q=created:>${getDate(timePeriod)}&sort=stars&order=desc`);
        setRepos(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [timePeriod]);

  const getDate = (period) => {
    const today = new Date();
    const cutoffDate = new Date(today);

    if (period === 'week') {
      cutoffDate.setDate(cutoffDate.getDate() - 7);
    } else if (period === '2weeks') {
      cutoffDate.setDate(cutoffDate.getDate() - 14);
    } else if (period === 'month') {
      cutoffDate.setMonth(cutoffDate.getMonth() - 1);
    }

    return cutoffDate.toISOString().split('T')[0];
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {repos.length > 0 ? (
            <List>
              {repos.map((repo) => (
                <ListItem key={repo.id} button component="a" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <ListItemAvatar>
                    <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={repo.name}
                    secondary={`Stars: ${repo.stargazers_count} | Issues: ${repo.open_issues_count} | Owner: ${repo.owner.login}`}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body1" align="center">
              No repositories found.
            </Typography>
          )}
        </>
      )}
    </>
  );
};

export default RepoList;
