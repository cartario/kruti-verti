import { ActionTypes } from './actions';

const initialState = {
  isLoaded: false,
  feedbacks: [],
  mobileFeedbacks: [],
  feedbackIsLoading: false,
  score: "",
  isLoadingFeedback: false,
  isSuccessSentFeedback: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_FEEDBACKS:
      const copy = payload.slice(1)
      copy.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));      
      return {...state, feedbacks: copy};
    case ActionTypes.SET_MOBILE_FEEDBACKS:      
      return {...state, mobileFeedbacks: payload}
    case ActionTypes.SET_FEEDBACK_IS_LOADING:
      return { ...state, feedbackIsLoading: payload };
    case ActionTypes.IS_LOADED:
      return { ...state, isLoaded: payload };
    case ActionTypes.SET_SCORE:
      return { ...state, score: payload };
    case ActionTypes.IS_LOADING_FEEDBACK:
      return { ...state, isLoadingFeedback: payload };
    case ActionTypes.IS_SUCCESS_SENT_FEEDBACK:
      return { ...state, isSuccessSentFeedback: payload };
    default:
      return state;
  }
};

export default reducer;
