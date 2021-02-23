import React from 'react';
import {useDispatch} from 'react-redux';
import {Operations} from '../../store/lessons/operations';

const initialState = {
  title: '',
  level: '',    
  practiceUrl: '',
  tutorialUrl: ''
};

const NewItem = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const [form, setForm] = React.useState(initialState);

  const valid = form.title.length&&form.level.length&&form.practiceUrl.length&&form.tutorialUrl.length;

  const handleSubmit = () => {
    setVisible(false);
    dispatch(Operations.setLesson(form));
    setForm(initialState);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setForm({...form, [name]: e.target.value});    
  };  
  
  return (
    <div className="admin__newItem">
     {!visible && <div className="admin__newItem-btn" onClick={()=>setVisible(true)}>
        +
      </div>}
      {visible && 
        <div className="admin__newItem-form">
          
          <label>
            Title:
            <input 
              type="text"
              placeholder="введите название элемента"
              name='title'
              value={form.title}
              onChange={handleChange}              
            />
          </label>

          <label>
            Level:
            <input 
              type="text"
              placeholder="введите уровень сложности"
              name='level'
              value={form.level}
              onChange={handleChange}              
            />
          </label>

          <label>
          PracticeUrl:
            <input 
              type="text"
              placeholder="введите url"
              name='practiceUrl'
              value={form.practiceUrl}
              onChange={handleChange}              
            />
          </label>

          <label>
          TutorialUrl:
            <input 
              type="text"
              placeholder="введите url"
              name='tutorialUrl'
              value={form.tutorialUrl}
              onChange={handleChange}              
            />
          </label>         

          <div>
            <button  className="admin__newItem-btn-submit" disabled={!valid} onClick={handleSubmit}>Добавить</button>
          </div>
        
        </div>}
    </div>
  );
};

export default NewItem;
