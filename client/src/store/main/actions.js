export const ActionTypes = {
  IS_LOADED: `main/IS_LOADED`,
  SET_FEEDBACKS: 'main/SET_FEEDBACKS',
  SET_MOBILE_FEEDBACKS: 'main/SET_MOBILE_FEEDBACKS',
  SET_FEEDBACK_IS_LOADING: `main/SET_FEEDBACK_IS_LOADING`,
  SET_SCORE: `main/SET_SCORE`,
  IS_LOADING_FEEDBACK: `main/IS_LOADING_FEEDBACK`,
  IS_SUCCESS_SENT_FEEDBACK: `main/IS_SUCCESS_SENT_FEEDBACK`
};

export const ActionCreators = ({
  setScore: (payload) =>({
    type: ActionTypes.SET_SCORE,
    payload
  }),
  isLoaded: (payload) =>({
    type: ActionTypes.IS_LOADED,
    payload
  }),
  isLoadingFeedback: (payload) =>({
    type: ActionTypes.IS_LOADING_FEEDBACK,
    payload
  }),
  isSuccessSentFeedback: (payload) =>({
    type: ActionTypes.IS_SUCCESS_SENT_FEEDBACK,
    payload
  }),
  setFeedbacks: (feedbacks)=>({
    type: ActionTypes.SET_FEEDBACKS,
    payload: feedbacks
  }),

  setMobileFeedbacks: (feedbacks)=>({
    type: ActionTypes.SET_MOBILE_FEEDBACKS,
    payload: feedbacks
  }),
});
