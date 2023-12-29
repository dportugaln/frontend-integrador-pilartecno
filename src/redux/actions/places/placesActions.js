import { getPlaces, getPlace, createPlace, deletePlace, updatePlace } from "../../../api";
import { setOperationResult, setAlertMsg, setAlertOpen, setAlertType } from '../../appRedux';

export const GET_ALL_PLACES = 'GET_ALL_PLACES'
export const GET_PLACE = 'GET_PLACE';
export const ADD_PLACE = 'ADD_PLACE';
export const EDIT_PLACE = 'EDIT_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';

// Actions creator
const getPlacesAction = (places) => ({type: GET_ALL_PLACES, payload: places});
const getPlaceAction = (place) => ({ type: GET_PLACE, payload: place } );
const addPlaceAction = (place) => ( { type: ADD_PLACE, payload: place } );
const deletePlaceAction = (place) => ( { type: DELETE_PLACE, payload: place } );
const updatePlaceAction = (place) => ( { type: EDIT_PLACE, payload: place } );

// Async actions
export const allPlaces = () => {
  return async dispatch => {
    try {
      const places = await getPlaces()
      if(places.statusCode === 200 && places.status==='ok')
        dispatch(getPlacesAction(places.data))
    } catch(err) {
      console.log(err)
    }
  }
}

export const getPlaceId = (id) => {
  return async dispatch => {
    try {
      const place = await getPlace(id)
      dispatch(getPlaceAction(place.data))
    } catch(err) {
      console.log(err)
    }
  }
}

export const addPlace = (placeData) => {
  return async dispatch => {
    try {
      const place = await createPlace(placeData)
      if(place.statusCode === 200 && place.status==='ok'){
        dispatch(setAlertMsg(place.message));
        dispatch(setAlertOpen(true));
        dispatch(setAlertType('success'));
        dispatch(setOperationResult(1));
        dispatch(addPlaceAction(place.data))
      } else {
        dispatch(setAlertMsg(place.message));
        dispatch(setAlertOpen(true));
        dispatch(setAlertType('error'));
      }

    } catch(err) {
      console.log(err)
    }
  }
}

export const editPlace = (id, placeData) => {
  return async dispatch => {
    try {
      const place = await updatePlace(id, placeData);
      if(place.statusCode === 200 && place.status==='ok'){
        dispatch(setAlertMsg(place.message));
        dispatch(setAlertOpen(true));
        dispatch(setAlertType('success'));
        dispatch(setOperationResult(1));
        dispatch(updatePlaceAction(place.data));
      } else {
        dispatch(setAlertMsg(place.message));
        dispatch(setAlertOpen(true));
        dispatch(setAlertType('error'));
      }
    } catch(err) {
      console.log(err)
    }
  }
}

export const removePlace = (id) => {
  return async dispatch => {
    try {
      const place = await deletePlace(id);
      if(place.statusCode === 200 && place.status==='ok'){
        dispatch(setAlertMsg(place.message));
        dispatch(setAlertOpen(true));
        dispatch(setAlertType('success'));
        dispatch(deletePlaceAction(place.data));
        dispatch(allPlaces());
      } else {
        dispatch(setAlertMsg(place.message));
        dispatch(setAlertOpen(true));
        dispatch(setAlertType('error'));
      }
    } catch(err) {
      console.log(err)
    }
  }
}
