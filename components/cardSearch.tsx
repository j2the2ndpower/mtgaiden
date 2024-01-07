import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Grid, TextField, Button } from '@mui/material';

import { SEARCH_CARDS } from '@graphql/queries';
import { Card } from '@interfaces';

function CardSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCards, { loading, error, data }] = useLazyQuery<{ searchCards: Card[] }>(SEARCH_CARDS);

  const handleSearch = () => {
    searchCards({ variables: { searchTerm } });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Search Cards"
          variant="outlined"
          fullWidth
          // Add input props and event handlers as needed
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Grid>
      {/* Add more Material-UI components and content as needed */}
    </Grid>
  );
}

export default CardSearch;