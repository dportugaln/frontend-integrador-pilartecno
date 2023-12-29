import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import PlaceEditForm from "../../components/places/EditForm";
import '../../App.css'; 

const PlaceForm = () => {
  return (
    <Grid containerclassName="animated-container" spacing={3}>
      <Grid item className="animated-grid" xs={12}>
        <Paper sx={{p: 2}}>
          
          <PlaceEditForm />
          
        </Paper>
      </Grid>
    </Grid>
  )
}

export default PlaceForm