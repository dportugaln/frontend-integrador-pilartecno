import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { setTitle } from '../../redux/appRedux';
import { allPlaces } from '../../redux/actions/places/placesActions';
import '../../App.css';

import { Map } from '../../components/map/Map';

const PlacesMap = () => {

  const places = useSelector((state) => state.placesReducer.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Mapa'));
    dispatch(allPlaces());
  }, [])

  return (
    <>
      <Grid containerclassName="animated-container" spacing={1} style={{ marginTop: '10px' }}>
        <Grid item className="animated-grid" xs={12}>
          <Paper sx={{ p: 2 }}>
              
              <Map places={places}/>
              
          </Paper>
        </Grid>
      </Grid>

    </>
  )
}

export default PlacesMap