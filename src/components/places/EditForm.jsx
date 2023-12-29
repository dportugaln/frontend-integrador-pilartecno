import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';
import { getPlace, updatePlace } from '../../api';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAlertOpen, setOperationResult } from '../../redux/appRedux';
import { getPlaceId, editPlace } from '../../redux/actions/places/placesActions';
import { useNavigate } from 'react-router-dom';
import { AlertMsg } from '../alert/alert';

const EditForm = (props) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const place = useSelector((state) => state.placesReducer.place)
  const operationResult = useSelector((state) => state.app.operationResult);
  const dispatcher = useDispatch();

  const [imageSource, setImageSource] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLR0uw5vGaFyZAEKskr8KKioOYvV4bzdLIHWk1QDvrzTZL4rgYv8V03ZfTTVuklFw7QBA&usqp=CAU')

  const idFieldRef = useRef();
  const nameFieldRef = useRef();
  const addressFieldRef = useRef();
  const emailFieldRef = useRef();
  const phoneFieldRef = useRef();
  const latitudeFieldRef = useRef();
  const longitudeFieldRef = useRef();
  const urlImgFieldRef = useRef();

  useEffect(() => {
    dispatcher(setAlertOpen(false));
    dispatcher(setOperationResult(0));
    dispatcher(getPlaceId(id))
  }, [dispatcher])

  useEffect(() => {
    if (operationResult === 1)
      navigate('/places');
  }, [operationResult]);

  useEffect(() => {
    idFieldRef.current.value = place ? place._id : '';
    nameFieldRef.current.value = place ? place.name : '';
    addressFieldRef.current.value = place ? place.address : '';
    phoneFieldRef.current.value = place ? place.phone : '';
    emailFieldRef.current.value = place ? place.email : '';
    latitudeFieldRef.current.value = place.location ? place.location.latitude : '';
    longitudeFieldRef.current.value = place.location ? place.location.longitude : '';
    urlImgFieldRef.current.value = place.URL_img ? place.URL_img[0] : '';
  }, [place]);

  const _editPlace = async () => {

    const id = place._id;

    const data = {
      name: nameFieldRef.current.value,
      address: addressFieldRef.current.value,
      email: emailFieldRef.current.value,
      phone: phoneFieldRef.current.value,
      latitude: latitudeFieldRef.current.value,
      longitude: longitudeFieldRef.current.value,
      URL_img: [urlImgFieldRef.current.value]
    }

    await dispatcher(editPlace(id, data))
  }

  const setImage = () => {
    setImageSource(urlImgFieldRef.current.value)
  }

  const styles = {
    styleInput: {
      marginTop: 10
    }
  }

  return (
    <>

      <AlertMsg />


      <h1 style={{ color: '#757575' }}>Modificar datos</h1>

      <Box
        component="form"
        // noValidate
        autoComplete="off"
      >

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>

          <Grid item xs={3}>

            <Grid container alignItems="center" justify="center" direction="column">

              <TextField
                label="ID"
                variant="outlined"
                inputRef={idFieldRef}
                defaultValue={idFieldRef.current?.value}
                disabled
                aria-readonly
                style={styles.styleInput}
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                required
                label="Nombre"
                variant="outlined"
                inputRef={nameFieldRef}
                defaultValue={nameFieldRef.current?.value}
                style={styles.styleInput}
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                required
                label="Dirección"
                variant="outlined"
                inputRef={addressFieldRef}
                defaultValue={addressFieldRef.current?.value}
                style={styles.styleInput}
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                label="Teléfono"
                variant="outlined"
                inputRef={phoneFieldRef}
                defaultValue={phoneFieldRef.current?.value}
                style={styles.styleInput}
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                label="Email"
                variant="outlined"
                inputRef={emailFieldRef}
                defaultValue={emailFieldRef.current?.value}
                style={styles.styleInput}
                InputLabelProps={{ shrink: true }}
              />

            </Grid>

          </Grid>

          <Grid item xs={3}>

            <Grid alignItems="center" justify="center" direction="column">

              <TextField
                required
                label="Latitud"
                variant="outlined"
                inputRef={latitudeFieldRef}
                defaultValue={latitudeFieldRef.current?.value}
                style={styles.styleInput}
                InputLabelProps={{ shrink: true }}
              />

<TextField
  required
  label="Longitud"
  variant="outlined"
  inputRef={longitudeFieldRef}
  defaultValue={longitudeFieldRef.current?.value}
  style={styles.styleInput}
  InputLabelProps={{ shrink: true }}
/>

              <TextField
                label="URL Imagen"
                variant="outlined"
                inputRef={urlImgFieldRef}
                defaultValue={urlImgFieldRef.current?.value}
                style={styles.styleInput}
                onChange={() => setImage()}
                InputLabelProps={{ shrink: true }}

              />

              <Button sx={{ backgroundColor: "#26647b ", "&:hover": { color: "#26647b", backgroundColor: "#f1f1f0" } }} variant="contained" onClick={() => _editPlace()} style={{ marginTop: 10 }}>Guardar</Button>


            </Grid>

          </Grid>

          <Grid item xs={3}>

            {
              place.URL_img &&
                place.URL_img.length > 0 && place.URL_img[0] !== 'undefined' && place.URL_img[0] !== '' ?
                <img src={place.URL_img[0]} alt="imagen" style={{ height: '200px' }} />
                :
                <img src={imageSource} alt="imagen" style={{ height: '200px' }} />
            }

          </Grid>

        </Grid>

      </Box>


    </>
  )
}

export default EditForm