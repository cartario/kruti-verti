import { ActionCreators } from './actions';
import axios from 'axios';

export const Operations = {
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
