import {ActionTypes} from './types';

const initialState = {
  isAuth: false,
  isLoaded: false,
  errors: []
};

const reducer = (state=initialState, action) => {
  const {type, payload} = action;
  switch(type){
    case ActionTypes.SET_AUTH:
      return {...state, isAuth: true};
    case ActionTypes.SET_LOADED:
      return {...state, isLoaded: payload};
    case ActionTypes.SET_ERROR:
      return {...state, errors: [...state.errors, payload]};
    case ActionTypes.CLEAR_ERROR:
      return {...state, errors: []};
    default:
      return state;
  }
};

export default reducer;
