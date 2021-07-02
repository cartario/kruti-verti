import React from 'react';
import { Operations } from '../../store/main/operations';
import {ActionCreators} from '../../store/main/actions';
import { useDispatch, useSelector } from 'react-redux';

const Feedback = () => {
  const [feedback, setFeedback] = React.useState('');
  const dispatch = useDispatch();
  const isLoadingFeedback = useSelector(({main})=>main.isLoadingFeedback);
  const isSuccessSentFeedback = useSelector(({main})=>main.isSuccessSentFeedback);

  const handleFeedback = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Operations.setFeedback(feedback));
    setFeedback('');
  };

  if(isSuccessSentFeedback){
    setTimeout(()=>{
      dispatch(ActionCreators.isSuccessSentFeedback(false))
    },3000)
  }

  return (
    <form 
      onSubmit={handleSubmit}>
        <div className="online__top-feedback">
          <textarea placeholder="введите сообщение" value={feedback} onChange={handleFeedback} required />
          { isSuccessSentFeedback ? <p className="online__top-feedback-tost">Спасибо за сообщение!</p> : ""}
           <button disabled={isLoadingFeedback}>{isLoadingFeedback ?  "...Loading":  'Отправить сообщение'}</button>
        </div>
      
    </form>
  );
};

export default Feedback;
