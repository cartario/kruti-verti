import { ActionCreators } from './actions';
import axios from 'axios';

export const Operations = {
  fetchScore: () => (dispatch) => {
    dispatch(ActionCreators.isLoaded(false));
    fetch(`/api/main/score`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(ActionCreators.setScore(json));
        dispatch(ActionCreators.isLoaded(true));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setScore: (value) => (dispatch) => {
    
    dispatch(ActionCreators.isLoaded(false));
    fetch(`/api/main/score`, {
      method: 'PATCH',
      body: JSON.stringify({ score: value }),
      headers: {
        'Content-Type': 'application/json',
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
};
