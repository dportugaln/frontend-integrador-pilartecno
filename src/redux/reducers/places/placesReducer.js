import { GET_ALL_PLACES, GET_PLACE, ADD_PLACE, EDIT_PLACE, DELETE_PLACE } from "../../actions/places/placesActions"

const initialState = {
  places: [],
  place: [],
}

export const placesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PLACES:
      return { ...state, places: payload }
    case GET_PLACE:
      return { ...state, place: payload }
    case ADD_PLACE:
      return { ...state, place: payload }
    case EDIT_PLACE:
      return { ...state, place: payload }
    case DELETE_PLACE:
      return { ...state, place: payload }
    default:
      return state
  }
}