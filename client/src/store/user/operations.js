import {ActionCreators} from './actions';

export const Operations = {
  login: (obj)=>async(dispatch)=>{
    dispatch(ActionCreators.setLoaded(true))
    try{
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();      

      if(data.token){
        dispatch(ActionCreators.setAuth());
        dispatch(ActionCreators.clearError());

        localStorage.setItem('krutiData', JSON.stringify({token: data.token, userId: data.userId}))
      }
      
      if(data.error){
        dispatch(ActionCreators.setError(data.error))
      }
    }
    catch(err){
      console.log(err); 
      
    }
    finally{
      dispatch(ActionCreators.setLoaded(false))
    }
  }
};
