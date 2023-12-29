import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import PlaceCreateForm from "../../components/places/CreateForm";

const PlaceForm = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{p: 2}}>
          
          <PlaceCreateForm />
          
        </Paper>
      </Grid>
    </Grid>
  )
}

export default PlaceForm