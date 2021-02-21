import {ActionCreators} from './actions';

export const Operations = {
  fetchLessons: ()=>async(dispatch)=>{
    dispatch(ActionCreators.setLoaded(true));
    try{
      const response = await fetch('/api/lessons/');
      const data = await response.json();

      dispatch(ActionCreators.setLessons(data.lessons));
    }
    catch(err){
      console.log(err)
    }
    finally{
      dispatch(ActionCreators.setLoaded(false));
    }
  },

  
}