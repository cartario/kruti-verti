export const ActionTypes = {
  IS_LOADED: `main/IS_LOADED`,
  SET_FEEDBACK_IS_LOADING: `main/SET_FEEDBACK_IS_LOADING`,
  SET_SCORE: `main/SET_SCORE`
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
});
