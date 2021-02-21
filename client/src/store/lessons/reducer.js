import {ActionTypes} from './types';

const initialState = {
  items: [],
  isLoaded: false
};

const reducer = (state=initialState, action) => {
  const {type, payload} = action;

  switch(type){
    case ActionTypes.SET_LESSONS:
      return {...state, items: payload};
    case ActionTypes.SET_LOADED:
      return {...state, isLoaded: payload};
    default:
      return state;
  }
};

export default reducer;
