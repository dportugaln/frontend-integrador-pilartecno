import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonGroup, Button } from '@mui/material';

import Skeleton from '@mui/material/Skeleton';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { allPlaces, removePlace } from '../../redux/actions/places/placesActions';

import { setAlertOpen, setOperationResult } from '../../redux/appRedux';

const TablenNotes = () => {

  const navigate = useNavigate();

  const places = useSelector((state) => state.placesReducer.places);
  const operationResult = useSelector( (state) => state.app.operationResult );
  const dispatcher = useDispatch();

  const [idPlaceDelete, setIdPlaceDelete] = useState(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatcher(setOperationResult(0));
    dispatcher(allPlaces())
  }, [])

  useEffect( () => {
    if(operationResult===0)
      dispatcher(setAlertOpen(false));
  }, [])

  const handleDelete = (idPlace) => {
    setIdPlaceDelete(idPlace);
    setOpen(true);
  };

  const _deletePlace = () => {
    dispatcher(removePlace(idPlaceDelete));
    setOpen();
  }

  const handleClose = () => {
    setOpen(false);
  };

  // const setSekeleton = () => {
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //..some array

  const items = []

  elements.forEach((val, i) => {
    items.push(<TableRow>
      <TableCell> <Skeleton variant="text" /> </TableCell>
      <TableCell> <Skeleton variant="text" /> </TableCell>
      <TableCell> <Skeleton variant="text" /> </TableCell>
      <TableCell> <Skeleton variant="text" /> </TableCell>
      <TableCell> <Skeleton variant="text" /> </TableCell>
    </TableRow>)
  })


  return (
    <>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Dirección</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Actualizado</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {

            places.length < 1 ?

              items

              :

              places.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{new Date(row.updatedAt).toLocaleString()}</TableCell>
                  <TableCell>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                      <Button onClick={() => navigate(`/places/edit/${row._id}`)} sx={{ backgroundColor: "#26647b ", "&:hover": { color: "#26647b", backgroundColor: "#f1f1f0"} }}> <EditIcon /> </Button>
                      <Button onClick={() => handleDelete(row._id)} sx={{ backgroundColor: "#26647b ", "&:hover": { color: "#26647b", backgroundColor: "#f1f1f0"} }}> <DeleteIcon /> </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))

          }
        </TableBody>
      </Table>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Desea eliminar el registro seleccionado?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => _deletePlace()} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>

    </>
  )
}

export default TablenNotes