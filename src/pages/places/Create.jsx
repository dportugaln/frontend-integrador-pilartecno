import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import PlaceCreateForm from "../../components/places/CreateForm";
import '../../App.css'; 

const PlaceForm = () => {
  return (
    <Grid containerclassName="animated-container" spacing={3}>
      <Grid item className="animated-grid" xs={12}>
        <Paper sx={{p: 2}}>
          
          <PlaceCreateForm />
          
        </Paper>
      </Grid>
    </Grid>
  )
}

export default PlaceForm