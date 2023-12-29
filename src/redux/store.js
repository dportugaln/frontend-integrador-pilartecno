import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { appReducer } from "./appRedux";
import { placesReducer } from "./reducers/places/placesReducer";

const rootReducers = combineReducers({
  app: appReducer,
  placesReducer: placesReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
