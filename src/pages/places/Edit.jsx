import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import PlaceEditForm from "../../components/places/EditForm";

const PlaceForm = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{p: 2}}>
          
          <PlaceEditForm />
          
        </Paper>
      </Grid>
    </Grid>
  )
}

export default PlaceForm