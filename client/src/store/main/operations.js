import { ActionCreators } from './actions';

export const Operations = {
  fetchFeedbacks: () => async(dispatch) => {
    dispatch(ActionCreators.isLoaded(false));
    try{
      const response = await fetch('api/main/feedbacks');
      const responseMobile = await fetch('https://kruti-verti-mobile-default-rtdb.firebaseio.com/user.json');
     
      const data = await response.json(); 
      const mobileData = await responseMobile.json();
      
      const mobileFeedbacks = Object.values(Object.values(mobileData)[0].feedbacks).map((item)=>{
        return {
          feedback: item.text
        }
      });
      
      
      dispatch(ActionCreators.isLoaded(true));   
      dispatch(ActionCreators.setFeedbacks(data.feedbacks));
      dispatch(ActionCreators.setMobileFeedbacks(mobileFeedbacks));
    }
    catch(err){
      console.log(err)
    }
  },
  fetchScore: () => (dispatch) => {
    dispatch(ActionCreators.isLoaded(false));
    fetch(`/api/main/score`)
      .then((res) => {        
        return res.json()
      })
      .then((json) => {        
        dispatch(ActionCreators.setScore(json));
        dispatch(ActionCreators.isLoaded(true));
      })
      .catch((err) => {
        
      });
  },
  setScore: (value) => (dispatch) => {
    
    dispatch(ActionCreators.isLoaded(false));
    fetch(`/api/main/score`, {
      method: 'PATCH',
      body: JSON.stringify({ score: value }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(ActionCreators.setScore(json));
        dispatch(ActionCreators.isLoaded(true));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setFeedback: (value) => (dispatch) => {
    
    dispatch(ActionCreators.isLoaded(false));
    dispatch(ActionCreators.isSuccessSentFeedback(false));
    dispatch(ActionCreators.isLoadingFeedback(true));
    fetch(`/api/main/create`, {
      method: 'POST',
      body: JSON.stringify({ feedback: value }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // dispatch(ActionCreators.setScore(json));
        // dispatch(ActionCreators.isLoaded(true));
        dispatch(ActionCreators.isLoadingFeedback(false));
        dispatch(ActionCreators.isSuccessSentFeedback(true));
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
