import {ActionTypes} from './types';

export const ActionCreators = ({
  setLessons: (arr)=>({
    type: ActionTypes.SET_LESSONS,
    payload: arr
  }),

  setMobileLessons: (arr)=>({
    type: ActionTypes.SET_MOBILE_LESSONS,
    payload: arr
  }),

  setLesson: (obj)=>({
    type: ActionTypes.SET_LESSON,
    payload: obj
  }),

  setLoaded: (value)=>({
    type: ActionTypes.SET_LOADED,
    payload: value
  }),

  removeLesson: (id)=>({
    type: ActionTypes.REMOVE_LESSON,
    payload: id
  }),

  updateLesson: (id, obj)=>({
    type: ActionTypes.UPDATE_LESSON,
    payload: {id, obj}
  }),

  setScore: (value)=>({
    type: ActionTypes.SET_SCORE,
    payload: value
  }),
});
