import {ActionTypes} from './types';

export const ActionCreators = ({
  setAuth: ()=>({
    type: ActionTypes.SET_AUTH,      
  }),
  
  setLoaded: (value) => ({
    type: ActionTypes.SET_LOADED,
    payload: value
  }),

  setError: (value) => ({
    type: ActionTypes.SET_ERROR,
    payload: value
  }),

  clearError: () => ({
    type: ActionTypes.CLEAR_ERROR
  })
})