import { ActionTypes } from './actions';

const initialState = {
  isLoaded: false,
  feedbackIsLoading: false,
  score: "",
  isLoadingFeedback: false,
  isSuccessSentFeedback: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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
