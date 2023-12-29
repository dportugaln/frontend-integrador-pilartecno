import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { setTitle } from '../../redux/appRedux';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PlacesList from '../../components/places/PlacesList';

import { AlertMsg } from '../../components/alert/alert';
import '../../App.css'; 


const Places = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Listado de sitios'));
  })

  return (
    <>
      <Grid containerclassName="animated-container" spacing={3}>
        <Grid item className="animated-grid" xs={12}>
          <Paper sx={{ p: 2 }} style={{ alignContent: 'center', alignItems: 'center' }}>
            
            <AlertMsg />

            <Button sx={{ backgroundColor: "#26647b ", "&:hover": { color: "#26647b", backgroundColor: "#f1f1f0"} }} variant="contained" onClick={() => navigate('/places/add')} > Agregar </Button>

          </Paper>
        </Grid>
      </Grid>

      <Grid containerclassName="animated-container" spacing={3} style={{ marginTop: '10px' }}>
        <Grid item className="animated-grid" xs={12}>
          <Paper sx={{ p: 2 }}>
            <PlacesList />
          </Paper>
        </Grid>
      </Grid>

    </>
  )
}

export default Places