import {ActionTypes} from './types';

const initialState = {
  items: [],  
  mobileItems: [],
  isLoaded: false,
  errors: [],
  totalScore: 0, 
};

const reducer = (state=initialState, action) => {
  const {type, payload} = action;

  switch(type){    
    case ActionTypes.SET_LESSONS:      
      const totalScore = payload.reduce((acc, item)=>{
        return acc + Number(item.score);
      }, 0);
      return {...state, items: payload.sort((a,b)=>a.level - b.level), totalScore};
    case ActionTypes.SET_LESSON:
      return {...state, items: [...state.items, payload]};
    case ActionTypes.SET_SCORE:
      return {...state, totalScore: payload};
    case ActionTypes.SET_LOADED:
      return {...state, isLoaded: payload};
    case ActionTypes.SET_MOBILE_LESSONS:
      return {...state, mobileItems: payload.sort((a,b)=>a.level - b.level)}; //сортировка по уровню
    case ActionTypes.REMOVE_LESSON:
      return {...state, items: state.items.filter((lesson)=>lesson._id!==payload)};
    case ActionTypes.UPDATE_LESSON:

    const newItems = state.items.map((lesson)=>{
      if(lesson._id===payload.id){
        lesson=payload.obj
      }

      return lesson
    })

      return {...state, items: newItems}
    default:
      return state;
  }
};

export default reducer;
