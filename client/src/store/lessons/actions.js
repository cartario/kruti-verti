import {ActionTypes} from './types';

export const ActionCreators = ({
  setLessons: (arr)=>({
    type: ActionTypes.SET_LESSONS,
    payload: arr
  }),

  setLoaded: (value)=>({
    type: ActionTypes.SET_LOADED,
    payload: value
  }),
});
